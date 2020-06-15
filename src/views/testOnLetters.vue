<template>
  <div class="row">
    <div class="col">
      <boxArrowLetter :letterAndSound="letterAndSound" boxOf="test" />
      <!-- <div class="row center">
           <ButtonLink text="" @customEvent="playList = !playList" selectRouteColor="#ee9b36e6" link="" backColor="#ffae4db8" backColorHov="#ffae4dd9" class="center col-md-3 col-8 h5 p-2 w-50" >
             {{playList? 'עצור': 'השמעה ברצף'}}<i class="m-2" :class="playList? 'fas fa-stop': 'fas fa-play'"></i>
           </ButtonLink>
      </div> -->
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import boxArrowLetter from '@/components/boxArrowLetter.vue'

  export default {
    name: 'testOnLetters',
    components: {
      boxArrowLetter
    },
    data() {
      return {
        // playList: false,
        letterAndSound: [
          {
            sound: "audio/letters/1.wav",
            answers: [
              {
                letter: "א",
                ifCorrect: true
              },
              {
                letter: "צ",
                ifCorrect: false
              },
              {
                letter: "ט",
                ifCorrect: false
              },
            ],
            id: 1
          },
          {
            sound: "audio/letters/2.wav",
            answers: [
              {
                letter: "בּ",
                ifCorrect: true
              },
              {
                letter: "מ",
                ifCorrect: false
              },
              {
                letter: "כּ",
                ifCorrect: false
              },
            ],
            id: 2
          },
          {
            sound: "audio/letters/3.wav",
            answers: [
              {
                letter: "ב",
                ifCorrect: true
              },
              {
                letter: "ח",
                ifCorrect: false
              },
              {
                letter: "ד",
                ifCorrect: false
              },
            ],
            id: 3
          },
          {
            sound: "audio/letters/4.wav",
            answers: [
              {
                letter: "גּ",
                ifCorrect: true
              },
              {
                letter: "ע",
                ifCorrect: false
              },
              {
                letter: "ט",
                ifCorrect: false
              },
            ],
            id: 4
          },
          {
            sound: "audio/letters/5.wav",
            answers: [
              {
                letter: "ג",
                ifCorrect: true
              },
              {
                letter: "ש",
                ifCorrect: false
              },
              {
                letter: "ץ",
                ifCorrect: false
              },
            ],
            id: 5
          },
          {
            sound: "audio/letters/6.wav",
            answers: [
              {
                letter: "דּ",
                ifCorrect: true
              },
              {
                letter: "ה",
                ifCorrect: false
              },
              {
                letter: "ר",
                ifCorrect: false
              },
            ],
            id: 6
          },
          {
            sound: "audio/letters/7.wav",
            answers: [
              {
                letter: "ד",
                ifCorrect: true
              },
              {
                letter: "ז",
                ifCorrect: false
              },
              {
                letter: "ו",
                ifCorrect: false
              },
            ],
            id: 7
          },
          {
            sound: "audio/letters/8.wav",
            answers: [
              {
                letter: "ה",
                ifCorrect: true
              },
              {
                letter: "ח",
                ifCorrect: false
              },
              {
                letter: "ק",
                ifCorrect: false
              },
            ],
            id: 8
          },
          {
            sound: "audio/letters/9.wav",
            answers: [
              {
                letter: "ו",
                ifCorrect: true
              },
              {
                letter: "ר",
                ifCorrect: false
              },
              {
                letter: "ז",
                ifCorrect: false
              },
            ],
            id: 9
          },
          {
            sound: "audio/letters/10.wav",
            answers: [
              {
                letter: "ז",
                ifCorrect: true
              },
              {
                letter: "ן",
                ifCorrect: false
              },
              {
                letter: "ג",
                ifCorrect: false
              },
            ],
            id: 10
          },
          {
            sound: "audio/letters/11.wav",
            answers: [
              {
                letter: "ח",
                ifCorrect: true
              },
              {
                letter: "ה",
                ifCorrect: false
              },
              {
                letter: "ק",
                ifCorrect: false
              },
            ],
            id: 11
          },
          {
            sound: "audio/letters/12.wav",
            answers: [
              {
                letter: "ט",
                ifCorrect: true
              },
              {
                letter: "צ",
                ifCorrect: false
              },
              {
                letter: "פ",
                ifCorrect: false
              },
            ],
            id: 12
          },
          {
            sound: "audio/letters/13.wav",
             answers: [
              {
                letter: "י",
                ifCorrect: true
              },
              {
                letter: "ו",
                ifCorrect: false
              },
              {
                letter: "א",
                ifCorrect: false
              },
            ],
            id: 13
          },
          {
            sound: "audio/letters/14.wav",
            answers: [
              {
                letter: "כּ",
                ifCorrect: true
              },
              {
                letter: "ק",
                ifCorrect: false
              },
              {
                letter: "ח",
                ifCorrect: false
              },
            ],
            id: 14
          },
          {
            sound: "audio/letters/15.wav",
            answers: [
              {
                letter: "כ",
                ifCorrect: true
              },
              {
                letter: "ח",
                ifCorrect: false
              },
              {
                letter: "מ",
                ifCorrect: false
              },
            ],
            id: 15
          },
           {
            sound: "audio/letters/16.wav",
            answers: [
              {
                letter: "ך",
                ifCorrect: true
              },
              {
                letter: "ק",
                ifCorrect: false
              },
              {
                letter: "ץ",
                ifCorrect: false
              },
            ],
            id: 16
          },
          {
            sound: "audio/letters/17.wav",
            answers: [
              {
                letter: "ל",
                ifCorrect: true
              },
              {
                letter: "צ",
                ifCorrect: false
              },
              {
                letter: "ט",
                ifCorrect: false
              },
            ],
            id: 17
          },
          {
            sound: "audio/letters/18.wav",
            answers: [
              {
                letter: "מ",
                ifCorrect: true
              },
              {
                letter: "ם",
                ifCorrect: false
              },
              {
                letter: "ט",
                ifCorrect: false
              },
            ],
            id: 18
          },
           {
            sound: "audio/letters/19.wav",
            answers: [
              {
                letter: "ם",
                ifCorrect: true
              },
              {
                letter: "מ",
                ifCorrect: false
              },
              {
                letter: "ס",
                ifCorrect: false
              },
            ],
            id: 19
          },
          {
            sound: "audio/letters/20.wav",
            answers: [
              {
                letter: "נ",
                ifCorrect: true
              },
              {
                letter: "ו",
                ifCorrect: false
              },
              {
                letter: "ג",
                ifCorrect: false
              },
            ],
            id: 20
          },
          {
            sound: "audio/letters/21.wav",
            answers: [
              {
                letter: "ן",
                ifCorrect: true
              },
              {
                letter: "ו",
                ifCorrect: false
              },
              {
                letter: "ך",
                ifCorrect: false
              },
            ],
            id: 21
          },
           {
            sound: "audio/letters/22.wav",
            answers: [
              {
                letter: "ס",
                ifCorrect: true
              },
              {
                letter: "ם",
                ifCorrect: false
              },
              {
                letter: "ת",
                ifCorrect: false
              },
            ],
            id: 22
          },
          {
            sound: "audio/letters/23.wav",
            answers: [
              {
                letter: "ע",
                ifCorrect: true
              },
              {
                letter: "א",
                ifCorrect: false
              },
              {
                letter: "צ",
                ifCorrect: false
              },
            ],
            id: 2
          },
          {
            sound: "audio/letters/24.wav",
            answers: [
              {
                letter: "פּ",
                ifCorrect: true
              },
              {
                letter: "ט",
                ifCorrect: false
              },
              {
                letter: "ף",
                ifCorrect: false
              },
            ],
            id: 24
          },
           {
            sound: "audio/letters/25.wav",
            answers: [
              {
                letter: "פ",
                ifCorrect: true
              },
              {
                letter: "כ",
                ifCorrect: false
              },
              {
                letter: "א",
                ifCorrect: false
              },
            ],
            id: 25
          },
          {
            sound: "audio/letters/26.wav",
            answers: [
              {
                letter: "ף",
                ifCorrect: true
              },
              {
                letter: "ך",
                ifCorrect: false
              },
              {
                letter: "ץ",
                ifCorrect: false
              },
            ],
            id: 26
          },
          {
            sound: "audio/letters/27.wav",
            answers: [
              {
                letter: "צ",
                ifCorrect: true
              },
              {
                letter: "ט",
                ifCorrect: false
              },
              {
                letter: "ץ",
                ifCorrect: false
              },
            ],
            id: 27
          },
           {
            sound: "audio/letters/28.wav",
            answers: [
              {
                letter: "צ",
                ifCorrect: true
              },
              {
                letter: "צ",
                ifCorrect: false
              },
              {
                letter: "ק",
                ifCorrect: false
              },
            ],
            id: 28
          },
          {
            sound: "audio/letters/29.wav",
            answers: [
              {
                letter: "ק",
                ifCorrect: true
              },
              {
                letter: "ה",
                ifCorrect: false
              },
              {
                letter: "ץ",
                ifCorrect: false
              },
            ],
            id: 29
          },
          {
            sound: "audio/letters/30.wav",
            answers: [
              {
                letter: "ר",
                ifCorrect: true
              },
              {
                letter: "ד",
                ifCorrect: false
              },
              {
                letter: "ה",
                ifCorrect: false
              },
            ],
            id: 30
          },

           {
            sound: "audio/letters/31.wav",
            answers: [
              {
                letter: "שׁ",
                ifCorrect: true
              },
              {
                letter: "צ",
                ifCorrect: false
              },
              {
                letter: "א",
                ifCorrect: false
              },
            ],
            id: 31
          },
          {
            sound: "audio/letters/32.wav",
            answers: [
              {
                letter: "שֹ",
                ifCorrect: true
              },
              {
                letter: "ס",
                ifCorrect: false
              },
              {
                letter: "צ",
                ifCorrect: false
              },
            ],
            id: 32
          },
          {
            sound: "audio/letters/33.wav",
            answers: [
              {
                letter: "תּ",
                ifCorrect: true
              },
              {
                letter: "ת",
                ifCorrect: false
              },
              {
                letter: "ט",
                ifCorrect: false
              },
            ],
            id: 33
          },
          {
            sound: "audio/letters/34.wav",
            answers: [
              {
                letter: "ת",
                ifCorrect: true
              },
              {
                letter: "תּ",
                ifCorrect: false
              },
              {
                letter: "ח",
                ifCorrect: false
              },
            ],
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