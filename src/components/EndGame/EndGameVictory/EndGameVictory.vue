<template>
  <Page class='EndGameVictory'>
    <EndGameVictoryHeader/>
    <EndGameVictoryMain/>
  </Page>
</template>

<script>
import EndGameVictoryHeader from './EndGameVictoryHeader.vue';
import EndGameVictoryMain from './EndGameVictoryMain.vue';

export default {
  name: 'EndGameVictory',

  components: {
    EndGameVictoryHeader,
    EndGameVictoryMain,
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../../vars';

.EndGameVictory {
}
</style>
