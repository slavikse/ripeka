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
import { Spinner } from '../Helpers';

export default {
  name: 'AdsBanner',

  components: {
    Spinner,
  },

  data() {
    return {
      isDevelopment: global.ENV_MODE === 'development',
      testBanner: 'ca-app-pub-3940256099942544/6300978111',
      realBanner: 'ca-app-pub-5481584611736329/6434550290',
      useBanner: '',
    };
  },

  async mounted() {
    this.useBanner = this.isDevelopment ? this.testBanner : this.realBanner;
    await setTimeout(this.createBanner, 3000);
  },

  async destroyed() {
    try {
      await admob.hideBanner();
      console.log('admob hideBanner done');
    } catch (err) {
      console.error('admob hideBanner error', err);
    }
  },

  methods: {
    async createBanner() {
      try {
        await admob.createBanner({
          view: 'banner',
          testing: this.isDevelopment,
          size: admob.AD_SIZE.SMART_BANNER,
          androidBannerId: this.useBanner,
          margins: { bottom: 0 },
        });

        console.log('admob createBanner done');
      } catch (err) {
        console.error('admob createBanner error:' + err);
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
