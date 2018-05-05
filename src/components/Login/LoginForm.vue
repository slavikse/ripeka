<template>
  <GridLayout
    columns=''
    rows='auto, auto, 60, 60'
    class='login-form'
  >
    <TextField
      col='0'
      row='0'
      hint='Номер телефона'
      keyboardType='phone'
      v-model.trim='phone'
      class='phone'
    />

    <TextField
      col='0'
      row='1'
      hint='Пароль'
      secure='true'
      v-model.trim='password'
      class='password'
    />

    <Spinner
      col='0'
      row='2'
      class='spinner'
    />

    <Button
      col='0'
      row='3'
      @tap='submit'
      text='Войти'
      :disabled='true'
      class='submit'
    />
  </GridLayout>
</template>

<script>
import { Spinner } from '../Helpers';

export default {
  name: 'LoginForm',

  components: {
    Spinner,
  },

  data() {
    return {
      phone: '',
      password: '',
    };
  },

  methods: {
    async submit() {
      setTimeout(() => {
        try {
          this.$store.dispatch('user/login', {
            phone: this.phone,
            password: this.password,
          });
        } catch (err) {
          console.error('LoginForm submit', err);
        }
      }, 1000);
    },
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../vars';

.login-form {
  margin-top: 20rem;
  width: 90%;
}

.phone {
}

.password {
}

.spinner {
  margin: 0 auto;
}

.submit {
  color: $white;
  background-color: $lighter;
}
</style>
