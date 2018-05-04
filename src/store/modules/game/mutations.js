import { deepClone } from '../../../utilities';

export default {
  DEFINE_WINNER(state, sign) {
    state.winner = sign;
  },

  IS_OVER(state) {
    state.is_over = true;
  },

  RESET(state, rootState) {
    state.winner = '';
    state.is_over = false;

    rootState.field.cells = deepClone(rootState.field.copied_cells);

    rootState.player.move = 0;
    rootState.player.sign = 'x';
  },
};
