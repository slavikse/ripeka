const cells = [
  '', '', '',
  '', '', '',
  '', '', '',
];

export default {
  // Игровое поле (в линейном представлении).
  cells,
  cells_copy: [...cells],
  // true: X | false: O.
  sign: true,
  // Кол-во сделанных ходов.
  move: 0,
  // Максимальное кол-во ходов для поля 3*3 (0..8).
  max_move: 8,
  // Статус игры: в процессе (false) | окончена (true).
  is_game_over: false,
};
