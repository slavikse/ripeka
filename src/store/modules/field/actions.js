export default {
  async occupy_cell({ commit, rootState }, index) {
    await commit('OCCUPY_CELL', { rootState, index });
  },
};
