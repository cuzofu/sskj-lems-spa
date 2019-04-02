/**
 * 工程项目基础数据
 */
export default {
  namespace: 'engs',

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
