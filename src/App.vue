<template>
  <div id="app">
    <nav-bar />
    <router-view />
    <the-footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'App',
  components: {
    NavBar,
    TheFooter
  }
}
</script>

<style>
@import url('../node_modules/bulma/css/bulma.css');
@import url('https://fonts.google.com/css?family=Source+Sans+Pro');
#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #332e2a;
}
</style>
