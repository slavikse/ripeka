export default {
  occupy_cell({ commit, rootState }, index) {
    commit('OCCUPY_CELL', { rootState, index });
  },

  taped({ commit }, index) {
    commit('TAPED', { index });
  },
};
