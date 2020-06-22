<template>
  <div id="app" class="container-fluid">
    <toolBar />
    <div class="container">
      <router-view />
    </div>
    <footer>
      <div class="row mt-3">
        <div class="col border-top pt-3 pb-2 center">
          <p class="h6"><a href="https://apps-life.netlify.app" target="_blanc">נבנה ופותח בAppsLife</a></p>
        </div>
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
    min-height: calc(100vh - 190px);
  }

  @media (max-width: 767.98px) {
    .container {
      min-height: calc(100vh - 165px);
    }
  }
</style>