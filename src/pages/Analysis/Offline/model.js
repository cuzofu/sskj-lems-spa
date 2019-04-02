/**
 * 离线时长统计
 */
export default {
  namespace: 'offline',

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
