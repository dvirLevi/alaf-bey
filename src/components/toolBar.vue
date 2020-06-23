<template>
  <nav class="row row-toolbar border-bottom">
    <div class="col-md-4 desktop">
    </div>
    <div class="col-4 center">
     <logo />
    </div>
    <div class="col-md-4 col-8 center-left pl-md-5 pl-3">
      <Hamburger @openClose="openCloseMenu = !openCloseMenu" :openCloseMenu="openCloseMenu" />
      <menus v-if="openCloseMenu" @close="openCloseMenu = !openCloseMenu"/>
    </div>
  </nav>
</template>

<script>
  import Hamburger from '@/components/Hamburger.vue'
  import menus from '@/components/menus.vue'
  import logo from '@/components/logo.vue'

  export default {
    name: 'toolBar',
    components: {
      Hamburger,
      menus,
      logo
    },
    data() {
      return {
        openCloseMenu: false
      }
    }

  }
</script>

<style scoped>
.row-toolbar {
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;
  margin-bottom: 15px;
  height: 95px;
}

 @media (max-width: 767.98px) {
   .row-toolbar {
  height: 70px;
}
 }
</style>