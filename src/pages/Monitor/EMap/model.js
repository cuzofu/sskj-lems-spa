/**
 * 电子地图
 */
export default {
  namespace: 'emap',

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
