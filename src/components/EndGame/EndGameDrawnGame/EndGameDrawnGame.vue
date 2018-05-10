<template>
  <Page class='EndGameDrawnGame'>
    <EndGameDrawnGameHeader/>
    <EndGameDrawnGameMain/>
  </Page>
</template>

<script>
import EndGameDrawnGameHeader from './EndGameDrawnGameHeader.vue';
import EndGameDrawnGameMain from './EndGameDrawnGameMain.vue';

export default {
  name: 'EndGameDrawnGame',

  components: {
    EndGameDrawnGameHeader,
    EndGameDrawnGameMain,
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../../vars';

.EndGameDrawnGame {
}
</style>
