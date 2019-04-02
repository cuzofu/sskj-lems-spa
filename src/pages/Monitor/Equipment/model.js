/**
 * 设备监控
 */
export default {
  namespace: 'equipment',

  state: {},

  effects: {},

  reducers: {
    save(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
    clear() {
      return {};
    },
  },
};
