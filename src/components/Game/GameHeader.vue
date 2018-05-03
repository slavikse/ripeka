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
        :text='message'
        class='message'
      />

      <Label
        col='1'
        row='1'
        :text='additionally'
        class='additionally'
      />
    </GridLayout>

    <!-- POPUP ITEMS -->
    <ActionItem
      android.position='popup'
      @tap='resetGame'
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
      intervalID: null,
      intervalTime: 15000,
      // todo добавить еще шутеек.
      // Важно придерживаться общей ширины контента. Не больше, чем есть!
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
      additionally: '',
    };
  },

  mounted() {
    this.joke();
    this.intervalID = setInterval(this.joke, this.intervalTime);
  },

  destroyed() {
    clearInterval(this.interval);
  },

  methods: {
    joke() {
      const random = Math.floor(Math.random() * this.jokes.length);
      this.additionally = this.jokes[random];
    },

    async resetGame() {
      await this.$store.dispatch('game/reset_game');
    },

    // todo
    logout() {
      console.log('logout');
    },
  },

  computed: {
    ...mapState('game', ['current_sign', 'move', 'is_game_over']),

    message() {
      const player = this.current_sign === 'x' ? 'Крестик' : 'Нолик';
      return this.is_game_over ? `${player} победил!` : `Ходит: ${player}`;
    },
  },

  watch: {
    is_game_over() {
      if (this.is_game_over) {
        this.additionally = 'Игра окончена!';
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

.message {
  text-align: center;
  font-size: 16rem;
  font-weight: bold;
  color: $lightest;
}

.additionally {
  text-align: center;
  font-size: 12rem;
  color: $lighter;
}
</style>
