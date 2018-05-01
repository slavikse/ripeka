export default {
  set_cell({ commit, getters }, index) {
    commit('SET_CELL', { index, currentSign: getters.current_sign });
  },

  swap_sign({ commit }) {
    commit('SWAP_SIGN');
  },

  reset_game({ commit }) {
    commit('RESET_GAME');
  },
};
