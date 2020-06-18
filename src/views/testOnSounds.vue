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
    name: 'testOnSounds',
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
                letter: "&#1464",
                ifCorrect: true
              },
              {
                letter: "&#1458",
                ifCorrect: false
              },
              {
                letter: "&#1462",
                ifCorrect: false
              },
            ],
            id: 1
          },
          {
            sound: "audio/letters/2.wav",
            answers: [
              {
                letter: "&#1459",
                ifCorrect: true
              },
              {
                letter: "&#1462",
                ifCorrect: false
              },
              {
                letter: "&#1458",
                ifCorrect: false
              },
            ],
            id: 2
          },
          {
            sound: "audio/letters/3.wav",
            answers: [
              {
                letter: "&#1463",
                ifCorrect: true
              },
              {
                letter: "&#1464",
                ifCorrect: false
              },
              {
                letter: "&#1462",
                ifCorrect: false
              },
            ],
            id: 3
          },
          {
            sound: "audio/letters/4.wav",
            answers: [
              {
                letter: "&#1458",
                ifCorrect: true
              },
              {
                letter: "&#1457",
                ifCorrect: false
              },
              {
                letter: "&#1461",
                ifCorrect: false
              },
            ],
            id: 4
          },
          {
            sound: "audio/letters/5.wav",
            answers: [
              {
                letter: "&#1462",
                ifCorrect: true
              },
              {
                letter: "&#1460",
                ifCorrect: false
              },
              {
                letter: "&#1461",
                ifCorrect: false
              },
            ],
            id: 5
          },
          {
            sound: "audio/letters/6.wav",
            answers: [
              {
                letter: "&#1457",
                ifCorrect: true
              },
              {
                letter: "&#1460",
                ifCorrect: false
              },
              {
                letter: "&#1463",
                ifCorrect: false
              },
            ],
            id: 6
          },
          {
            sound: "audio/letters/7.wav",
            answers: [
              {
                letter: "&#1461",
                ifCorrect: true
              },
              {
                letter: "&#1462",
                ifCorrect: false
              },
              {
                letter: "&#1456",
                ifCorrect: false
              },
            ],
            id: 7
          },
          {
            sound: "audio/letters/8.wav",
            answers: [
              {
                letter: "&#1460",
                ifCorrect: true
              },
              {
                letter: "&#1456",
                ifCorrect: false
              },
              {
                letter: "&#1458",
                ifCorrect: false
              },
            ],
            id: 8
          },
          {
            sound: "audio/letters/9.wav",
            answers: [
              {
                letter: "&#1467",
                ifCorrect: true
              },
              {
                letter: "&#1456",
                ifCorrect: false
              },
              {
                letter: "&#1458",
                ifCorrect: false
              },
            ],
            id: 9
          },
          {
            sound: "audio/letters/10.wav",
            answers: [
              {
                letter: "&#1456",
                ifCorrect: true
              },
              {
                letter: "&#1461",
                ifCorrect: false
              },
              {
                letter: "&#1457",
                ifCorrect: false
              },
            ],
            id: 10
          },
          {
            sound: "audio/letters/11.wav",
            answers: [
              {
                letter: "וֹ",
                ifCorrect: true
              },
              {
                letter: "&#1467",
                ifCorrect: false
              },
              {
                letter: "וּ",
                ifCorrect: false
              },
            ],
            id: 11
          },
          {
            sound: "audio/letters/12.wav",
            answers: [
              {
                letter: "וּ",
                ifCorrect: true
              },
              {
                letter: "&#1457",
                ifCorrect: false
              },
              {
                letter: "&#1467",
                ifCorrect: false
              },
            ],
            id: 12
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