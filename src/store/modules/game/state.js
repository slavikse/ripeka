import { deepClone } from '../../../utilities';

// Контролируемое размещение в грид ячейках.
const cells = [
  { key: 0, col: 0, row: 0, sign: '' },
  { key: 1, col: 1, row: 0, sign: '' },
  { key: 2, col: 2, row: 0, sign: '' },
  { key: 3, col: 0, row: 1, sign: '' },
  { key: 4, col: 1, row: 1, sign: '' },
  { key: 5, col: 2, row: 1, sign: '' },
  { key: 6, col: 0, row: 2, sign: '' },
  { key: 7, col: 1, row: 2, sign: '' },
  { key: 8, col: 2, row: 2, sign: '' },
];

export default {
  // Игровое поле (в линейном представлении).
  cells,
  cells_copy: deepClone(cells),
  current_sign: 'x',
  // Кол-во сделанных ходов.
  move: 0,
  // Максимальное кол-во ходов для поля 3*3 (0..8).
  max_move: 8,
  // Статус игры: в процессе (false) | окончена (true).
  is_game_over: false,
};
