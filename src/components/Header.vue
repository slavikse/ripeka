<template>
  <ActionBar class='header'>
    <StackLayout orientation='horizontal'>
      <Image
        class='logo'
        src='res://logo'
      />

      <Label
        verticalAlignment='center'
        text='RIPEKA'
        class='title'
      />
    </StackLayout>

    <ActionItem
      android.position='popup'
      @tap='resetGame'
    >
      <Button
        text='Заново'
        class='reset'
      />
    </ActionItem>
  </ActionBar>
</template>

<script>
export default {
  name: 'Header',

  methods: {
    async resetGame() {
      await this.$store.dispatch('game/reset_game');
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
  height: 40rem;
  width: 40rem;
}

.title {
  margin-left: 8rem;
  font-size: 24rem;
  color: $lightest;
  font-weight: bold;
}

.reset {
  font-size: 14rem;
  color: $lightest;
  background-color: $lighter;
}
</style>
