export const REFERENCE_DATA_STALE_TIME = Infinity;

export function useTanstackQuery() {
  return {
    loading: false,
    isFetching: false,
    isPlaceholderData: false,
    reload: async () => undefined,
    loadMore: async () => undefined,
    data: undefined,
    error: undefined,
    hasNext: false,
  };
}
