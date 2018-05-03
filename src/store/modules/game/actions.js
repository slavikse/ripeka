export default {
  async set_cell({ commit, state }, index) {
    await commit('SET_CELL', { index, currentSign: state.current_sign });
  },

  async swap_current_sing({ commit }) {
    await commit('SWAP_CURRENT_SING');
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
