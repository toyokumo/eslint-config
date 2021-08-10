// rough vuex typing
export type State = {
  count: number;
};

export type Mutation = {
  increment: (state: State) => void;
};

export type Store = {
  state: State;
  mutations: Mutation;
};

// vuex
const state: State = {
  count: 0,
};

const mutations: Mutation = {
  increment(state): void {
    state.count += 1;
  },
};

export const store: Store = {
  state,
  mutations,
};
