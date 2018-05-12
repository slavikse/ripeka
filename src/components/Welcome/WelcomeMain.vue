<template>
  <StackLayout class='WelcomeMain'>
    <!-- ONLINE -->
    <Label
      text='По сети'
      class='online'
    />

    <Button
      @tap='login'
      text='Вход'
      class='button'
    />

    <Button
      @tap='registration'
      text='Регистрация'
      class='button'
    />

    <!-- OFFLINE -->
    <Label
      text='Локально'
      class='offline'
    />

    <Button
      @tap='game'
      text='Против человека'
      class='button'
    />

    <!--
    <Button
      @tap='game'
      text='Против устройства'
      class='button'
    />
    -->

    <AdsBanner/>
  </StackLayout>
</template>

<script>
export default {
  name: 'WelcomeMain',

  methods: {
    login() {
      this.$router.push({ name: 'AuthLogin' });
    },

    registration() {
      this.$router.push({ name: 'AuthRegistration' });
    },

    game() {
      this.$router.push({ name: 'Game' });
    },
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../vars';

.WelcomeMain {
  padding: 10rem;
  background-color: $light;
}

.online,
.offline {
  padding-left: 15rem;
  font-size: 18rem;
  color: $lightest;
}

.offline {
  margin-top: 18rem;
}

.button {
  color: $dark;
  background-color: $lightest;
}
</style>
