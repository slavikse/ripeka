<template>
  <Page class='login'>
    <LoginHeader/>
    <LoginForm/>
  </Page>
</template>

<script>
import LoginHeader from './LoginHeader.vue';
import LoginForm from './LoginForm.vue';

export default {
  name: 'Login',

  components: {
    LoginHeader,
    LoginForm,
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../vars';

.login {
}
</style>
