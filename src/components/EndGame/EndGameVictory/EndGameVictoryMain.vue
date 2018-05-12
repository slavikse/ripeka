<template>
  <StackLayout class='EndGameVictoryMain'>
    <Label text='Победа'/>

    <AdsBanner v-if='isShowBanner'/>
  </StackLayout>
</template>

<script>
export default {
  name: 'EndGameVictoryMain',

  data() {
    return {
      isShowBanner: true,
    };
  },

  mounted() {
    console.log('winner', this.$route.params.winner);
  },

  destroyed() {
    this.hideBanner();
  },

  methods: {
    hideBanner() {
      this.isShowBanner = false;
    },
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../../vars';

.EndGameVictoryMain {
  background-color: $light;
}
</style>
