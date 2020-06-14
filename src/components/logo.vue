<template>
  <router-link to="/" class="row-logo center">
    <h1 class="m-0">אַלַף-בֵּי</h1>
  </router-link>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'logo',
    components: {
      // HelloWorld
    },

  }
</script>

<style scoped>
  .row-logo {
    position: relative;
    text-align: center;
    width: 90px;
    height: 90px;
  }

  .row-logo::after {
    content: "";
    background-image: url('https://storage.needpix.com/rsynced_images/ornamental-1327925_1280.png');
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
  }

  .row-logo h1 {
    font-size: 20px;
    font-family: 'shofarregular';
  }


  @media (max-width: 767.98px) {
     .row-logo {
    position: relative;
    text-align: center;
    width: 60px;
    height: 60px;
  }
    .row-logo h1 {
      font-size: 18px;
    }

  }
</style>