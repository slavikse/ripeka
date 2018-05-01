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
import { mapState } from 'vuex';

export default {
  name: 'Field',

  methods: {
    async makeMove(index) {
      if (this.cells[index].length === 0) {
        await this.$store.dispatch('game/set_cell', index);
        await this.$store.dispatch('game/swap_sign');
      }
    },
  },

  computed: {
    ...mapState('game', ['cells']),
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../styles/vars.scss';

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
