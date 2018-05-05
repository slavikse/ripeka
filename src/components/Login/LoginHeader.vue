<template>
  <ActionBar
    flat='true'
    class='logon-header'
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
        text='Вход'
        class='title'
      />
    </GridLayout>
  </ActionBar>
</template>

<script>
export default {
  name: 'LoginHeader',
};
</script>

<style
  lang='scss'
  scoped
>
@import '../vars';

.logon-header {
  background-color: $light;
}

.logo {
  width: 40rem;
  height: 40rem;
}

.title {
  text-align: center;
  font-size: 24rem;
  font-weight: bold;
  color: $lightest;
}
</style>
