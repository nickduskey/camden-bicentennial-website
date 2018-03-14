<template>
  <div>
    <div id="mainPage" class="container">
      <img src="../assets/bicentennial-logo.png"/>
      <countdown-timer/>
      <h2 class="is-size-2">Sign up for the Bicentennial Parade!</h2>
      <h3 class="is-size-3">Saturday, September 1st 10am</h3>
      <p>Our parade will bring special recognition to the Village of Camden.</p>
      <p>We are asking organizations and community members to help us celebrate Camden's Bicentennial.  The parade will take place on Saturday, September 1st at 10:00am with line up at 9:00am.  Please return this form by <strong>Friday, August 10, 2018</strong>.  You will receive your confirmation and instructions by email.  If you have any questions please call <a href="tel:19374523142">937-452-3142</a>.</p>
      <div>
        <router-link id="registerButton" class="button is-primary is-rounded is-medium" to="/register">Register for the Parade</router-link>
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
