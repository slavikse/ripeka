<template>
  <Page class='EndGameVictoryBody'>
    <Label text='Победа'/>
  </Page>
</template>

<script>
export default {
  name: 'EndGameVictoryBody',

  mounted() {
    console.log('params', this.$route.params);
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../../vars';

.EndGameVictoryBody {
}
</style>
