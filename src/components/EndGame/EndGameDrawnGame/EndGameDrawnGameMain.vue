<template>
  <StackLayout class='EndGameDrawnGameMain'>
    <GridLayout
      columns='*, *, *'
      rows='*, *, *'
    >
      <Label
        col='1'
        row='1'
        @tap='reset'
        text='xo'
        class='title'
      />
    </GridLayout>

    <!--<AdsBanner v-if='isShowBanner'/>-->
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

.EndGameDrawnGameMain {
  background-color: $light;
}

.title {
  margin-top: -30rem;
  font-size: 100rem;
  color: $lighter;
  font-weight: bold;
  text-align: center;
}
</style>
