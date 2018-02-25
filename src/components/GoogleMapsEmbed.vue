<template>
  <div class="mapContainer">
    <iframe
      height="100%"
      width="100%"
      frameborder="0"
      scrolling="no"
      style="border:0"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCo5CVm6oQ5hP9wVucQnFXOR-PZCTtsFv0&q=Camden+OH" allowfullscreen>
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'google-maps-embed'
}
</script>

<style scoped>
.mapContainer {
  margin-top: 50px;
  width: 100%;
  height: 400px;
}
</style>
