<template>
  <Page class='game'>
    <Header/>
    <Field/>
  </Page>
</template>

<script>
import Header from './Header.vue';
import Field from './Field.vue';

export default {
  name: 'Game',

  components: {
    Header,
    Field,
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../vars';

.game {
}
</style>
