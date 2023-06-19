import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useEventListener, useMouse } from 'ahooks';
import { useImmer } from 'use-immer';
import { isInCanvas } from '@/utils/compute';
import { zoomImgSize } from '@/utils/annotation';
import {
  MIN_SCALE,
  MAX_SCALE,
  BUTTON_SCALE_STEP,
  WHEEL_SCALE_STEP,
} from '@/constants';
import { fixedFloatNum } from '@/utils/digit';

interface IProps {
  isRequiring: boolean;
  visible: boolean;
  minPadding?: {
    top: number;
    left: number;
  };
  allowMove: boolean;
  showMouseAim?: boolean;
  onClickBg?: React.MouseEventHandler<HTMLDivElement>;
}

export default function useCanvasContainer({
  isRequiring,
  visible,
  minPadding = { top: 0, left: 0 },
  allowMove,
  showMouseAim,
  onClickBg,
}: IProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerMouse = useMouse(containerRef.current);

  const [scale, setScale] = useState(1);

  /** The original size of image */
  const [naturalSize, setNaturalSize] = useState<ISize>({
    width: 0,
    height: 0,
  });

  /** The scaled size of image */
  const clientSize = useMemo(
    () => ({
      width: naturalSize.width * scale,
      height: naturalSize.height * scale,
    }),
    [naturalSize, scale],
  );

  /** The top-left location on canvas container */
  const imagePos = useRef<IPoint>({ x: 0, y: 0 });

  // Scale info
  const lastScalePosRef = useRef<
    | {
        posRatioX: number;
        posRatioY: number;
        mouseX: number;
        mouseY: number;
      }
    | undefined
  >(undefined);

  // Whether the mouse is moving
  const movedRef = useRef<boolean>(false);

  const contentMouse = useMemo(() => {
    return {
      ...containerMouse,
      elementW: clientSize.width,
      elementH: clientSize.height,
      elementX: containerMouse.elementX - imagePos.current.x,
      elementY: containerMouse.elementY - imagePos.current.y,
    };
  }, [containerMouse, clientSize]);

  const [movingImgAnchor, setMovingImgAnchor] = useImmer<IPoint | null>(null);

  /** Initial position to fit container */
  useEffect(() => {
    const containerWidth = containerMouse.elementW;
    const containerHeight = containerMouse.elementH;

    if (naturalSize && containerWidth && containerHeight) {
      const [width, height, scale] = zoomImgSize(
        naturalSize.width,
        naturalSize.height,
        containerWidth - minPadding.left * 2,
        containerHeight - minPadding.top * 2,
      );
      imagePos.current = {
        x: (containerWidth - width) * 0.5,
        y: (containerHeight - height) * 0.5,
      };
      setScale(scale);
      lastScalePosRef.current = undefined;
    }
  }, [naturalSize, containerMouse.elementW, containerMouse.elementH]);

  const adaptImagePosWhileZoom = () => {
    const containerWidth = containerMouse.elementW;
    const containerHeight = containerMouse.elementH;

    // Default zoom center
    let posRatioX = 0.5;
    let posRatioY = 0.5;
    let mouseX = containerWidth / 2;
    let mouseY = containerHeight / 2;

    if (lastScalePosRef.current) {
      posRatioX = lastScalePosRef.current.posRatioX;
      posRatioY = lastScalePosRef.current.posRatioY;
      mouseX = lastScalePosRef.current.mouseX;
      mouseY = lastScalePosRef.current.mouseY;
    }
    const x = mouseX - clientSize.width * posRatioX;
    const y = mouseY - clientSize.height * posRatioY;

    imagePos.current = { x, y };

    console.log(x.toFixed(0), y.toFixed(0));
  };

  useEffect(() => {
    adaptImagePosWhileZoom();
  }, [clientSize]);

  const zoom = (isZoomIn: boolean, step: number, isZoomBtn?: boolean) => {
    if (!visible || isRequiring) return;
    setScale((s) => {
      let scale = isZoomIn
        ? Math.min(MAX_SCALE, fixedFloatNum(s + step, 2))
        : Math.max(MIN_SCALE, fixedFloatNum(s - step, 2));

      // Record the starting zoom scale ratio.
      if (
        isZoomBtn ||
        !contentMouse.elementX ||
        !containerMouse.elementX ||
        !clientSize.width
      ) {
        // Center zoom.
        lastScalePosRef.current = undefined;
      } else if (
        !lastScalePosRef.current ||
        (movedRef.current &&
          (containerMouse.elementX !== lastScalePosRef.current.mouseX ||
            containerMouse.elementY !== lastScalePosRef.current.mouseY))
      ) {
        // Focus zoom && Mouse move
        lastScalePosRef.current = {
          posRatioX: contentMouse.elementX / clientSize.width,
          posRatioY: contentMouse.elementY / clientSize.height,
          mouseX: containerMouse.elementX,
          mouseY: containerMouse.elementY,
        };
        movedRef.current = false;
      }
      return scale;
    });
  };

  const onZoomIn = () => {
    zoom(true, BUTTON_SCALE_STEP, true);
  };

  const onZoomOut = () => {
    zoom(false, BUTTON_SCALE_STEP, true);
  };

  // Zoom gesture.
  const onWheelMove: React.WheelEventHandler<HTMLDivElement> = (event) => {
    if (!visible || isRequiring) return;
    const wheelDirection = event.deltaY;
    if (wheelDirection > 0) {
      zoom(false, WHEEL_SCALE_STEP);
    } else if (wheelDirection < 0) {
      zoom(true, WHEEL_SCALE_STEP);
    }
  };

  const onReset = () => {
    lastScalePosRef.current = undefined;
    setScale(1);
  };

  // Reset data when hidden.
  useEffect(() => {
    if (!visible) {
      setNaturalSize({ width: 0, height: 0 });
      setScale(1);
      imagePos.current = { x: 0, y: 0 };
      lastScalePosRef.current = undefined;
    }
  }, [visible]);

  useEventListener(
    'mousedown',
    () => {
      if (!visible || !containerRef.current) return;
      setMovingImgAnchor({
        x: contentMouse.elementX,
        y: contentMouse.elementY,
      });
    },
    { target: () => containerRef.current },
  );

  useEventListener(
    'mousemove',
    () => {
      if (!visible) return;
      movedRef.current = true;
      if (movingImgAnchor && allowMove) {
        const offsetX = contentMouse.elementX - movingImgAnchor.x;
        const offsetY = contentMouse.elementY - movingImgAnchor.y;
        const { x, y } = imagePos.current;
        imagePos.current = {
          x: x + offsetX,
          y: y + offsetY,
        };
      }
    },
    { target: () => containerRef.current },
  );

  useEventListener(
    'mouseup',
    () => {
      if (!visible || !allowMove) return;
      // Stop moving the image.
      if (movingImgAnchor) {
        setMovingImgAnchor(null);
        return;
      }
    },
    { target: () => containerRef.current },
  );

  useEffect(() => {
    if (!allowMove) {
      setMovingImgAnchor(null);
    }
  }, [allowMove]);

  const onLoadImg = (e: React.UIEvent<HTMLImageElement, UIEvent>) => {
    const img = e.target as HTMLImageElement;
    const naturalSize = { width: img.naturalWidth, height: img.naturalHeight };
    setNaturalSize(naturalSize);
  };

  /** Container render function */
  const CanvasContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    if (!visible) return null;
    return (
      <div
        ref={containerRef}
        onWheel={onWheelMove}
        onClick={onClickBg}
        className={className}
      >
        {children}
        {showMouseAim && !allowMove && isInCanvas(contentMouse) && (
          <>
            {/* leftLine */}
            <div
              style={{
                position: 'fixed',
                backgroundColor: '#fff',
                height: 1,
                left: containerMouse.elementPosX,
                bottom: window.innerHeight - containerMouse.clientY - 1,
                width: containerMouse.elementX - 18,
              }}
            />
            {/* rightLine */}
            <div
              style={{
                position: 'fixed',
                backgroundColor: '#fff',
                height: 1,
                left: containerMouse.clientX + 18,
                bottom: window.innerHeight - containerMouse.clientY - 1,
                width: containerMouse.elementW - containerMouse.elementX - 18,
              }}
            />
            {/* upLine */}
            <div
              style={{
                position: 'fixed',
                backgroundColor: '#fff',
                width: 1,
                bottom: window.innerHeight - containerMouse.clientY + 18,
                left: containerMouse.clientX - 1,
                height: containerMouse.elementY - 18,
              }}
            />
            {/* downLine */}
            <div
              style={{
                position: 'fixed',
                backgroundColor: '#fff',
                width: 1,
                bottom: 0,
                left: containerMouse.clientX - 1,
                height: containerMouse.elementH - containerMouse.elementY - 18,
              }}
            />
          </>
        )}
      </div>
    );
  };

  return {
    CanvasContainer,
    scale,
    containerRef,
    naturalSize,
    clientSize,
    containerMouse,
    contentMouse,
    imagePos,
    onLoadImg,
    onZoomIn,
    onZoomOut,
    onWheelMove,
    onReset,
  };
}