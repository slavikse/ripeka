<template>
  <WrapLayout class='field'>
    <Button
      v-for='(cell, index) in cells'
      :key='index'
      :text='cell'
      @tap='makeMove(index)'
      class='cell'
    />
  </WrapLayout>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { firstGroup, secondGroup, thirdGroup } from './winningGroups';

export default {
  name: 'Field',

  data() {
    return {
      // Исправление странной ошибки, будто бы cell в v-for='cell.. не является реактивной...
      cell: '',
      // Максимальное кол-во ходов для поля 3*3 (0-8).
      maxMove: 9,
    };
  },

  methods: {
    async makeMove(index) {
      // Проверка строки на пустоту = пустая ячейка.
      if (this.cells[index].length === 0) {
        await this.$store.dispatch('game/set_cell', index);
        await this.$store.dispatch('game/increment_move');

        // Для меньшего количества сделанных ходов проверка выигрыша - избыточна.
        // Начиная с 5 (0-4) хода появляется возможность победить: 3 - X, 2 - Y.
        if (this.move > 4 && this.verifyWinning()) {
          console.log('Победа!!!', this.current_sign);
        }

        if (this.move === this.maxMove) {
          console.log('Ходы закончились');
        }

        await this.$store.dispatch('game/swap_sign');
      }
    },

    // Проверка победы текущего игрока после его хода на основе
    // сгруппированных данных о всех возможных вариантов ходов.
    // Если одна из групп выдаст выигрышь, то вернет true - Победа!
    verifyWinning() {
      const cells = this.cells;
      const currentSign = this.current_sign;

      return firstGroup({ cells, currentSign })
        || secondGroup({ cells, currentSign, start: 0, step: 2 })
        || thirdGroup({ cells, currentSign });
    },
  },

  computed: {
    ...mapState('game', ['cells', 'move', 'sign']),
    ...mapGetters('game', ['current_sign']),
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

  .cell {
    height: 33.33333%;
    width: 33.33333%;
    font-size: 50rem;
    color: $dark;
    font-weight: bold;
    background-color: $lighter;
  }
}
</style>
