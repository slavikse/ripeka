<template>
  <Page class='AuthRegistration'>
    <AuthRegistrationHeader/>
    <AuthRegistrationForm/>
  </Page>
</template>

<script>
import AuthRegistrationHeader from './AuthRegistrationHeader.vue';
import AuthRegistrationForm from './AuthRegistrationMain.vue';

export default {
  name: 'AuthRegistration',

  components: {
    AuthRegistrationHeader,
    AuthRegistrationForm,
  },
};
</script>

<style
  lang='scss'
  scoped
>
.AuthRegistration {
}
</style>
