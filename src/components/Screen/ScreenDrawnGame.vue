<template>
  <Page class='screen-drawn-game'>
    <ScreenDrawnGameHeader/>

    <Label text='Ничья'/>
  </Page>
</template>

<script>
import { ScreenDrawnGameHeader } from './Headers';

export default {
  name: 'ScreenDrawnGame',

  components: {
    ScreenDrawnGameHeader,
  },
};
</script>

<style
  lang='scss'
  scoped
>
@import '../vars';

.screen-drawn-game {

}
</style>
