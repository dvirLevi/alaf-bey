<template>
  <div class="box-letter center">
    <p class="c-p center" @click="clickNextLetter" v-html="correntLetter.letter"></p>
    <audio ref="sound" @ended="autoNextLetter" :src="correntLetter.sound"></audio>
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
      correntLetter: Object,
      playList: Boolean
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
        console.log('0000')
        this.$emit('clickNextLetter')
      },
      autoNextLetter() {
        setTimeout(() => {
          if (this.playList) {
            this.$emit('autoNextLetter')
          }
        }, 800)
      }
    },
    watch: {
      playList: function () {
        if (this.playList) {
          this.playSound();
          this.autoNextLetter()
        }
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
    font-size: 350px;
    -webkit-user-select: none;
    min-width: 50%;

  }

 

  @media (max-width: 767.98px) {
    .box-letter {
      width: 80%;
    }

    .box-letter p {
      font-size: 240px;
    }

   
  }
</style>