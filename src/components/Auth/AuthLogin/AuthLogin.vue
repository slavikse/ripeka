<template>
  <Page class='AuthLogin'>
    <AuthLoginHeader/>
    <AuthLoginMain/>
  </Page>
</template>

<script>
import AuthLoginHeader from './AuthLoginHeader.vue';
import AuthLoginMain from './AuthLoginMain.vue';

export default {
  name: 'AuthLogin',

  components: {
    AuthLoginHeader,
    AuthLoginMain,
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../../vars';

.AuthLogin {
}
</style>
