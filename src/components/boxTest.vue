<template>
  <div class="box-letter center">
    <div class="c-p letter" @click="clickNextLetter(item.ifCorrect)" v-for="item in shuffleAnswers" :key="item.letter">
      {{item.letter}}</div>
    <audio ref="sound" @ended.once="palyNameOfLetter" src="audio/where.wav"></audio>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import shuffle from '@/helpers/shuffle.js'

  export default {
    name: 'boxTest',
    components: {
      // HelloWorld
    },
    props: {
      correntLetter: Object,
      // playList: Boolean
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
      clickNextLetter(ifCorrect) {
        let audioElement;
        if (ifCorrect) {
          audioElement = new Audio('audio/good.wav');
          audioElement.play();
          audioElement.onended = () => {
            this.$emit('clickNextLetter')
            this.$emit('incScore', ifCorrect)
          }
        } else {
          audioElement = new Audio('audio/nogood.wav');
          audioElement.play();
          this.$emit('incScore', ifCorrect)
        }
      },
      palyNameOfLetter() {
        this.$refs.sound.src = this.correntLetter.sound;
        this.playSound()
      }
    },
    computed: {
      shuffleAnswers() {
        return shuffle(this.correntLetter.answers)
      }
    }
    // watch: {
    //   playList: function () {
    //     if (this.playList) {
    //       this.playSound();
    //       this.autoNextLetter()
    //     }
    //   }
    // }
  }
</script>

<style scoped>
  .box-letter {
    font-family: 'shofarregular';
    width: 80%;
  }

  .box-letter .letter {
    text-align: center;
    font-size: 200px;
    width: 33%;
  }

  @media (max-width: 767.98px) {
    .box-letter {
      width: 100%;
    }

    .box-letter .letter {
      font-size: 125px;
    }

  }
</style>