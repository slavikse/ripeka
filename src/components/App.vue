<template>
  <Page class='page'>
    <Header/>
    <Field/>
  </Page>
</template>

<script>
import Header from './Header.vue';
import Field from './Field.vue';

export default {
  name: 'App',

  components: {
    Header,
    Field,
  },

  // async mounted() {
  //   try {
  //     fetch('https://jsonplaceholder.typicode.com/posts/1')
  //       .then(res => res.json())
  //       .then((data) => {
  //         console.log('data', data);
  //       });
  //   } catch (err) {
  //     console.error('get posts', err);
  //   }
  // },
};
</script>
<style
  lang='scss'
  scoped
>
@import '../styles/vars.scss';

.page {
}
</style>
