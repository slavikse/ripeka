<template>
  <Page class='Welcome'>
    <WelcomeHeader/>
    <WelcomeMain/>
  </Page>
</template>

<script>
import WelcomeHeader from './WelcomeHeader.vue';
import WelcomeMain from './WelcomeMain.vue';

export default {
  name: 'Welcome',

  components: {
    WelcomeHeader,
    WelcomeMain,
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../vars';

.Welcome {
}
</style>
