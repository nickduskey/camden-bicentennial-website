<template>
  <div class="field is-grouped">
    <label
      for="typeSelect"
      class="label"
      >Entry Type</label>
    <div class="control">
      <div class="select">
        <select id="typeSelect" name="type">
          <option
            v-for="type in types"
            :key="type.id"
            v-bind:value="type.name"
            >{{ type.name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'type-select',
  data () {
    return {
      types: [
        {
          id: 1,
          name: 'Float'
        },
        {
          id: 2,
          name: 'Marching Unit'
        },
        {
          id: 3,
          name: 'Animals'
        },
        {
          id: 4,
          name: 'Musical Group/Band'
        },
        {
          id: 7,
          name: 'Other'
        }
      ]
    }
  }
}
</script>

<style scoped>
.control {
  margin-left: 15px;
}
</style>
