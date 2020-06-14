<template>
  <div class="box-letter center mt-5">
    <p @click="clickNextLetter">{{correntLetter.letter}}</p>
    <audio ref="sound" @ended="$emit('nextLetter')" :src="correntLetter.sound"></audio>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'boxLetter',
    components: {
      // HelloWorld
    },
    props: {
      correntLetter: Object
    },
    data() {
      return {

      }
    },
    mounted() {
      this.playSound();
    },
    methods: {
      playSound() {
        this.$refs.sound.play();
      },
      clickNextLetter() {
        this.$emit('clickNextLetter')
      }
    }
  }
</script>

<style scoped>
  .box-letter {
    font-family: 'shofarregular';
    width: 50%;
  }

  .box-letter p {
    font-size: 250px;
  }

  .box-arrow i {
    width: 10%;
    font-size: 80px;
  }

  @media (max-width: 767.98px) {
    .box-letter {
      width: 80%;
    }

    .box-letter p {
      font-size: 230px;
    }

    .box-arrow i {
      font-size: 45px;
    }
  }
</style>