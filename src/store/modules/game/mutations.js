import { deepClone } from '../../../utilities';

export default {
  SET_CELL(state, { index, currentSign }) {
    state.cells[index].sign = currentSign;
  },

  SWAP_CURRENT_SING(state) {
    if (state.current_sign === 'x') {
      state.current_sign = 'o';
    } else {
      state.current_sign = 'x';
    }
  },

  INCREMENT_MOVE(state) {
    state.move += 1;
  },

  GAME_OVER(state) {
    state.is_game_over = true;
  },

  RESET_GAME(state) {
    state.cells = deepClone(state.cells_copy);
    state.current_sign = 'x';
    state.move = 0;
    state.is_game_over = false;
  },
};
