import { deepClone } from '../../../utilities';

// Для контролируемого размещения ячеек в сетке указаны: колонка и строка.
const cells = [
  { id: 0, col: 0, row: 0, sign: '', classes: [] },
  { id: 1, col: 1, row: 0, sign: '', classes: [] },
  { id: 2, col: 2, row: 0, sign: '', classes: [] },

  { id: 3, col: 0, row: 1, sign: '', classes: [] },
  { id: 4, col: 1, row: 1, sign: '', classes: [] },
  { id: 5, col: 2, row: 1, sign: '', classes: [] },

  { id: 6, col: 0, row: 2, sign: '', classes: [] },
  { id: 7, col: 1, row: 2, sign: '', classes: [] },
  { id: 8, col: 2, row: 2, sign: '', classes: [] },
];

export default {
  cells,
  copied_cells: deepClone(cells),
};
