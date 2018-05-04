export default {
  OCCUPY_CELL(state, { rootState, index }) {
    state.cells[index].sign = rootState.player.sign;
  },
};
