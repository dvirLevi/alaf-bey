<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col center">
          <ButtonLink v-for="item in categories" :key="item.id" :text="item.name" selectRouteColor="#ee9b36e6" :link="item.link" backColor="#ffae4db8" backColorHov="#ffae4dd9" class="width-link center m-1" />
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      // HelloWorld
    },
    data() {
      return {

      }
    },
    computed: {
      categories() {
        let arr = this.$store.state.categories.filter((val) => {
          return val.category === 1
        });
        return arr
      }
    }
  }
</script>

<style scoped>
.width-link {
width: 30%;
font-size: 20px;
padding: 10px 20px;
}
 @media (max-width: 767.98px) {
   .width-link {
width: 40%;
font-size: 14px;
padding: 5px 10px;
}
 }
</style>