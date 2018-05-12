<template>
  <StackLayout class='AuthRegistrationMain'>
    <!-- Поле ловит на себе событие focus, так как первое в стеке,
      чтобы предотвратить преждевременное срабатывание hideBanner. -->
    <TextField class='hide'/>

    <TextField
      v-model.trim='nickname'
      @focus='hideBanner'
      hint='Уникальное имя'
      class='nickname'
    />

    <TextField
      v-model.trim='password'
      @focus='hideBanner'
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

    <AdsBanner v-if='isShowBanner'/>
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
      isShowBanner: true,
    };
  },

  methods: {
    hideBanner() {
      this.isShowBanner = false;
    },

    showBanner() {
      this.isShowBanner = true;
    },

    async registration() {
      if (!this.isCompleted()) { return; }

      try {
        this.isLoading = true;
        this.showBanner();

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
