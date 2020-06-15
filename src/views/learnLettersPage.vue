<template>
  <div class="row">
    <div class="col">
      <boxArrowLetter :letterAndSound="letterAndSound" :playList="playList" />
      <div class="row center">
        <!-- <div class="col center"> -->
           <ButtonLink text="" @customEvent="playList = !playList" selectRouteColor="#ee9b36e6" link="" backColor="#ffae4db8" backColorHov="#ffae4dd9" class="center col-md-3 col-8 h5 p-2 w-50" >
             {{playList? 'עצור': 'השמעה ברצף'}}<i class="m-2" :class="playList? 'fas fa-stop': 'fas fa-play'"></i>
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
        letterAndSound: [
          {
            letter: "א",
            sound: "audio/1.wav",
            id: 1
          },
          {
            letter: "בּ",
            sound: "audio/2.wav",
            id: 2
          },
          {
            letter: "ב",
            sound: "audio/3.wav",
            id: 3
          },
          {
            letter: "גּ",
            sound: "audio/4.wav",
            id: 4
          },
          {
            letter: "ג",
            sound: "audio/5.wav",
            id: 5
          },
          {
            letter: "דּ",
            sound: "audio/6.wav",
            id: 6
          },
          {
            letter: "ד",
            sound: "audio/7.wav",
            id: 7
          },
          {
            letter: "ה",
            sound: "audio/8.wav",
            id: 8
          },
          {
            letter: "ו",
            sound: "audio/9.wav",
            id: 9
          },
          {
            letter: "ז",
            sound: "audio/10.wav",
            id: 10
          },
          {
            letter: "ח",
            sound: "audio/11.wav",
            id: 11
          },
          {
            letter: "ט",
            sound: "audio/12.wav",
            id: 12
          },
          {
            letter: "י",
            sound: "audio/13.wav",
            id: 13
          },
          {
            letter: "כּ",
            sound: "audio/14.wav",
            id: 14
          },
          {
            letter: "כ",
            sound: "audio/15.wav",
            id: 15
          },
           {
            letter: "ך",
            sound: "audio/16.wav",
            id: 16
          },
          {
            letter: "ל",
            sound: "audio/17.wav",
            id: 17
          },
          {
            letter: "מ",
            sound: "audio/18.wav",
            id: 18
          },
           {
            letter: "ם",
            sound: "audio/19.wav",
            id: 19
          },
          {
            letter: "נ",
            sound: "audio/20.wav",
            id: 20
          },
          {
            letter: "ן",
            sound: "audio/21.wav",
            id: 21
          },
           {
            letter: "ס",
            sound: "audio/22.wav",
            id: 22
          },
          {
            letter: "ע",
            sound: "audio/23.wav",
            id: 2
          },
          {
            letter: "פּ",
            sound: "audio/24.wav",
            id: 24
          },
           {
            letter: "פ",
            sound: "audio/25.wav",
            id: 25
          },
          {
            letter: "ף",
            sound: "audio/26.wav",
            id: 26
          },
          {
            letter: "צ",
            sound: "audio/27.wav",
            id: 27
          },
           {
            letter: "ץ",
            sound: "audio/28.wav",
            id: 28
          },
          {
            letter: "ק",
            sound: "audio/29.wav",
            id: 29
          },
          {
            letter: "ר",
            sound: "audio/30.wav",
            id: 30
          },

           {
            letter: "שׁ",
            sound: "audio/31.wav",
            id: 31
          },
          {
            letter: "שֹ",
            sound: "audio/32.wav",
            id: 32
          },
          {
            letter: "תּ",
            sound: "audio/33.wav",
            id: 33
          },
          {
            letter: "ת",
            sound: "audio/34.wav",
            id: 34
          },
        ]
      }
    },

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