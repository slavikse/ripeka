<template>
  <GridLayout
    :columns='columns'
    :rows='rows'
    class='spinner'
  >
    <Label
      col='0'
      row='0'
      :style='[baseStyle, style1]'
      class='bounce'
    />

    <Label
      col='1'
      row='0'
      :style='[baseStyle, style2]'
      class='bounce'
    />

    <Label
      col='2'
      row='0'
      :style='[baseStyle, style3]'
      class='bounce'
    />
  </GridLayout>
</template>

<script>
/**
 * Бесконечный спиннер для ожидания долгой операции.
 * Необязательные параметры:
 * :size='30' - определяет размеры каждого круга.
 *  (width: 30rem и height: 30rem)
 * :color='red' - определяет цвет кругов.
 *
 * Найденные несоответствия с веб платформой:
 * Бывает подергивание анимации.
 * animation infinity - не работает.
 * animation багует с transform.
 * requestAnimationFrame - нет.
 * transition - не работает.
 * animation-iteration-count - не работает.
 * animation-delay - не работает.
 * will-change - нет.
 */
export default {
  name: 'Spinner',

  props: {
    size: {
      type: Number,
      default: 20,
    },
    color: {
      type: String,
      default: '#68d8a5',
    },
  },

  data() {
    return {
      fps60: 1000 / 60,
      delay: 1000 / 3,

      rightBorder: 1,
      leftBorder: 0,

      timerID1: null,
      timerID2: null,
      timerID3: null,

      // Чем больше, тем быстрее анимация.
      step: 0.03,

      scale1: 0,
      step1: 0,
      style1: {},

      scale2: 0,
      step2: 0,
      style2: {},

      scale3: 0,
      step3: 0,
      style3: {},
    };
  },

  mounted() {
    this.timerID1 = setTimeout(this.runner1, 0);
  },

  destroyed() {
    this.clearTimers();
  },

  methods: {
    runner1() {
      this.timerID2 = setTimeout(this.runner2, this.delay);
      this.timerID1 = setTimeout(this.changeScale1, this.fps60);
    },

    runner2() {
      this.timerID3 = setTimeout(this.runner3, this.delay);
      this.timerID2 = setTimeout(this.changeScale2, this.fps60);
    },

    runner3() {
      this.timerID3 = setTimeout(this.changeScale3, this.fps60);
    },

    // С 0 до 1 и обратно с заданным шагом.
    // js не точный. ex: 0.4-0.1 === 0.30000000000000004.
    changeScale1() {
      this.timerID1 = setTimeout(this.changeScale1, this.fps60);
      const scale = Number(this.scale1.toFixed(2));

      if (scale >= this.rightBorder && Math.round(scale) === 1) {
        this.step1 = -this.step;
      } else if (scale <= this.leftBorder && Math.round(scale) === 0) {
        this.step1 = this.step;
      }

      this.scale1 += this.step1;
      this.style1 = { transform: `scale(${this.scale1})` };
    },

    changeScale2() {
      this.timerID2 = setTimeout(this.changeScale2, this.fps60);
      const scale = Number(this.scale2.toFixed(2));

      if (scale >= this.rightBorder && Math.round(scale) === 1) {
        this.step2 = -this.step;
      } else if (scale <= this.leftBorder && Math.round(scale) === 0) {
        this.step2 = this.step;
      }

      this.scale2 += this.step2;
      this.style2 = { transform: `scale(${this.scale2})` };
    },

    changeScale3() {
      this.timerID3 = setTimeout(this.changeScale3, this.fps60);
      const scale = Number(this.scale3.toFixed(2));

      if (scale >= this.rightBorder && Math.round(scale) === 1) {
        this.step3 = -this.step;
      } else if (scale <= this.leftBorder && Math.round(scale) === 0) {
        this.step3 = this.step;
      }

      this.scale3 += this.step3;
      this.style3 = { transform: `scale(${this.scale3})` };
    },

    clearTimers() {
      clearTimeout(this.timerID1);
      clearTimeout(this.timerID2);
      clearTimeout(this.timerID3);
    },
  },

  computed: {
    columns() {
      return `${this.size}, ${this.size}, ${this.size}`;
    },

    rows() {
      return `${this.size}`;
    },

    baseStyle() {
      return { backgroundColor: this.color };
    },
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../vars';

.spinner {
}

.bounce {
  border-radius: 50%;
  transform: scale(0);
}
</style>
