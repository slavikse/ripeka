<template>
  <GridLayout
    :columns='columns'
    :rows='rows'
    class='Spinner'
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
 * Так же есть нативный:
 * <ActivityIndicator busy="true" @busyChange="onBusyChanged" />
 *
 * Найденные отличия с веб платформой (11.05.18):
 * Бывает поддергивание анимации в начале.
 * requestAnimationFrame - нет.
 * transition - не работает.
 * animation infinity - не работает.
 * animation багует с transform.
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
      // Задержка отрисовки кадра, для создания ~30 кадров в секунду.
      delay: 33.3,
      // Задержка изменения размеров элемента (для создания иерархической анимации).
      delayStart: 1000,

      maxScale: 0.95,
      minScale: 0.05,

      timerID1: null,
      timerID2: null,
      timerID3: null,

      // Чем больше, тем быстрее увеличивается/уменьшается элемент.
      step: 0.05,

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
    this.changeScale1();
    this.timerID2 = setTimeout(this.changeScale2, this.delayStart);
    this.timerID3 = setTimeout(this.changeScale3, this.delayStart * 2);
  },

  destroyed() {
    this.clearTimers();
  },

  methods: {
    // С 0 до 1 и обратно с заданным шагом.
    // js не точный. ex: 0.4-0.1 === 0.30000000000000004.
    changeScale1() {
      this.timerID1 = setTimeout(this.changeScale1, this.delay);

      if (this.scale1 >= this.maxScale) {
        this.step1 = -this.step;
      } else if (this.scale1 <= this.minScale) {
        this.step1 = this.step;
      }

      const scale = this.scale1 + this.step1;
      this.scale1 = Number(scale.toFixed(2));
      this.style1 = { transform: `scale(${this.scale1})` };
    },

    changeScale2() {
      this.timerID2 = setTimeout(this.changeScale2, this.delay);

      if (this.scale2 >= this.maxScale) {
        this.step2 = -this.step;
      } else if (this.scale2 <= this.minScale) {
        this.step2 = this.step;
      }

      const scale = this.scale2 + this.step2;
      this.scale2 = Number(scale.toFixed(2));
      this.style2 = { transform: `scale(${this.scale2})` };
    },

    changeScale3() {
      this.timerID3 = setTimeout(this.changeScale3, this.delay);

      if (this.scale3 >= this.maxScale) {
        this.step3 = -this.step;
      } else if (this.scale3 <= this.minScale) {
        this.step3 = this.step;
      }

      const scale = this.scale3 + this.step3;
      this.scale3 = Number(scale.toFixed(2));
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

.Spinner {
}

.bounce {
  border-radius: 50%;
  transform: scale(0);
}
</style>
