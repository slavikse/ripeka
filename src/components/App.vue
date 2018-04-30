<template>
  <Page class='page'>
    <ActionBar class='header'>
      <StackLayout orientation="horizontal">
        <Image
          class='logo'
          src='~/images/ripeka.png'
        />

        <Label
          verticalAlignment='center'
          class='title'
          text='RIPEKA'
        />
      </StackLayout>

      <ActionItem
        android.position='popup'
        @tap='gameReset'
      >
        <Button
          class='reset'
          text='reset'
        />
      </ActionItem>
    </ActionBar>

    <WrapLayout class='field'>
      <Button
        v-for='(cell, index) in cells'
        :key='index'
        :text='cell'
        @tap='makeMove(index)'
        class='cell'
      />
    </WrapLayout>
  </Page>
</template>

<script>
export default {
  name: 'Field',

  data() {
    return {
      // Игровое поле (в линейном представлении).
      cells: [
        '', '', '',
        '', '', '',
        '', '', '',
      ],
      cellsCopy: [],
      // true: X | false: O
      sign: true,
    };
  },

  mounted() {
    this.cellsCopy = [...this.cells];
  },

  methods: {
    makeMove(index) {
      if (this.cells[index].length === 0) {
        const currentSign = this.getCurrentSign();
        this.cells.splice(index, 1, currentSign);
        this.changeSign();
      }
    },

    getCurrentSign() {
      return this.sign ? 'X' : 'O';
    },

    changeSign() {
      this.sign = !this.sign;
    },

    gameReset() {
      this.cells = this.cellsCopy;
    },
  },
};
</script>
<style
  lang='scss'
  scoped
>
@import "../styles/vars.scss";

.page {
}

.header {
  background-color: $light;

  .logo {
    height: 40rem;
    width: 40rem;
  }

  .title {
    margin-left: 10rem;
    font-size: 26rem;
    color: $lightest;
    font-weight: bold;
  }

  .reset {
    font-size: 16rem;
    color: $lightest;
    background-color: $lighter;
  }
}

.field {
  background-color: $light;

  .cell {
    height: 33.33333%;
    width: 33.33333%;
    font-size: 40rem;
    color: $dark;
    font-weight: bold;
    background-color: $lighter;
  }
}
</style>
