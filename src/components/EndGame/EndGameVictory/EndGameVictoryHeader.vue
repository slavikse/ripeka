<template>
  <ActionBar
    flat='true'
    class='EndGameVictoryHeader'
  >
    <GridLayout
      columns='40, *'
      rows='40'
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
        verticalAlignment='center'
        :text='title'
        class='title'
      />
    </GridLayout>

    <!-- POPUP ITEMS -->
    <ActionItem
      android.position='popup'
      @tap='reset'
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
export default {
  name: 'EndGameVictoryHeader',

  methods: {
    async reset() {
      await this.$store.dispatch('game/reset');
    },

    async logout() {
      await this.$store.dispatch('user/logout');
    },
  },

  computed: {
    title() {
      const sign = this.$route.params.winner;
      const player = sign === 'x' ? 'Крестик' : 'Нолик';
      return `${player} победил!`;
    },
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../../vars';

.EndGameVictoryHeader {
  background-color: $light;
}

.logo {
  width: 40rem;
  height: 40rem;
}

.title {
  text-align: center;
  font-weight: bold;
  font-size: 20rem;
  color: $lightest;
}
</style>
