<template>
  <GridLayout
    columns='*, *, *'
    rows='*, *, *'
    class='field'
  >
    <Button
      v-for='(cell, index) in cells'
      :key='cell.key'
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
import { noise } from '../../utilities';
import { firstGroup, secondGroup, thirdGroup } from './winningGroups';

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
      if (this.is_game_over) {
        noise({ audio: 'cancel' });
      } else {
        await this.canMove(index);
      }
    },

    async canMove(index) {
      // Проверка строки на пустоту = пустая ячейка.
      if (this.cells[index].sign.length === 0) {
        await this.moving(index);
      } else {
        noise({ audio: 'cancel' });
      }
    },

    async moving(index) {
      noise({ audio: 'moving' });
      await this.$store.dispatch('game/set_cell', index);

      // При меньшем кол-ве ходов выиграть невозможно, поэтому выигрыш не проверяется.
      // Начиная с 5 (0-4) хода появляется возможность победить: 3 - X, 2 - Y.
      if (this.move >= 4 && this.verify()) {
        await this.victory();
        return;
      }

      // Поле заполнено. Ходить не куда.
      if (this.move === this.max_move) {
        await this.drawGame();
        return;
      }

      await this.$store.dispatch('game/swap_current_sing');
      await this.$store.dispatch('game/increment_move');
    },

    // Проверка победы текущего игрока после его хода на основе
    // сгруппированных данных о всех возможных вариантов ходов.
    // Если одна из групп выдаст выигрыш, то вернет true - Победа!
    verify() {
      const cells = this.cells;
      const currentSign = this.current_sign;

      return firstGroup({ cells, currentSign })
        || secondGroup({ cells, currentSign, start: 0, step: 2 })
        || thirdGroup({ cells, currentSign });
    },

    // todo победный экран с оповещением кто победил.
    async victory() {
      noise({ audio: 'winner' });

      console.log('Победил!', this.current_sign);
      await this.$store.dispatch('game/game_over');
    },

    // todo экран с оповещением об ничье.
    async drawGame() {
      noise({ audio: 'cancel' });

      console.log('Игра окончена');
      await this.$store.dispatch('game/game_over');
    },
  },

  computed: {
    ...mapState('game', ['cells', 'current_sign', 'move', 'max_move', 'is_game_over']),
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
