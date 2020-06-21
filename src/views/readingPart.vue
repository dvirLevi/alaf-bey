<template>
  <div class="row">
    <div class="col">
      <div class="row  center">
        <!-- <div class="col center"> -->
          <ButtonLink v-for="item in partsReading" :key="item.id" :text="item.partsOfRead[0].text" :link="'/partsOfRead/' + item.id"
            class="col-md-7 center h5 mt-2" />
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import partsReading from '@/helpers/partsReading.js'

  export default {
    name: 'readingPart',
    components: {
      // HelloWorld
    },
    data() {
      return {
       
      }
    },
    computed: {
      partsReading() {
        return partsReading
      }
    }
  }
</script>

<style scoped>
  

  @media (max-width: 767.98px) {
    
  }
</style>