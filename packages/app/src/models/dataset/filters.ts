/**
 * Header filters
 */
import { useModel } from '@umijs/max';
import {
  LabelDiffMode,
  DisplayOption,
  AnnotationType,
  IMG_CLOUMN_COUNT_MAX,
} from '@/constants';
import { getDefaultDisplayOptions } from '@/utils/annotation';
import { reportEvent } from '@/logs';

export default () => {
  const { pageState, setPageState, pageData, setPageData } =
    useModel('dataset.common');

  const onCategoryChange = (categoryId: string) => {
    setPageState((s) => {
      s.filterValues.categoryId = categoryId;
      s.page = 1;
    });
    reportEvent('dataset_header_filter_category', {
      categoryId,
    });
  };

  const onColumnCountChange = (countState: number | boolean) => {
    let cloumnCount: number;
    if (typeof countState === 'number') {
      cloumnCount = countState;
    } else if (countState) {
      // +1
      cloumnCount =
        pageState.cloumnCount < IMG_CLOUMN_COUNT_MAX
          ? pageState.cloumnCount + 1
          : pageState.cloumnCount;
    } else {
      // -1
      cloumnCount =
        pageState.cloumnCount > 1
          ? pageState.cloumnCount - 1
          : pageState.cloumnCount;
    }
    setPageState((s) => {
      s.cloumnCount = cloumnCount;
    });
    reportEvent('dataset_header_filter_cloumn_count', {
      cloumnCount,
    });
  };

  const onDisplayOptionsChange = (values: any) => {
    setPageState((s) => {
      s.filterValues.displayOptions = values as DisplayOption[];
    });
    reportEvent('dataset_header_filter_display_options', {
      selectedOptions: values,
      annotationType: pageState.filterValues.displayAnnotationType,
    });
  };

  const onLabelsChange = (values: any) => {
    setPageState((s) => {
      // Sort when selected.
      s.filterValues.selectedLabelIds = values.sort((a: string, b: string) => {
        return (
          pageData.filters.labels.findIndex((item) => item.id === a) -
          pageData.filters.labels.findIndex((item) => item.id === b)
        );
      });
    });
    reportEvent('dataset_header_filter_labelsets_selected', {
      labelsetCount: values.length,
    });
  };

  const onLabelsDiffModeChange = (mode: LabelDiffMode) => {
    setPageState((s) => {
      s.filterValues.diffMode = mode;
    });
    reportEvent('dataset_header_filter_labelsets_diff_mode', {
      diffMode: mode,
    });
  };

  const onLabelConfidenceChange = (index: number, value: [number, number]) => {
    setPageData((s) => {
      s.filters.labels[index].confidenceRange = value;
    });
  };

  const onDisplayAnnotationTypeChange = (type: AnnotationType) => {
    const [options, optionsValue] = getDefaultDisplayOptions(
      pageState.filterValues.displayOptions,
      type,
    );
    setPageData((s) => {
      s.filters.displayOptions = options;
    });
    setPageState((s) => {
      s.filterValues.displayAnnotationType = type;
      s.filterValues.displayOptions = optionsValue;
    });
    reportEvent('dataset_header_filter_display_annotation', {
      annotationType: type,
    });
  };

  return {
    onCategoryChange,
    onColumnCountChange,
    onDisplayOptionsChange,
    onDisplayAnnotationTypeChange,
    onLabelsChange,
    onLabelsDiffModeChange,
    onLabelConfidenceChange,
  };
};
