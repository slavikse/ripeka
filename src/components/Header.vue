<template>
  <ActionBar
    flat='true'
    class='header'
  >
    <!-- logo, letter, title, turn -->
    <GridLayout
      columns='36, auto, 2*, 3*'
      rows='36'
    >
      <Image
        col='0'
        row='0'
        src='res://logo'
        class='logo'
      />

      <Label
        col='1'
        row='0'
        text='R'
        class='letter'
      />

      <Label
        col='2'
        row='0'
        text='ipeka'
        class='title'
      />

      <Label
        col='3'
        row='0'
        verticalAlignment='center'
        :text='turn'
        class='turn'
      />
    </GridLayout>

    <!-- POPUP ITEMS -->
    <ActionItem
      android.position='popup'
      @tap='resetGame'
      text='Заново'
    />

    <ActionItem
      android.position='popup'
      @tap='logout'
      text='Выход'
    />
  </ActionBar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',

  methods: {
    async resetGame() {
      await this.$store.dispatch('game/reset_game');
    },

    logout() {
      console.log('logout');
    },
  },

  computed: {
    ...mapState('game', ['sign']),

    turn() {
      return `Ходит: ${this.sign ? 'крестик' : 'нолик'}`;
    },
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../styles/vars.scss';

.header {
  background-color: $light;
}

.logo {
  height: 36rem;
  width: 36rem;
}

.letter {
  margin-left: 4rem;
  font-size: 24rem;
  font-weight: bold;
  color: $lightest;
}

.title {
  font-size: 24rem;
  color: $lightest;
}

.turn {
  font-size: 15rem;
  color: $lightest;
}
</style>
