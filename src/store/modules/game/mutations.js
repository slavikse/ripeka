export default {
  SET_CELL(state, { index, currentSign }) {
    state.cells.splice(index, 1, currentSign);
  },

  SWAP_SIGN(state) {
    state.sign = !state.sign;
  },

  RESET_GAME(state) {
    state.cells = [...state.cellsCopy];
    state.sign = true;
  },
};
