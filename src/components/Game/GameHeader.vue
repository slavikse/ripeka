<template>
  <ActionBar
    flat='true'
    class='header'
  >
    <GridLayout
      columns='40, *'
      rows='20, 20'
    >
      <Image
        col='0'
        row='0'
        rowSpan='2'
        src='res://logo'
        class='logo'
      />

      <Label
        col='1'
        row='0'
        :text='title'
        class='title'
      />

      <Label
        col='1'
        row='1'
        :text='message'
        class='message'
      />
    </GridLayout>

    <!-- POPUP ITEMS -->
    <ActionItem
      android.position='popup'
      @tap='reset'
      text='Заново'
    />

    <ActionItem
      android.position='popup'
      @tap='logout'
      text='Выход'
    />
  </ActionBar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'GameHeader',

  data() {
    return {
      // При добавлении новой шутки, нужно придерживаться общей ширины контента.
      jokes: [
        'Чтобы не сидеть без денег - я прилег.',
        'Лучше сгореть, чем угаснуть!',
        'Взросление - это что-то про квартплату.',
        'Бесит, когда тебя будят в 15 часов утра!',
        'Каждый заслуживает еще один пятый шанс.',
        'Любишь свободу?! Свободен!!',
        'Наносите пользу и причиняйте добро!',
        'Пока 7 раз отмеришь, другие уже отрежут!',
        'Еще 50 грамм инвестиций и я недвижимость.',
        'Мечты сбываются – стоит только расхотеть.',
        'Хочешь быть счастливым - хоти!',
        'Не отвлекайтесь - это отвлекает!',
        'В России нет законов физики, есть удача!',
        'Побрился, когда резался...',
        'Вам помочь или не мешать?',
        'Гопники HD - пацаны повышенной чёткости.',
        'Мышку изобрел человек с 2 пальцами.',
        'Лучший шкаф для одежды - стул.',
        'Большому кораблю - большую кораблиху.',
        'Немой петух по утрам вибрирует.',
        'С водкой все идет хорошо...кроме ног...',
      ],
      message: '',
      runJokesID: null,
      jokesTime: 15000,
    };
  },

  mounted() {
    this.runJokes();
  },

  destroyed() {
    this.stopJokes();
  },

  methods: {
    runJokes() {
      this.joke();
      this.runJokesID = setInterval(this.joke, this.jokesTime);
    },

    stopJokes() {
      clearInterval(this.runJokesID);
    },

    joke() {
      const random = Math.floor(Math.random() * this.jokes.length);
      this.message = this.jokes[random];
    },

    async reset() {
      await this.$store.dispatch('game/reset');
    },

    // todo
    logout() {
      console.log('logout');
    },
  },

  computed: {
    ...mapState('game', ['winner', 'is_over']),
    ...mapState('player', ['move', 'sign']),

    title() {
      // if (this.is_over) {
      //   if (this.winner.length === 0) {
      //     return 'Ничья.';
      //   }
      //
      //   return `${this.winner} победил!`;
      // }
      //
      // const player = this.sign === 'x' ? 'Крестик' : 'Нолик';
      // return `Ходит: ${player}`;

      // todo ничья ибо тогда крестик побеждает
      const player = this.sign === 'x' ? 'Крестик' : 'Нолик';
      return this.is_over ? `${player} победил!` : `Ходит: ${player}`;
    },
  },

  watch: {
    is_over() {
      if (this.is_over) {
        this.message = 'Игра окончена!';
        this.stopJokes();
      } else {
        this.runJokes();
      }
    },
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../vars';

.header {
  background-color: $light;
}

.logo {
  width: 40rem;
  height: 40rem;
}

.title {
  text-align: center;
  font-size: 16rem;
  font-weight: bold;
  color: $lightest;
}

.message {
  text-align: center;
  font-size: 12rem;
  color: $lighter;
}
</style>
