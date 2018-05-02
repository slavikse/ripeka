const cells = [
  '', '', '',
  '', '', '',
  '', '', '',
];

export default {
  // Игровое поле (в линейном представлении).
  cells,
  cellsCopy: [...cells],
  // Кол-во сделанных ходов.
  move: 0,
  // true: X | false: O.
  sign: true,
};
