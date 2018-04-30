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
        @tap='reset'
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
        @tap='move(index)'
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
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9',
      ],
      cellsCopy: [],
    };
  },

  mounted() {
    this.cellsCopy = [...this.cells];
  },

  methods: {
    move(index) {
      // todo проверка доступности ячейки
      this.cells.splice(index, 1, 'x');
    },

    reset() {
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
    font-size: 28rem;
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
