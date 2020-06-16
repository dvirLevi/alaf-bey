<template>
  <div class="row">
    <div class="col">
      <boxArrowLetter :letterAndSound="letterAndSound" :playList="playList" boxOf="letter" />
      <div class="row center">
        <!-- <div class="col center"> -->
        <ButtonLink text="" @customEvent="playList = !playList" selectRouteColor="#ee9b36e6" link=""
          backColor="#ffae4db8" backColorHov="#ffae4dd9" class="center col-md-1 col-3 h5 p-2 w-50">
          <!-- {{playList? 'עצור': 'השמעה ברצף'}} -->
          <i class="m-2" :class="playList? 'fas fa-stop': 'fas fa-play'"></i>
        </ButtonLink>
        <!-- </div> -->
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
            sound: "audio/letters/1.wav",
            id: 1
          },
          {
            letter: "בּ",
            sound: "audio/letters/2.wav",
            id: 2
          },
          {
            letter: "ב",
            sound: "audio/letters/3.wav",
            id: 3
          },
          {
            letter: "גּ",
            sound: "audio/letters/4.wav",
            id: 4
          },
          {
            letter: "ג",
            sound: "audio/letters/5.wav",
            id: 5
          },
          {
            letter: "דּ",
            sound: "audio/letters/6.wav",
            id: 6
          },
          {
            letter: "ד",
            sound: "audio/letters/7.wav",
            id: 7
          },
          {
            letter: "ה",
            sound: "audio/letters/8.wav",
            id: 8
          },
          {
            letter: "ו",
            sound: "audio/letters/9.wav",
            id: 9
          },
          {
            letter: "ז",
            sound: "audio/letters/10.wav",
            id: 10
          },
          {
            letter: "ח",
            sound: "audio/letters/11.wav",
            id: 11
          },
          {
            letter: "ט",
            sound: "audio/letters/12.wav",
            id: 12
          },
          {
            letter: "י",
            sound: "audio/letters/13.wav",
            id: 13
          },
          {
            letter: "כּ",
            sound: "audio/letters/14.wav",
            id: 14
          },
          {
            letter: "כ",
            sound: "audio/letters/15.wav",
            id: 15
          },
          {
            letter: "ך",
            sound: "audio/letters/16.wav",
            id: 16
          },
          {
            letter: "ל",
            sound: "audio/letters/17.wav",
            id: 17
          },
          {
            letter: "מ",
            sound: "audio/letters/18.wav",
            id: 18
          },
          {
            letter: "ם",
            sound: "audio/letters/19.wav",
            id: 19
          },
          {
            letter: "נ",
            sound: "audio/letters/20.wav",
            id: 20
          },
          {
            letter: "ן",
            sound: "audio/letters/21.wav",
            id: 21
          },
          {
            letter: "ס",
            sound: "audio/letters/22.wav",
            id: 22
          },
          {
            letter: "ע",
            sound: "audio/letters/23.wav",
            id: 2
          },
          {
            letter: "פּ",
            sound: "audio/letters/24.wav",
            id: 24
          },
          {
            letter: "פ",
            sound: "audio/letters/25.wav",
            id: 25
          },
          {
            letter: "ף",
            sound: "audio/letters/26.wav",
            id: 26
          },
          {
            letter: "צ",
            sound: "audio/letters/27.wav",
            id: 27
          },
          {
            letter: "ץ",
            sound: "audio/letters/28.wav",
            id: 28
          },
          {
            letter: "ק",
            sound: "audio/letters/29.wav",
            id: 29
          },
          {
            letter: "ר",
            sound: "audio/letters/30.wav",
            id: 30
          },

          {
            letter: "שׁ",
            sound: "audio/letters/31.wav",
            id: 31
          },
          {
            letter: "שֹ",
            sound: "audio/letters/32.wav",
            id: 32
          },
          {
            letter: "תּ",
            sound: "audio/letters/33.wav",
            id: 33
          },
          {
            letter: "ת",
            sound: "audio/letters/34.wav",
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