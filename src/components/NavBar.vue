<template>
   <nav class="navbar is-white" role="navigation" aria-label="main navigation">
     <div class="navbar-brand">
       <nav-bar-logo />
       <div class="navbar-burger"
          :class="{'is-active': isActive}"
          @click="isActive = !isActive"
       >
         <span></span>
         <span></span>
         <span></span>
       </div>
     </div>
     <transition name="slide-fade">
       <div id="navbarItems" class="navbar-menu" :class="{'is-active': isActive}">
         <div class="navbar-end">
           <nav-bar-item
             v-for="link in links"
             :key="link.id"
             v-bind:linkText="link.text"
             v-bind:path="link.path"
           />
         </div>
       </div>
     </transition>
   </nav>
</template>

<script>
import NavBarLogo from '@/components/NavBarLogo'
import NavBarItem from '@/components/NavBarItem'

export default {
  name: 'nav-bar',
  components: {
    NavBarLogo,
    NavBarItem
  },
  props: ['isActive'],
  data () {
    return {
      links: [
        {
          id: 1,
          text: 'Home',
          path: '/'
        },
        {
          id: 2,
          text: 'Register for the Parade',
          path: '/register'
        }
      ]
    }
  }
}
</script>

<style scoped>
.navbar {
  box-shadow: 0 4px 2px -2px #b5b5b5;
}
</style>
