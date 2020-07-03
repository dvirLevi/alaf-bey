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
    name: 'Home',
    components: {
      boxArrowLetter
    },
    data() {
      return {
        playList: false,
        letterAndSound: [{
            letter: "א",
            sound: "audio/letters/1.mp3",
            id: 1
          },
          {
            letter: "בּ",
            sound: "audio/letters/2.mp3",
            id: 2
          },
          {
            letter: "ב",
            sound: "audio/letters/3.mp3",
            id: 3
          },
          {
            letter: "גּ",
            sound: "audio/letters/4.mp3",
            id: 4
          },
          {
            letter: "ג",
            sound: "audio/letters/5.mp3",
            id: 5
          },
          {
            letter: "דּ",
            sound: "audio/letters/6.mp3",
            id: 6
          },
          {
            letter: "ד",
            sound: "audio/letters/7.mp3",
            id: 7
          },
          {
            letter: "ה",
            sound: "audio/letters/8.mp3",
            id: 8
          },
          {
            letter: "ו",
            sound: "audio/letters/9.mp3",
            id: 9
          },
          {
            letter: "ז",
            sound: "audio/letters/10.mp3",
            id: 10
          },
          {
            letter: "ח",
            sound: "audio/letters/11.mp3",
            id: 11
          },
          {
            letter: "ט",
            sound: "audio/letters/12.mp3",
            id: 12
          },
          {
            letter: "י",
            sound: "audio/letters/13.mp3",
            id: 13
          },
          {
            letter: "כּ",
            sound: "audio/letters/14.mp3",
            id: 14
          },
          {
            letter: "כ",
            sound: "audio/letters/15.mp3",
            id: 15
          },
          {
            letter: "ך",
            sound: "audio/letters/16.mp3",
            id: 16
          },
          {
            letter: "ל",
            sound: "audio/letters/17.mp3",
            id: 17
          },
          {
            letter: "מ",
            sound: "audio/letters/18.mp3",
            id: 18
          },
          {
            letter: "ם",
            sound: "audio/letters/19.mp3",
            id: 19
          },
          {
            letter: "נ",
            sound: "audio/letters/20.mp3",
            id: 20
          },
          {
            letter: "ן",
            sound: "audio/letters/21.mp3",
            id: 21
          },
          {
            letter: "ס",
            sound: "audio/letters/22.mp3",
            id: 22
          },
          {
            letter: "ע",
            sound: "audio/letters/23.mp3",
            id: 2
          },
          {
            letter: "פּ",
            sound: "audio/letters/24.mp3",
            id: 24
          },
          {
            letter: "פ",
            sound: "audio/letters/25.mp3",
            id: 25
          },
          {
            letter: "ף",
            sound: "audio/letters/26.mp3",
            id: 26
          },
          {
            letter: "צ",
            sound: "audio/letters/27.mp3",
            id: 27
          },
          {
            letter: "ץ",
            sound: "audio/letters/28.mp3",
            id: 28
          },
          {
            letter: "ק",
            sound: "audio/letters/29.mp3",
            id: 29
          },
          {
            letter: "ר",
            sound: "audio/letters/30.mp3",
            id: 30
          },

          {
            letter: "שׁ",
            sound: "audio/letters/31.mp3",
            id: 31
          },
          {
            letter: "שֹ",
            sound: "audio/letters/32.mp3",
            id: 32
          },
          {
            letter: "תּ",
            sound: "audio/letters/33.mp3",
            id: 33
          },
          {
            letter: "ת",
            sound: "audio/letters/34.mp3",
            id: 34
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