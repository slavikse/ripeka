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

    <!-- POPUP ITEMS -->
    <ActionItem
      android.position='popup'
      @tap='backward'
      text='Вернуться'
    />
  </ActionBar>
</template>

<script>
export default {
  name: 'AuthLoginHeader',

  methods: {
    backward() {
      this.$router.back();
    },
  },
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
  text-align: center;
  font-weight: bold;
  font-size: 22rem;
  color: $lightest;
}
</style>
