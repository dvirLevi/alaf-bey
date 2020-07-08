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
            sound: "audio/name-of-sounds/1.mp3",
            id: 1
          },
          {
            letter: "&#1459",
            sound: "audio/name-of-sounds/2.mp3",
            id: 11
          },
          {
            letter: "&#1463",
            sound: "audio/name-of-sounds/3.mp3",
            id: 2
          },
          {
            letter: "&#1458",
            sound: "audio/name-of-sounds/4.mp3",
            id: 22
          },
          {
            letter: "&#1462",
            sound: "audio/name-of-sounds/5.mp3",
            id: 3
          },
          {
            letter: "&#1457",
            sound: "audio/name-of-sounds/6.mp3",
            id: 33
          },
          {
            letter: "&#1461",
            sound: "audio/name-of-sounds/7.wav",
            id: 4
          },
          // {
          //   letter: "&#1460",
          //   sound: "audio/name-of-sounds/8.wav",
          //   id: 5
          // },
          {
            letter: "אִ",
            sound: "audio/name-of-sounds/8.mp3",
            id: 5
          },
          {
            letter: "אִי",
            sound: "audio/name-of-sounds/9.mp3",
            id: 55
          },
          // {
          //   letter: "&#1467",
          //   sound: "audio/letters/6.wav",
          //   id: 6
          // },
          {
            letter: "&#1456",
            sound: "audio/name-of-sounds/11.mp3",
            id: 7
          },
          {
            letter: "אוֹֹ",
            sound: "audio/name-of-sounds/12.mp3",
            id: 8
          },
          {
            letter: "אֹ",
            sound: "audio/name-of-sounds/13.mp3",
            id: 88
          },
          {
            letter: "וּ",
            sound: "audio/name-of-sounds/14.mp3",
            id: 9
          },
          {
            letter: "וֻ",
            sound: "audio/name-of-sounds/15.mp3",
            id: 99
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