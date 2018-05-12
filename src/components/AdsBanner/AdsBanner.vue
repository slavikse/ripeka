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
      isDevelopment: global.ENV_MODE === 'development',
      timerCreateID: null,
      testBannerID: 'ca-app-pub-3940256099942544/6300978111',
      realBannerID: 'ca-app-pub-5481584611736329/6434550290',
    };
  },

  mounted() {
    this.timerCreateID = setTimeout(this.create, 3000);
  },

  destroyed() {
    this.hide();
  },

  methods: {
    create() {
      try {
        admob.createBanner({
          view: 'banner',
          testing: this.isDevelopment,
          size: admob.AD_SIZE.SMART_BANNER,
          androidBannerId: this.isDevelopment ? this.testBannerID : this.realBannerID,
          margins: { bottom: 0 },
        });
      } catch (err) {
        // todo отправка ошибки в базу
        console.error('ERROR: AdsBanner/create', err);
      }
    },

    hide() {
      clearTimeout(this.timerCreateID);

      try {
        admob.hideBanner();
      } catch (err) {
        // todo отправка ошибки в базу
        console.error('ERROR: AdsBanner/hide', err);
      }
    },
  },
};
</script>

<style
  lang='scss'
  scoped
>
.AdsBanner {
}

.spinner {
}
</style>
