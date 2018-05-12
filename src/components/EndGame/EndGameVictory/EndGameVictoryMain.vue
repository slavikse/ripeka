<template>
  <StackLayout class='EndGameVictoryMain'>
    <Label text='Победа'/>

    <AdsBanner/>
  </StackLayout>
</template>

<script>
export default {
  name: 'EndGameVictoryMain',

  mounted() {
    console.log('winner', this.$route.params.winner);
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../../vars';

.EndGameVictoryMain {
}
</style>
