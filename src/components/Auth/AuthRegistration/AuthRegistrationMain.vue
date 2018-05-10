<template>
  <StackLayout class='AuthRegistrationMain'>
    <TextField
      v-model.trim='nickname'
      hint='Ник в игре'
      class='nickname'
    />

    <TextField
      v-model.trim='password'
      @returnPress='registration'
      secure='true'
      hint='Пароль'
      class='password'
    />

    <StackLayout
      verticalAlignment='center'
      class='stack'
    >
      <Spinner
        v-if='isLoading'
        horizontalAlignment='center'
        class='spinner'
      />

      <StackLayout v-else>
        <Button
          @tap='registration'
          text='Регистрация'
          class='registration'
        />

        <Button
          @tap='login'
          text='Перейти ко входу...'
          class='login'
        />
      </StackLayout>
    </StackLayout>

    <AdsBanner/>
  </StackLayout>
</template>

<script>
import { AdsBanner } from '../../Ads';
import { Spinner } from '../../Helpers';

export default {
  name: 'AuthRegistrationMain',

  components: {
    AdsBanner,
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
    async registration() {
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

    login() {
      this.$router.push({ name: 'AuthLogin' });
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

.stack {
  margin-top: 10rem;
}

.spinner {
}

.login {
  color: $dark;
  background-color: $lightest;
}

.registration {
  color: $dark;
  background-color: $lightest;
}
</style>
