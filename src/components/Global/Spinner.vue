<template>
  <GridLayout
    :columns='columns'
    :rows='rows'
    class='Spinner'
  >
    <Label
      v-for='i in bounces'
      :key='i'
      :col='i'
      row='0'
      :style='[basicStyle, dynamicStyle]'
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
      bounces: [0, 1, 2],
      // Задержка отрисовки кадра, для создания ~30 кадров в секунду.
      timerID: null,
      delay: 33.3,
      scale: 0,
      maxScale: 0.95,
      minScale: 0.05,
      step: 0,
      // Чем больше, тем быстрее увеличивается/уменьшается элемент.
      stepSize: 0.05,
      dynamicStyle: {},
    };
  },

  mounted() {
    this.changeScale();
  },

  destroyed() {
    clearTimeout(this.timerID);
  },

  methods: {
    changeScale() {
      this.timerID = setTimeout(this.changeScale, this.delay);

      if (this.scale >= this.maxScale) {
        this.step = -this.stepSize;
      } else if (this.scale <= this.minScale) {
        this.step = this.stepSize;
      }

      // js не точный. ex: 0.4-0.1 === 0.30000000000000004.
      const scale = this.scale + this.step;
      this.scale = Number(scale.toFixed(2));
      this.dynamicStyle = { transform: `scale(${this.scale})` };
    },
  },

  computed: {
    columns() {
      return `${this.size}, ${this.size}, ${this.size}`;
    },

    rows() {
      return `${this.size}`;
    },

    basicStyle() {
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
