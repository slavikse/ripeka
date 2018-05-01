export default {
  set_cell({ commit }, index) {
    commit('SET_CELL', index);
  },

  swap_sign({ commit }) {
    commit('SWAP_SIGN');
  },

  reset_game({ commit }) {
    commit('RESET_GAME');
  },
};
