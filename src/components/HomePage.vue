<template>
  <div>
    <div id="mainPage" class="container">
      <img src="../assets/bicentennial-logo.png"/>
      <countdown-timer/>
      <h2 class="is-size-2">Sign up for the Bicentennial Parade!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim mauris, aliquet nec mi vel, viverra pellentesque justo. Morbi dapibus iaculis est vitae posuere. Maecenas ligula dolor, tristique id hendrerit in, fermentum non lectus. Morbi sit amet laoreet ante. In ultricies nisl id efficitur sagittis. Proin ultrices elementum tortor at molestie. Ut porta lorem eros, aliquam hendrerit risus vehicula vel. Integer quis lacus vitae diam pharetra finibus at quis tellus.
      </p>
      <div>
        <router-link id="registerButton" class="button is-primary" to="/register">Register for the Parade</router-link>
      </div>
    </div>
    <div class="container is-fluid">
      <google-maps-embed/>
    </div>
  </div>
</template>

<script>
import GoogleMapsEmbed from '@/components/GoogleMapsEmbed'
import CountdownTimer from '@/components/CountdownTimer'

export default {
  name: 'home-page',
  components: {
    GoogleMapsEmbed,
    CountdownTimer
  }
}
</script>

<style scoped>
#mainPage {
  margin-top: 30px;
}
  #registerButton {
    margin-top: 20px;
  }
</style>
