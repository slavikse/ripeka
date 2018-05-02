export default {
  SET_CELL(state, { index, currentSign }) {
    state.cells.splice(index, 1, currentSign);
  },

  INCREMENT_MOVE(state) {
    state.move += 1;
  },

  SWAP_SIGN(state) {
    state.sign = !state.sign;
  },

  RESET_GAME(state) {
    state.cells = [...state.cellsCopy];
    state.move = 0;
    state.sign = true;
  },
};
