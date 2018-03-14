<template>
   <div class="field">
     <label for="desciptionInput" class="label is-pulled-left">Description of Entry</label>
     <div class="control">
       <textarea
         id="desciptionInput"
         class="textarea"
         name="desciption"
         placeholder="This will be read by the MC. We may edit for time."
       ></textarea>
     </div>
   </div>
</template>

<script>
export default {
  name: 'description-input'
}
</script>

<style scoped>

</style>
