<template>
  <GridLayout
    columns="*"
    rows="*"
    class='AdsBanner'
  >
    <Spinner
      horizontalAlignment='center'
      verticalAlignment='bottom'
      class='spinner'
    />

    <Placeholder id='banner'/>
  </GridLayout>
</template>

<script>
import admob from 'nativescript-admob';

export default {
  name: 'AdsBanner',

  data() {
    return {
      timerID: null,
      isDevelopment: global.ENV_MODE === 'development',
      testBannerID: 'ca-app-pub-3940256099942544/6300978111',
      realBannerID: 'ca-app-pub-5481584611736329/6434550290',
    };
  },

  mounted() {
    // Без задержки вываливает ошибку.
    this.timerID = setTimeout(this.createBanner, 3000);
  },

  destroyed() {
    this.hideBanner();
  },

  methods: {
    createBanner() {
      try {
        // Вываливает неотлавливаемые ошибки.
        admob.createBanner({
          view: 'banner',
          testing: this.isDevelopment,
          size: admob.AD_SIZE.SMART_BANNER,
          androidBannerId: this.isDevelopment ? this.testBannerID : this.realBannerID,
          margins: { bottom: 0 },
        }).then(() => {
          console.log('DONE: AdsBanner/createBanner');
        }, (err) => {
          console.error('ERROR: AdsBanner/createBanner', err);
        });
      } catch (err) {
        console.error('', err);
      }
    },

    hideBanner() {
      clearTimeout(this.timerID);

      try {
        admob.hideBanner().then(() => {
          console.log('DONE: AdsBanner/hideBanner');
        }, (err) => {
          console.error('ERROR: AdsBanner/hideBanner', err);
        });
      } catch (err) {
        console.error('', err);
      }
    },
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../vars';

.AdsBanner {
}

.spinner {
}
</style>
