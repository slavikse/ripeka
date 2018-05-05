<template>
  <GridLayout
    columns='60, 60, 60'
    rows='60'
    class='spinner'
  >
    <Label
      col='0'
      row='0'
      :style='getStyle'
      class='bounce bounce-1'
    />

    <Label
      col='1'
      row='0'
      :style='getStyle'
      class='bounce bounce-2'
    />

    <Label
      col='2'
      row='0'
      :style='getStyle'
      class='bounce'
    />
  </GridLayout>
</template>

<script>
/**
 * Бесконечный спиннер для ожидания долгой операции.
 * Необязательные параметры:
 * :size='2' - определяет размеры каждого круга.
 * Это сразу width и height (в rem'ах).
 * :color='red' - определяет цвет каждого круга.
 */
export default {
  name: 'Spinner',

  props: {
    size: {
      type: Number,
      default: 40,
    },
    color: {
      type: String,
      default: '#20734e',
    },
  },

  computed: {
    getStyle() {
      return {
        width: `${this.size}rem`,
        height: `${this.size}rem`,
        backgroundColor: this.color,
      };
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
  background-color: $dark;
  /*animation: delay 1.4s infinite ease-in-out both;*/
  /*will-change: transform;*/
}

/*.bounce-1 {*/
/*animation-delay: -0.32s;*/
/*}*/

/*.bounce-2 {*/
/*animation-delay: -0.16s;*/
/*}*/

/*@keyframes delay {*/
/*0%,*/
/*80%,*/
/*100% {*/
/*transform: scale(0);*/
/*}*/

/*40% {*/
/*transform: scale(0.8);*/
/*}*/
/*}*/
</style>
