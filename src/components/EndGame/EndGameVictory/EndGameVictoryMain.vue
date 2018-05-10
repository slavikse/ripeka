<template>
  <Page class='EndGameVictoryBody'>
    <Label text='Победа'/>

    <AdsBanner/>
  </Page>
</template>

<script>
import { AdsBanner } from '../../Ads';

export default {
  name: 'EndGameVictoryBody',

  components: {
    AdsBanner,
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
@import '../../vars';

.EndGameVictoryBody {
}
</style>
