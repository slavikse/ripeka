const cells = [
  '', '', '',
  '', '', '',
  '', '', '',
];

export default {
  // true: X | false: O.
  sign: true,
  // Игровое поле (в линейном представлении).
  cells,
  cellsCopy: [...cells],
};
