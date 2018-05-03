export default {
  async set_cell({ commit, getters }, index) {
    await commit('SET_CELL', { index, currentSign: getters.current_sign });
  },

  async swap_sign({ commit }) {
    await commit('SWAP_SIGN');
  },

  async increment_move({ commit }) {
    await commit('INCREMENT_MOVE');
  },

  async game_over({ commit }) {
    await commit('GAME_OVER');
  },

  async reset_game({ commit }) {
    await commit('RESET_GAME');
  },
};
