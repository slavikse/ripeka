<template>
  <Page class='game'>
    <GameHeader/>
    <GameField/>
  </Page>
</template>

<script>
import GameHeader from './GameHeader.vue';
import GameField from './GameField.vue';

export default {
  name: 'Game',

  components: {
    GameHeader,
    GameField,
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../vars';

.game {
}
</style>
