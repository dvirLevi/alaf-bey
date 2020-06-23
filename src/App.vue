<template>
  <div id="app" class="container-fluid">
    <toolBar />
    <div class="container">
      <router-view />
    </div>
    <footer class="row mt-3">
        <div class="col pt-3 pb-2 center">
          <p class="h6"><a href="https://apps-life.netlify.app" target="_blanc">נבנה ופותח בAppsLife</a></p>
        </div>
    </footer>
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

  .container {
    min-height: calc(100vh - 175px);
  }

  footer {
    background-color: #444;
    color: #fff;
  }

  @media (max-width: 767.98px) {
    .container {
      min-height: calc(100vh - 101px);
    }
  }
</style>