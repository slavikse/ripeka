export default {
  SET_CELL(state, { index, currentSign }) {
    state.cells.splice(index, 1, currentSign);
  },

  SWAP_SIGN(state) {
    state.sign = !state.sign;
  },

  INCREMENT_MOVE(state) {
    state.move += 1;
  },

  GAME_OVER(state) {
    state.is_game_over = true;
  },

  RESET_GAME(state) {
    state.cells = [...state.cells_copy];
    state.move = 0;
    state.sign = true;
    state.is_game_over = false;
  },
};
