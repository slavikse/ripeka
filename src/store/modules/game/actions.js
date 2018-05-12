export default {
  determine_winner({ commit }, sign) {
    commit('DETERMINE_WINNER', sign);
  },

  is_over({ commit }) {
    commit('IS_OVER');
  },

  reset({ commit, rootState }) {
    commit('RESET', rootState);
  },
};
