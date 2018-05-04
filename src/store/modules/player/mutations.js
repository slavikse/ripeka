export default {
  MOVE(state) {
    state.move += 1;
  },

  SWAP_SING(state) {
    state.sign = state.sign === 'x' ? 'o' : 'x';
  },
};
