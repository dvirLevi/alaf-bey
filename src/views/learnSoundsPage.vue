<template>
  <div class="row">
    <div class="col">
      <boxArrowLetter :letterAndSound="letterAndSound" :playList="playList" boxOf="letter" />
      <div class="row center pt-4 border-top">
        <ButtonLink text="" @customEvent="playList = !playList" link="" class="center col-md-1 col-3 h3 p-0">
          <i class="m-2" :class="playList? 'fas fa-stop': 'fas fa-play'"></i>
        </ButtonLink>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import boxArrowLetter from '@/components/boxArrowLetter.vue'

  export default {
    name: 'learnSoundsPage',
    components: {
      boxArrowLetter
    },
    data() {
      return {
        playList: false,
        letterAndSound: [
          {
            letter: "&#1464",
            sound: "audio/letters/1.wav",
            id: 1
          },
          {
            letter: "&#1459",
            sound: "audio/letters/1.wav",
            id: 11
          },
          {
            letter: "&#1463",
            sound: "audio/letters/2.wav",
            id: 2
          },
          {
            letter: "&#1458",
            sound: "audio/letters/2.wav",
            id: 22
          },
          {
            letter: "&#1462",
            sound: "audio/letters/3.wav",
            id: 3
          },
          {
            letter: "&#1457",
            sound: "audio/letters/3.wav",
            id: 33
          },
          {
            letter: "&#1461",
            sound: "audio/letters/4.wav",
            id: 4
          },
          {
            letter: "&#1460",
            sound: "audio/letters/5.wav",
            id: 5
          },
          {
            letter: "&#1467",
            sound: "audio/letters/6.wav",
            id: 6
          },
          {
            letter: "&#1456",
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
        ]
      }
    },

  }
</script>

<style scoped>
  .fas {
    font-size: 30px;
  }

  @media (max-width: 767.98px) {

  }
</style>