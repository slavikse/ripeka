import { deepClone } from '../../../utilities';

// Для контролируемого размещения ячеек в сетке указаны: колонка и строка.
const cells = [
  { id: 0, col: 0, row: 0, sign: '' },
  { id: 1, col: 1, row: 0, sign: '' },
  { id: 2, col: 2, row: 0, sign: '' },

  { id: 3, col: 0, row: 1, sign: '' },
  { id: 4, col: 1, row: 1, sign: '' },
  { id: 5, col: 2, row: 1, sign: '' },

  { id: 6, col: 0, row: 2, sign: '' },
  { id: 7, col: 1, row: 2, sign: '' },
  { id: 8, col: 2, row: 2, sign: '' },
];

export default {
  cells,
  copied_cells: deepClone(cells),
};
