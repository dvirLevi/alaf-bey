<template>
  <div class="bac-menu" @click="$emit('close')">
    <div class=" wrap-items p-2">
      <div class="w-100 center-right p-2">
        <logo />
      </div>
      <router-link class="items-menu" :to="item.link" v-for="item in categories" :key="item.id">
        {{item.name}}
      </router-link>
    </div>
  </div>
</template>

<script>
  import logo from '@/components/logo.vue'

  export default {
    name: 'menus',
    components: {
      logo
    },
    props: {

    },
    data() {
      return {


      }
    },
    computed: {
      categories() {
        return this.$store.state.categories;
      }

    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menusToolBar {
    display: none;
  }

  .bac-menu {
    position: fixed;
    width: 100%;
    z-index: 100;
    background: #3333338c;
    right: 0;
    top: 0;
    height: 100%;

  }

  .wrap-items {
    position: absolute;
    right: 0;
    top: 0;
    width: 20%;
    background: #ffffff;
    height: 100%;
    flex-direction: column;
    animation-name: op;
    animation-duration: 0.3s;
    display: flex;
  }

  .items-menu {
    margin: 0;
    padding: 15px 10px;
    width: 100%;
    border-bottom: solid #d8d8d8 1px;
    font-size: 21px;
    animation-name: items;
    animation-duration: 0.5s;
    /* animation-delay: 0.5s; */
    font-size: 23px;
  }

  .items-menu:last-child {
    border-bottom: none;
  }

  .box-img {
    width: 50%;
  }


  @keyframes op {
    0% {
      right: -100%;
    }

    100% {
      right: 0%;
    }
  }

  @keyframes items {
    0% {
      padding: 0px 10px;
    }

    100% {
      padding: 15px 10px;
    }
  }


  @media (max-width: 767.98px) {
    .wrap-items {
      width: 75%;
    }

    .items-menu {
      font-size: 17px;
    }

    /* .box-img {
      width: 100px;
    } */
  }
</style>