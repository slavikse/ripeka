<template>
  <ActionBar
    flat='true'
    class='EndGameDrawnGameHeader'
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
  name: 'EndGameDrawnGameHeader',

  methods: {
    reset() {
      this.$store.dispatch('game/reset');
      this.$router.push({ name: 'Game' });
    },

    logout() {
      this.$store.dispatch('game/reset');
      this.$store.dispatch('user/logout');
    },
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../../vars';

.EndGameDrawnGameHeader {
  background-color: $light;
}

.logo {
  width: 40rem;
  height: 40rem;
}

.title {
  text-align: center;
  font-weight: bold;
  font-size: 22rem;
  color: $lightest;
}
</style>
