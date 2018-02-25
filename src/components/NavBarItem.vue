<template>
  <router-link
    class="navbar-item"
    v-bind:to="path"
  >
    {{ linkText }}
  </router-link>
</template>

<script>
export default {
  name: 'nav-bar-item',
  props: [
    'path',
    'linkText'
  ]
}
</script>

<style scoped>

</style>
