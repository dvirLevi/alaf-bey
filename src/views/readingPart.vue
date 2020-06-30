<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col center">
          <h2>שינון פסוקים</h2>
        </div>
      </div>
      <div class="row  center">
        <!-- <div class="col center"> -->
        <ButtonLink v-for="item in partsReading" :key="item.id" :text="firstThreeWords(item.partsOfRead[0].text)"
          :link="'/partsOfRead/' + item.id" class="col-md-7 center h5 mt-2 p-2" />
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
    methods: {
      firstThreeWords(words) {
        let arr = words.split(" ");
        return arr.slice(0, 3).join(" ")
      }
    },
    computed: {
      partsReading() {
        return partsReading
      },

    }
  }
</script>

<style scoped>
  @media (max-width: 767.98px) {}
</style>