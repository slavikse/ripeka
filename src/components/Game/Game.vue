<template>
  <Page class='Game'>
    <GameHeader/>
    <GameMain/>
  </Page>
</template>

<script>
import GameHeader from './GameHeader.vue';
import GameMain from './GameMain.vue';

export default {
  name: 'Game',

  components: {
    GameHeader,
    GameMain,
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../vars';

.Game {
}
</style>
