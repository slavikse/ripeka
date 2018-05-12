<template>
  <GridLayout
    columns="*"
    rows="*"
    class='AdsInterstitial'
  />
</template>

<script>
import admob from 'nativescript-admob';

export default {
  name: 'AdsInterstitial',

  data() {
    return {
      timerID: null,
      isDevelopment: global.ENV_MODE === 'development',
      testInterstitialID: 'ca-app-pub-3940256099942544/1033173712',
      realInterstitialID: 'ca-app-pub-5481584611736329/4051590229',
    };
  },

  mounted() {
    // Без задержки вываливает ошибку.
    this.timerID = setTimeout(this.createInterstitial, 0);
  },

  destroyed() {
    this.hideInterstitial();
  },

  methods: {
    createInterstitial() {
      // Вываливает неотлавливаемые ошибки.
      admob.createInterstitial({
        testing: this.isDevelopment,
        androidInterstitialId: this.isDevelopment
          ? this.testInterstitialID
          : this.realInterstitialID,
      }).then(() => {
        console.log('DONE: AdsInterstitial/createInterstitial');
      }, (err) => {
        console.error('ERROR: AdsInterstitial/createInterstitial', err);
      });
    },

    hideInterstitial() {
      clearTimeout(this.timerID);

      admob.hideBanner().then(() => {
        console.log('DONE: AdsInterstitial/hideInterstitial');
      }, (err) => {
        console.error('ERROR: AdsInterstitial/hideInterstitial', err);
      });
    },
  },
};
</script>

<style
  lang='scss'
  scoped
>
.AdsInterstitial {
}

.spinner {
}
</style>
