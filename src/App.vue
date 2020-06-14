<template>
  <div id="app" class="container-fluid">
    <toolBar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import toolBar from '@/components/toolBar.vue'

  export default {
    name: 'Home',
    components: {
      toolBar
    }
  }
</script>

<style scoped>
.container-fluid {
  background-color: #f5f5dc41;
  min-height: 100vh;
}

/* .container {
    min-height: calc(100vh - 125px);

} */

</style>