<template>
    <div class="countdownWrapper">
      <Countdown deadline="September 1, 2018" />
      <h4 class="is-size-4">Until the Bicentennial Begins</h4>
    </div>
</template>

<script>
import Countdown from 'vuejs-countdown'

export default {
  name: 'countdown-timer',
  components: {
    Countdown
  }
}
</script>

<style scoped>
.countdownWrapper {
  margin: 20px 0px 20px 0px;
}
</style>
