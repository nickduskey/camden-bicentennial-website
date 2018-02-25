<template>
  <div class="field">
    <label v-bind:for="name" class="label is-pulled-left">{{ label }}</label>
    <div class="control">
      <input
        v-bind:id="name"
        class="input"
        v-bind:type="type"
        v-bind:placeholder="placeholder"
        v-bind:name="name"
        >
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-input',
  props: [
    'type',
    'label',
    'placeholder',
    'name'
  ]
}
</script>

<style scoped>

</style>
