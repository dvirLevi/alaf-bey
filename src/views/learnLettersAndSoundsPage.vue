<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col center">
          <ButtonLink v-for="item in soundsTypes" :key="item.id" text="" @customEvent="typeOfSound = item.id" link="" class="center col-md-1 col-2 m-1 p-0 h5 w-50">
            {{item.letter}}
          </ButtonLink>
        </div>
      </div>
      <boxArrowLetter :letterAndSound="letterAndSound" :key="typeOfSound" :playList="playList" boxOf="letter" />
      <div class="row center">
        <ButtonLink text="" @customEvent="playList = !playList" link="" class="center col-md-1 col-3 h5 p-2">
          <i class="m-2" :class="playList? 'fas fa-stop': 'fas fa-play'"></i>
        </ButtonLink>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import boxArrowLetter from '@/components/boxArrowLetter.vue'
  import allLetterAndSound from '@/helpers/allLetterAndSound.js'

  export default {
    name: 'Home',
    components: {
      boxArrowLetter
    },
    data() {
      return {
        playList: false,
        soundsTypes: [{
            letter: "אָ",
            sound: "audio/letters/1.wav",
            id: 1
          },
          {
            letter: "אַ",
            sound: "audio/letters/2.wav",
            id: 2
          },
          {
            letter: "אֶ",
            sound: "audio/letters/3.wav",
            id: 3
          },
          {
            letter: "אֵ",
            sound: "audio/letters/4.wav",
            id: 4
          },
          {
            letter: "אִ",
            sound: "audio/letters/5.wav",
            id: 5
          },
          {
            letter: "אֻ",
            sound: "audio/letters/6.wav",
            id: 6
          },
          {
            letter: "אְ",
            sound: "audio/letters/7.wav",
            id: 7
          },
          {
            letter: "וֹ",
            sound: "audio/letters/8.wav",
            id: 8
          },
          {
            letter: "וּ",
            sound: "audio/letters/9.wav",
            id: 9
          },
        ],
        typeOfSound: 1
      }
    },
    computed: {
      letterAndSound() {
        let arr = allLetterAndSound.filter((val) => {
          return val.type === this.typeOfSound;
        })
        return arr
      }
    }

  }
</script>

<style scoped>
  .fas {
    font-size: 30px;
  }

  @media (max-width: 767.98px) {}
</style>