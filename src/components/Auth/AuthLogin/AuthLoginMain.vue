<template>
  <StackLayout class='AuthLoginMain'>
    <!-- Поле ловит на себе событие focus, так как первое в стеке,
      чтобы предотвратить преждевременное срабатывание hideBanner. -->
    <TextField class='hide'/>

    <TextField
      v-model.trim='nickname'
      @focus='hideBanner'
      hint='Имя'
      class='nickname'
    />

    <TextField
      v-model.trim='password'
      @focus='hideBanner'
      @returnPress='login'
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
          @tap='login'
          text='Войти'
          class='login'
        />

        <Button
          @tap='registration'
          text='Перейти к регистрации...'
          class='registration'
        />
      </StackLayout>
    </StackLayout>

    <!--<AdsBanner v-if='isShowBanner'/>-->
  </StackLayout>
</template>

<script>
export default {
  name: 'AuthLoginMain',

  data() {
    return {
      nickname: '',
      password: '',
      isLoading: false,
      isShowBanner: true,
    };
  },

  destroyed() {
    this.hideBanner();
  },

  methods: {
    hideBanner() {
      this.isShowBanner = false;
    },

    showBanner() {
      this.isShowBanner = true;
    },

    async login() {
      if (!this.isCompleted()) { return; }

      try {
        this.isLoading = true;
        this.showBanner();

        await this.$store.dispatch('user/login', {
          nickname: this.nickname,
          password: this.password,
        });

        this.$router.push({ name: 'Game' });
      } catch (err) {
        // todo отправка ошибки в базу
        console.error('ERROR: AuthLoginMain/login', err);
      } finally {
        // todo popup для сообщении о неполадке.
        this.isLoading = false;
      }
    },

    isCompleted() {
      return this.nickname.length > 0
        && this.password.length > 0;
    },

    registration() {
      this.$router.push({ name: 'AuthRegistration' });
    },
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../../vars';

.AuthLoginMain {
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

.login,
.registration {
  color: $dark;
  background-color: $lightest;
}
</style>
