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
            sound: "audio/name-of-sounds/1.mp3",
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
            sound: "audio/name-of-sounds/2.mp3",
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
            sound: "audio/name-of-sounds/3.mp3",
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
            sound: "audio/name-of-sounds/4.mp3",
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
            sound: "audio/name-of-sounds/5.mp3",
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
            sound: "audio/name-of-sounds/6.mp3",
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
            sound: "audio/name-of-sounds/7.mp3",
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
            sound: "audio/name-of-sounds/8.mp3",
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
            sound: "audio/name-of-sounds/9.mp3",
            answers: [
              {
                letter: "אִי",
                ifCorrect: true
              },
              {
                letter: "וֹ",
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
            sound: "audio/name-of-sounds/11.mp3",
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
            sound: "audio/name-of-sounds/12.mp3",
            answers: [
              {
                letter: "אוֹ",
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
            sound: "audio/name-of-sounds/13.mp3",
            answers: [
              {
                letter: "אֹ",
                ifCorrect: true
              },
              {
                letter: "&#1457",
                ifCorrect: false
              },
              {
                letter: "אוֹ",
                ifCorrect: false
              },
            ],
            id: 12
          },
           {
            sound: "audio/name-of-sounds/14.mp3",
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
                letter: "וֹ",
                ifCorrect: false
              },
            ],
            id: 13
          },
          {
            sound: "audio/name-of-sounds/15.mp3",
            answers: [
              {
                letter: "&#1467",
                ifCorrect: true
              },
              {
                letter: "וּ",
                ifCorrect: false
              },
              {
                letter: "וֹ",
                ifCorrect: false
              },
            ],
            id: 14
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