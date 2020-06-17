<template>
  <div class="box-letter center">
    <div class="c-p letter" @click="clickNextLetter(item.ifCorrect)" v-for="item in shuffleAnswers" :key="item.letter" v-html="item.letter">
      </div>
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
      speedOfTest: Number,
      // score: Number,
      // level: Number
      // playList: Boolean
    },
    data() {
      return {
        ifClick: true,
        // rejectionScore: 5,
      }
    },
    mounted() {
      this.playSound();
      setTimeout(() => {
        this.$emit('clickNextLetter')
      }, this.speedOfTest)
    },
    methods: {
      playSound() {
        this.$refs.sound.play();
      },
      clickNextLetter(ifCorrect) {
        if (this.ifClick) {
          let audioElement;
          if (ifCorrect) {
            this.ifClick = false;
            this.$emit('incScore', ifCorrect)
            audioElement = new Audio('audio/good.wav');
            audioElement.play();
            audioElement.onended = () => {
              this.$emit('clickNextLetter')
            }
          } else {
            // this.rejectionScore = this.score;
            audioElement = new Audio('audio/nogood.wav');
            audioElement.play();
            this.$emit('incScore', ifCorrect)
          }
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
    -webkit-user-select: none;
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