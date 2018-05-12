<template>
  <GridLayout
    columns='*, *, *'
    rows='*, *, *'
    class='GameMain'
  >
    <Button
      v-for='(cell, index) in cells'
      :key='cell.id'
      :col='cell.col'
      :row='cell.row'
      :text='cell.sign'
      :class='cell.classes'
      @tap='makeMove(index)'
      class='cell'
    />
  </GridLayout>
</template>

<script>
import { mapState } from 'vuex';
// import { noise } from '../../utilities';
import { horizontalGroup, verticalGroup, obliquelyGroup } from './verifyGroups';

export default {
  name: 'GameMain',

  data() {
    return {
      // Исправление странной ошибки, будто бы cell в v-for=cell.. не является реактивной...
      cell: {},
    };
  },

  methods: {
    makeMove(index) {
      if (this.is_over) {
        // noise({ name: 'cancel' });
      } else {
        this.canMove(index);
      }
    },

    canMove(index) {
      const cell = this.cells[index];

      // Проверка строки на пустоту = пустая ячейка.
      if (cell.sign.length === 0) {
        this.taped(index);
        this.moving(index);
      } else {
        // noise({ name: 'cancel' });
      }
    },

    taped(index) {
      this.$store.dispatch('field/taped', index);
    },

    async moving(index) {
      // noise({ name: 'moving' });
      await this.$store.dispatch('field/occupy_cell', index);

      // При меньшем кол-ве ходов выиграть невозможно, поэтому выигрыш не проверяется.
      // Начиная с 5 (0-4] хода появляется возможность победить: 3 - X, 2 - Y.
      if (this.move > 3 && this.verify()) {
        this.victory();
        return;
      }

      // Поле заполнено. Ходить не куда.
      if (this.move === this.max_move) {
        this.drawnGame();
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

    async victory() {
      // noise({ name: 'winner' });

      this.$store.dispatch('game/determine_winner', this.sign);
      this.$store.dispatch('game/is_over');

      await this.$router.push({ name: 'EndGameVictory', params: { winner: this.sign } });
    },

    drawnGame() {
      // noise({ name: 'cancel' });

      this.$store.dispatch('game/is_over');
      this.$router.push({ name: 'EndGameDrawnGame' });
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

.GameMain {
  background-color: $light;
}

.cell {
  font-size: 50rem;
  color: $dark;
  font-weight: bold;
  background-color: $lighter;
}

/* @keyframes in utility.scss */
.taped {
  animation: showing 0.04s ease-in;
}
</style>
