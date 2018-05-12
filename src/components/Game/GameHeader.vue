<template>
  <ActionBar
    flat='true'
    class='GameHeader'
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
        'У меня самый искренний смех… злорадный!',
        'Где тебя всегда ждут? На рабочем месте.',
        'Оптимизм — это нехватка информации.',
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

    reset() {
      this.$store.dispatch('game/reset');
      this.$router.push({ name: 'Game' });
    },

    logout() {
      this.$store.dispatch('game/reset');
      this.$store.dispatch('user/logout');
    },
  },

  computed: {
    ...mapState('game', ['winner', 'is_over']),
    ...mapState('player', ['move', 'sign']),

    title() {
      // Действия: moving | victory | drawnGame.
      let status = '';
      let sign = '';

      if (this.is_over) {
        if (this.winner.length === 0) {
          status = 'drawnGame';
        } else {
          status = 'victory';
          sign = this.winner;
        }
      } else {
        status = 'moving';
        sign = this.sign;
      }

      const player = sign === 'x' ? 'Крестик' : 'Нолик';
      let message = '';

      switch (status) {
        case 'moving':
          message = `Ходит: ${player}`;
          break;

        case 'victory':
          message = `${player} победил!`;
          break;

        case 'drawnGame':
          message = 'Ничья!';
          break;

        default:
          // todo сообщение на сервер
          console.log('Что то пошло не так!');
      }

      return message;
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

.GameHeader {
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
