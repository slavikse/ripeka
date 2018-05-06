export default {
  OCCUPY_CELL(state, { rootState, index }) {
    state.cells[index].sign = rootState.player.sign;
  },

  TAPED(state, { index }) {
    state.cells[index].classes.push('taped');
  },
};
