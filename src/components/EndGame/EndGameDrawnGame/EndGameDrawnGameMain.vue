<template>
  <StackLayout class='EndGameDrawnGameMain'>
    <Label text='Ничья'/>

    <AdsBanner v-if='isShowBanner'/>
  </StackLayout>
</template>

<script>
export default {
  name: 'EndGameDrawnGameMain',

  data() {
    return {
      isShowBanner: true,
    };
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

.EndGameDrawnGameMain {
}
</style>
