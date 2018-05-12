<template>
  <StackLayout class='WelcomeMain'>
    <!-- ONLINE -->
    <Label
      v-if='is_logged'
      :text='greeting'
      class='greeting'
    />
    <Label
      v-else
      text='По сети'
      class='online'
    />

    <StackLayout v-if='is_logged'>
      <Button
        @tap='find'
        text='Поиск соперника'
        class='button'
      />
    </StackLayout>
    <StackLayout v-else>
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
    </StackLayout>

    <!-- OFFLINE -->
    <Label
      text='Локально'
      class='offline'
    />

    <Button
      @tap='vsMan'
      text='Против человека'
      class='button'
    />

    <Button
      @tap='vsPhone'
      text='Против телефона (в процессе)'
      class='button'
    />

    <!-- DONATE -->
    <Label
      text='Поддержать'
      class='donate'
    />

    <Button
      @tap='donate'
      text='Денежный перевод'
      class='button'
    />

    <Button
      @tap='showAds'
      text='Показать рекламу'
      class='button'
    />

    <AdsBanner v-if='isShowBanner'/>
    <AdsInterstitial v-if='isShowInterstitial'/>
  </StackLayout>
</template>

<script>
import { mapState } from 'vuex';
import { openUrl } from 'tns-core-modules/utils/utils';

// todo дальнейшие действия для игры по сети залогиненного пользователя
export default {
  name: 'WelcomeMain',

  data() {
    return {
      isShowBanner: true,
      isShowInterstitial: false,
      cutaway: 'https://money.yandex.ru/to/410011000753520/100',
    };
  },

  destroyed() {
    this.hideBanner();
  },

  methods: {
    hideBanner() {
      this.isShowBanner = false;
    },

    find() {
      console.log('Поищу...');
    },

    login() {
      this.$router.push({ name: 'AuthLogin' });
    },

    registration() {
      this.$router.push({ name: 'AuthRegistration' });
    },

    vsMan() {
      this.$router.push({ name: 'Game' });
    },

    vsPhone() {
      console.log('Поиграешь...');
      // this.$router.push({ name: 'Game' });
    },

    donate() {
      openUrl(this.cutaway);
    },

    showAds() {
      this.isShowInterstitial = true;
    },
  },

  computed: {
    ...mapState('user', ['is_logged', 'user']),

    greeting() {
      const name = Object.keys(this.user).length > 0 ? this.user.nickname : 'незнакомец';
      return `В сети! Привет ${name}!`;
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
.greeting,
.offline,
.donate {
  font-size: 18rem;
  color: $lightest;
}

.greeting {
  font-weight: bold;
}

.offline,
.donate {
  margin-top: 18rem;
}

.button {
  color: $dark;
  background-color: $lightest;
}
</style>
