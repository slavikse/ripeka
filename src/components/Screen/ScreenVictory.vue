<template>
  <Page class='screen-victory'>
    <ScreenVictoryHeader/>

    <Label text='Победа'/>
  </Page>
</template>

<script>
import { ScreenVictoryHeader } from './Headers';

export default {
  name: 'ScreenVictory',

  components: {
    ScreenVictoryHeader,
  },

  mounted() {
    console.log('params', this.$route.params);
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../vars';

.screen-victory {

}
</style>
