<template>
    <div id="registerContainer" class="container">
      <div class="columns is-centered">
        <register-form/>
      </div>
    </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm'

export default {
  name: 'register-page',
  components: {
    RegisterForm
  }
}
</script>

<style scoped>
#registerContainer {
  margin-top: 30px;
}
</style>
