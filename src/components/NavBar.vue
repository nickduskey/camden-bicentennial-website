<template>
   <nav class="navbar is-white" role="navigation" aria-label="main navigation">
     <div class="container">
       <div class="navbar-brand">
         <nav-bar-logo />
         <div
           class="navbar-burger"
           :class="{'is-active': isActive}"
           @click="toggleMenu"
           data-target="navMenu"
         >
           <span></span>
           <span></span>
           <span></span>
         </div>
       </div>
         <div id="navMenu" class="navbar-menu" :class="{'is-active': isActive}">
           <div class="navbar-end">
             <nav-bar-item
               v-for="link in links"
               :key="link.id"
               v-bind:linkText="link.text"
               v-bind:path="link.path"
             />
           </div>
         </div>
     </div>
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
  data () {
    return {
      isActive: false,
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
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
.navbar {
  box-shadow: 0 4px 2px -2px #b5b5b5;
}
</style>
