<template>
  <div class="contain" :class="{change: openCloseMenu}" @click="$emit('openClose')">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>

<script>
  export default {
    name: 'Hamburger',
    props: {
      openCloseMenu: Boolean,
    },
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .contain {
      display: flex;
      flex-direction: column;
      justify-content: center;
      cursor: pointer;
      z-index: 102;
    }

    .bar1,
    .bar2,
    .bar3 {
      width: 35px;
      height: 5px;
      background-color: #000000;
      margin: 3px 0;
      transition: 0.4s;
    }

    .change .bar1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 7px);
      transform: rotate(-45deg) translate(-9px, 7px);
    }

    .change .bar2 {
      opacity: 0;
    }

    .change .bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -7px);
      transform: rotate(45deg) translate(-8px, -7px);
    }

  @media (max-width: 767.98px) {
   
  }
</style>