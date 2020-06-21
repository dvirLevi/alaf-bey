<template>
  <p class="h1 c-p mt-md-4 mt-1" @click="$emit('customEvent', correntIndex)" :class="{'active-color': ifCorrentPart}">
    {{item.text}}
  </p>
</template>

<script>
  // @ is an alias to /src
  // import boxLetter from '@/components/boxLetter.vue'


  export default {
    name: '',
    components: {

    },
    props: {
      item: Object,
      correntIndex: Number,
      index: Number
    },
    data() {
      return {

      }
    },
    methods: {
      // playSound() {
      //   console.log(this.item.sound)
      //   let audioElement = new Audio("../"+this.item.sound);
      //   audioElement.play();
      // },
    },
    computed: {
      ifCorrentPart() {
        if (this.index === this.correntIndex) {
          return true
        }
        return false
      }
    }
  }
</script>

<style scoped>
  p {
    font-family: Arial, Helvetica, sans-serif;
  }

  .active-color {
    color: #ee4535;
  }

  @media (max-width: 767.98px) {}
</style>