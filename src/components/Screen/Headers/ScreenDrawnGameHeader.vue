<template>
  <ActionBar
    flat='true'
    class='screen-drawn-game-header'
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
        text='Ничья!'
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
  name: 'ScreenDrawnGameHeader',

  methods: {
    async reset() {
      await this.$store.dispatch('game/reset');
    },

    // todo
    logout() {
      console.log('logout');
    },
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../../vars';

.screen-drawn-game-header {
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
