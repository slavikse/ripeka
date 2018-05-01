<template>
  <Page class='page'>
    <Header/>

    <WrapLayout class='field'>
      <Button
        v-for='(cell, index) in cells'
        :key='index'
        :text='cell'
        @tap='makeMove(index)'
        class='cell'
      />
    </WrapLayout>
  </Page>
</template>

<script>
import { mapState } from 'vuex';
import Header from './Header.vue';

export default {
  name: 'App',

  components: {
    Header,
  },

  // async mounted() {
  //   try {
  //     const posts = await this.axios.get('https://jsonplaceholder.typicode.com/posts/1');
  //     console.log('posts', posts);
  //   } catch (err) {
  //     console.error('get posts', err);
  //   }
  // },

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
@import "../styles/vars.scss";

.page {
}

.field {
  background-color: $light;

  .cell {
    height: 33.33333%;
    width: 33.33333%;
    font-size: 40rem;
    color: $dark;
    font-weight: bold;
    background-color: $lighter;
  }
}
</style>
