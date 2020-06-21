<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col center">
          <ButtonLink v-for="item in partsReading" :key="item.id" :text="item.partsOfRead[0].text" :link="'/partsOfRead/' + item.id"
            class="w-75 center h4 m-1" />
        </div>
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