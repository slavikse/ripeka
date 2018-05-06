<template>
  <StackLayout class='login-form'>
    <TextField
      hint='Номер телефона'
      keyboardType='phone'
      v-model.trim='phone'
      class='phone'
    />

    <TextField
      hint='Пароль'
      secure='true'
      v-model.trim='password'
      @returnPress='submit'
      class='password'
    />

    <StackLayout
      verticalAlignment='center'
      class='submit-group'
    >
      <Spinner
        v-if='isLoading'
        horizontalAlignment='center'
        class='spinner'
      />

      <Button
        v-else
        @tap='submit'
        text='Войти'
        class='submit'
      />
    </StackLayout>
  </StackLayout>
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
      isLoading: false,
    };
  },

  methods: {
    async submit() {
      if (!this.isCompleted()) {
        return;
      }

      try {
        this.isLoading = true;

        await this.$store.dispatch('user/login', {
          phone: this.phone,
          password: this.password,
        });

        this.$router.push({ name: 'Game' });
      } catch (err) {
        console.error('LoginForm submit', err);
        this.isLoading = false;
      }
    },

    isCompleted() {
      return this.phone.length > 0 && this.password.length > 0;
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
  padding: 80% 10rem 10rem;
  background-color: $light;
}

.phone,
.password {
  border-radius: 2rem;
  padding-left: 15rem;
  color: $dark;
  background-color: $lightest;
}

.phone {
}

.password {
  margin-top: 5rem;
}

.submit-group {
  margin-top: 15rem;
  height: 50rem;
}

.spinner {
}

.submit {
  color: $dark;
  background-color: $lightest;
}
</style>
