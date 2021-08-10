// vuex
const state = {
  count: 0,
};

const mutations = {
  increment(state) {
    state.count += 1;
  },
};

export const store = {
  state,
  mutations,
};
