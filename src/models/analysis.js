import {
} from '../services/analysis';

export default {
  namespace: 'analysis',

  state: {
  },

  effects: {
  },

  reducers: {
    save(state, { payload }) {
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
