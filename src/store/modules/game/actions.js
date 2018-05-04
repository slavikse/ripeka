export default {
  async define_winner({ commit }, sign) {
    await commit('DEFINE_WINNER', sign);
  },

  async is_over({ commit }) {
    await commit('IS_OVER');
  },

  async reset({ commit, rootState }) {
    await commit('RESET', rootState);
  },
};
