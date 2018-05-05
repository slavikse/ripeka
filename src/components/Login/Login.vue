<template>
  <Page class='login'>
    <Label text='login'/>

    <TextField
      v-model='textFieldValue'
      hint='Enter text...'
    />
  </Page>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      textFieldValue: '123',
    };
  },

  async mounted() {
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
