export default {
  async move({ commit }) {
    await commit('MOVE');
  },

  async swap_sing({ commit }) {
    await commit('SWAP_SING');
  },
};
