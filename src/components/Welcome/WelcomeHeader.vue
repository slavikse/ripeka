<template>
  <ActionBar
    flat='true'
    class='WelcomeHeader'
  >
    <GridLayout
      columns='40, *'
      rows='40'
    >
      <Image
        col='0'
        row='0'
        src='res://logo'
      />

      <Label
        col='1'
        row='0'
        verticalAlignment='center'
        text='Режимы'
        class='title'
      />
    </GridLayout>
  </ActionBar>
</template>

<script>
export default {
  name: 'WelcomeHeader',
};
</script>

<style
  lang='scss'
  scoped
>
@import '../vars';

.WelcomeHeader {
  background-color: $light;
}

.title {
  padding-left: -50%;
  text-align: center;
  font-weight: bold;
  font-size: 22rem;
  color: $lightest;
}
</style>
