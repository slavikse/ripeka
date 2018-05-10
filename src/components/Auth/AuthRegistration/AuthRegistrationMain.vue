<template>
  <StackLayout class='AuthRegistrationMain'>
    <TextField
      v-model.trim='nickname'
      hint='Ник в игре'
      class='nickname'
    />

    <TextField
      v-model.trim='password'
      @returnPress='submit'
      secure='true'
      hint='Пароль'
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
        text='Регистрация'
        class='submit'
      />
    </StackLayout>

    <!-- todo рекламный блок -->
  </StackLayout>
</template>

<script>
import { Spinner } from '../../Helpers';

export default {
  name: 'AuthRegistrationMain',

  components: {
    Spinner,
  },

  data() {
    return {
      nickname: '',
      password: '',
      isLoading: false,
    };
  },

  methods: {
    async submit() {
      if (!this.isCompleted()) { return; }

      try {
        this.isLoading = true;

        await this.$store.dispatch('user/registration', {
          nickname: this.nickname,
          password: this.password,
        });

        this.$router.push({ name: 'Game' });
      } catch (err) {
        // todo отправка ошибки в базу
        console.error('AuthRegistrationForm submit', err);
      } finally {
        // todo popup для сообщении о неполадке.
        this.isLoading = false;
      }
    },

    isCompleted() {
      return this.nickname.length > 0 && this.password.length > 0;
    },
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../../vars';

.AuthRegistrationMain {
  padding: 10rem;
  background-color: $light;
}

.nickname,
.password {
  border-radius: 2rem;
  padding-left: 15rem;
  color: $dark;
  background-color: $lightest;
}

.nickname {
}

.password {
  margin-top: 1rem;
}

.submit-group {
  margin-top: 10rem;
  height: 50rem;
}

.spinner {
}

.submit {
  color: $dark;
  background-color: $lightest;
}
</style>
