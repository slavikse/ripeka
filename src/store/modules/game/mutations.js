function getCurrentSign(sign) {
  return sign ? 'X' : 'O';
}

export default {
  SET_CELL(state, index) {
    const currentSign = getCurrentSign(state.sign);
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
