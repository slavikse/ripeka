export default {
  async occupy_cell({ commit, rootState }, index) {
    await commit('OCCUPY_CELL', { rootState, index });
  },

  async taped({ commit }, index) {
    await commit('TAPED', { index });
  },
};
