<template>
  <StackLayout class='EndGameVictoryMain'>
    <GridLayout
      columns='*, *, *'
      rows='*, *, *'
    >
      <Label
        col='1'
        row='1'
        @tap='reset'
        :text='$route.params.winner'
        class='title'
      />
    </GridLayout>

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

  destroyed() {
    this.hideBanner();
  },

  methods: {
    hideBanner() {
      this.isShowBanner = false;
    },

    reset() {
      this.$store.dispatch('game/reset');
      this.$router.push({ name: 'Game' });
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

.title {
  margin-top: -75rem;
  font-size: 150rem;
  color: $lighter;
  font-weight: bold;
  text-align: center;
}
</style>
