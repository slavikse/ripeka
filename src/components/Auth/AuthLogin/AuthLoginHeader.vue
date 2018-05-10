<template>
  <ActionBar
    flat='true'
    class='AuthLoginHeader'
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
        text='Вход'
        class='title'
      />
    </GridLayout>
  </ActionBar>
</template>

<script>
export default {
  name: 'AuthLoginHeader',
};
</script>

<style
  lang='scss'
  scoped
>
@import '../../vars';

.AuthLoginHeader {
  background-color: $light;
}

.title {
  padding-left: -50%;
  text-align: center;
  font-size: 22rem;
  color: $lightest;
}
</style>
