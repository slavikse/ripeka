<template>
  <StackLayout class='EndGameDrawnGameMain'>
    <Label text='Ничья'/>

    <AdsBanner/>
  </StackLayout>
</template>

<script>
import { AdsBanner } from '../../Ads';

export default {
  name: 'EndGameDrawnGameMain',

  components: {
    AdsBanner,
  },
};
</script>

<style
  lang='scss'
  scoped
>
.EndGameDrawnGameMain {
}
</style>
