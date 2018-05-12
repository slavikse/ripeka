<template>
  <ActionBar
    flat='true'
    class='AuthRegistrationHeader'
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
        text='Регистрация'
        class='title'
      />
    </GridLayout>
  </ActionBar>
</template>

<script>
export default {
  name: 'AuthRegistrationHeader',
};
</script>

<style
  lang='scss'
  scoped
>
@import '../../vars';

.AuthRegistrationHeader {
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
