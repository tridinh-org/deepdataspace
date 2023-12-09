import { useModel } from '@umijs/max';
import { useKeyPress } from 'ahooks';
import { DEFAULT_PAGE_DATA, DEFAULT_PAGE_STATE } from '@/models/dataset/type';
import { reportEvent } from '@/logs';

export default () => {
  const { pageState, setPageState, pageData, setPageData } =
    useModel('dataset.common');
  const { selectItem, enterFlagTools, limitNoSaveChangePage } =
    useModel('dataset.flag');

  const clickItem = (index: number) => {
    selectItem(index);
  };

  const doubleClickItem = (index: number) => {
    setPageState((s) => {
      s.previewIndex = index;
    });
    reportEvent('dataset_item_preview');
  };

  const onPageChange = (page: number, isShortcut = false) => {
    if (pageState.page === page) return;
    limitNoSaveChangePage().then(() => {
      setPageState((s) => {
        s.page = page;
      });
      reportEvent('dataset_list_change_page', {
        page,
        pageSize: pageState.pageSize,
        isShortcut,
      });
    });
  };

  const onPageSizeChange = (_current: number, size: number) => {
    limitNoSaveChangePage().then(() => {
      setPageState((s) => {
        s.pageSize = size;
      });
    });
  };

  /**
   * Next page：D
   * Previous page：A
   */
  useKeyPress(
    ['a', 'A', 'd', 'D', 'shift.q', 'shift.Q', 'shift.e', 'shift.E', 'z', 'Z'],
    (e: KeyboardEvent) => {
      if (pageState.previewIndex >= 0) {
        return;
      }
      if (['a', 'A'].includes(e.key) && pageState.page > 1) {
        onPageChange(pageState.page - 1, true);
      }
      if (
        ['d', 'D'].includes(e.key) &&
        pageState.page < Math.ceil(pageData.total / pageState.pageSize)
      ) {
        onPageChange(pageState.page + 1, true);
      }
    },
  );

  const onPageDidMount = () => {
    // Default enter flag
    enterFlagTools();
  };

  const onPageWillUnmount = () => {
    // Clear page data and status.
    setPageData((s) => {
      Object.assign(s, DEFAULT_PAGE_DATA);
    });
    setPageState((s) => {
      Object.assign(s, DEFAULT_PAGE_STATE);
    });
  };

  return {
    onPageDidMount,
    onPageWillUnmount,
    clickItem,
    doubleClickItem,
    onPageChange,
    onPageSizeChange,
  };
};
