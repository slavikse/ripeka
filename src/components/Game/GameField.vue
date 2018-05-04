<template>
  <GridLayout
    columns='*, *, *'
    rows='*, *, *'
    class='field'
  >
    <Button
      v-for='(cell, index) in cells'
      :key='cell.id'
      :col='cell.col'
      :row='cell.row'
      :text='cell.sign'
      @tap='makeMove(index)'
      class='cell'
    />
  </GridLayout>
</template>

<script>
import { mapState } from 'vuex';
// import { noise } from '../../utilities';
import { horizontalGroup, verticalGroup, obliquelyGroup } from './verifyGroups';

// animation / transition / requestAnimationFrame - нету. :(
// :style='getStyle'
// rotateDeg: 0,
// getStyle() {
//   return {
//     transform: `rotate(${this.rotateDeg}deg)`,
//   };
// },
// Каждый кадр за ~16.6ms, что составит ~60fps.
// intervalID: null,
// this.intervalID = setInterval(this.rotate, 1000/60);
// rotate() {
//   this.rotateDeg += 20;
// },
// destroyed() {
//   clearInterval(this.intervalID);
// },

export default {
  name: 'GameField',

  data() {
    return {
      // Исправление странной ошибки, будто бы cell в v-for=cell.. не является реактивной...
      cell: {},
    };
  },

  methods: {
    async makeMove(index) {
      if (this.is_over) {
        // noise({ name: 'cancel' });
      } else {
        await this.canMove(index);
      }
    },

    async canMove(index) {
      // Проверка строки на пустоту = пустая ячейка.
      if (this.cells[index].sign.length === 0) {
        await this.moving(index);
      } else {
        // noise({ name: 'cancel' });
      }
    },

    async moving(index) {
      // noise({ name: 'moving' });
      await this.$store.dispatch('field/occupy_cell', index);

      // При меньшем кол-ве ходов выиграть невозможно, поэтому выигрыш не проверяется.
      // Начиная с 5 (0-4] хода появляется возможность победить: 3 - X, 2 - Y.
      if (this.move > 3 && this.verify()) {
        await this.victory();
        return;
      }

      // Поле заполнено. Ходить не куда.
      if (this.move === this.max_move) {
        await this.drawnGame();
        return;
      }

      await this.$store.dispatch('player/move');
      await this.$store.dispatch('player/swap_sing');
    },

    // Проверка победы текущего игрока после его хода на основе
    // сгруппированных данных о всех возможных вариантов ходов.
    // Если одна из групп выдаст выигрыш, то вернет true - Победа!
    verify() {
      const cells = this.cells;
      const sign = this.sign;

      return horizontalGroup({ cells, sign })
        || verticalGroup({ cells, sign, start: 0, step: 2 })
        || obliquelyGroup({ cells, sign });
    },

    // todo победный экран с оповещением кто победил.
    async victory() {
      // noise({ name: 'winner' });
      await this.$store.dispatch('game/define_winner', this.sign);
      await this.$store.dispatch('game/is_over');
    },

    // todo экран с оповещением об ничье.
    async drawnGame() {
      // noise({ name: 'cancel' });
      await this.$store.dispatch('game/is_over');
    },
  },

  computed: {
    ...mapState('field', ['cells']),
    ...mapState('game', ['is_over']),
    ...mapState('player', ['move', 'max_move', 'sign']),
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../vars';

.field {
  background-color: $light;
}

.cell {
  font-size: 50rem;
  color: $dark;
  font-weight: bold;
  background-color: $lighter;
}
</style>
