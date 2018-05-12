<template>
  <StackLayout class='AuthRegistrationMain'>
    <TextField
      v-model.trim='nickname'
      hint='Уникальное имя'
      class='nickname'
    />

    <TextField
      v-model.trim='password'
      @returnPress='registration'
      secure='true'
      hint='Надежный пароль'
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
          text='Создать учетную запись'
          class='registration'
        />

        <Button
          @tap='login'
          text='Перейти к входу...'
          class='login'
        />
      </StackLayout>
    </StackLayout>

    <AdsBanner/>
  </StackLayout>
</template>

<script>
export default {
  name: 'AuthRegistrationMain',

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
        // todo обработка ситуации, когда ник занят.
        // todo отправка ошибки в базу
        console.error('ERROR: AuthRegistrationMain/registration', err);
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
  margin-top: 20rem;
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
