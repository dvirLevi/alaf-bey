<template>
  <div class="w-100 center wrap-box">
    <template v-if="boxOf === 'test'">
      <div class="w-100 center h1 m-0 mt-md-5 mt-3 level">
        <i class="fas fa-star"></i> שלב: <span :class="{ 'level-num-animation': ifAnimationLevel }">{{level}}</span>
      </div>
      <div class="w-100 center h3 m-0 mt-1 score">
        <i class="fas fa-gem" :class="{ 'score-icon-animation': ifAnimatioScore }"></i> ניקוד: {{score}}
      </div>
    </template>
    <div class="box-arrow" v-if="boxOf !== 'test'">
      <i class="fas fa-chevron-right c-p" @click.stop="changeIndex('-')"></i>
    </div>
    <boxLetter v-if="boxOf === 'letter'" :correntLetter="correntLetter" :playList="playList" :key="correntLetter.id"
      @clickNextLetter="changeIndex('+')" @autoNextLetter="changeIndex('+')" />
    <template v-if="boxOf === 'test'">
      <div v-if="level === 10" class="center">
        <h4 class="text-center w-100 mt-5">הניקוד שלך הוא {{score}}</h4>
        <h4 class="text-center w-100">יופי! סיימת את המשחק בהצלחה</h4>
        <ButtonLink text="שחק שוב" link="" @customEvent="playAgain" class="center m-1" />
      </div>
      <div v-else-if="rejectionScore <= 0" class="center">
        <h4 class="text-center w-100 mt-5">הניקוד שלך הוא {{score}}.</h4>
        <h4 class="text-center w-100">לא נורא נסה לשחק שוב</h4>
        <ButtonLink text="שחק שוב" link="" @customEvent="playAgain" class="center m-1" />
      </div>
      <boxTest v-else class="mt-md-5 mt-4" :correntLetter="correntLetter" :playList="playList" :key="correntLetter.id"
        @clickNextLetter="changeIndex('+')" @incScore="incScore" :speedOfTest="speedOfTest" :level="level"
        :score="score" />
    </template>
    <div class="box-arrow" v-if="boxOf !== 'test'">
      <i class="fas fa-chevron-left c-p" @click.stop="changeIndex('+')"></i>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import boxLetter from '@/components/boxLetter.vue'
  import boxTest from '@/components/boxTest.vue'

  export default {
    name: 'Home',
    components: {
      boxLetter,
      boxTest
    },
    props: {
      letterAndSound: Array,
      playList: Boolean,
      boxOf: String
    },
    data() {
      return {
        index: 0,
        score: 0,
        rejectionScore: 5,
        speedOfTest: 20000,
        previousScore: 50,
        level: 1,
        ifAnimatioScore: false,
        ifAnimationLevel: false
      }
    },
    methods: {
      changeIndex(action) {
        if (this.index > 0) {
          if (action === '-') this.index--
          if (this.letterAndSound.length - 1 > this.index) {
            if (action === '+') this.index++
          } else {
            if (action === '+') this.index = 0
          }
        } else if (this.index === 0) {
          if (action === '+') this.index++;
          if (action === '-') this.index = this.letterAndSound.length - 1;
        }
      },
      incScore(ifInc) {
        if (ifInc) {
          this.score = this.score + 10;
          this.ifAnimatioScore = true
          setTimeout(()=>{
            this.ifAnimatioScore = false
          }, 1000)
          if (this.previousScore <= this.score) {
            this.speedOfTest = this.speedOfTest - 2000;
            this.previousScore = this.score + 50;
            this.ifAnimationLevel = true;
             setTimeout(()=>{
            this.ifAnimationLevel = false
          }, 1000)
            this.level++;
          }
        } else if (this.score) {
          this.score = this.score - 5;
          this.rejectionScore = this.score;
        }
      },
      playAgain() {
        this.index = 0;
        this.level = 1;
        this.rejectionScore = 5;
        this.score = 0
      }
    },
    computed: {
      correntLetter() {
        return this.letterAndSound[this.index]
      }
    }
  }
</script>

<style scoped>
  /* .wrap-box {
    height: 55vh;
  } */

  .box-arrow i {
    width: 10%;
    font-size: 80px;
    color: #f3990a;
  }

  .level {
    color: #45b41f;
    font-weight: bold;
    font-family: 'Varela Round';
  }

  .score {
    color: #f3990a;
    font-weight: bold;
    font-family: 'Varela Round';
  }



  .score i,
  .level i {
    font-size: 30px;
    margin: 10px;
  }

  .score-icon-animation {
    animation: score-icon 1s;
  }

  @keyframes score-icon {
    0% {
      transform: scale(1) rotate(0deg);
    }

     80% {
      transform: scale(1.3) rotate(10deg);
    }

    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  .level-num-animation {
    animation: level-num 1s;
  }

  @keyframes level-num {
    0% {
      transform: scale(1) ;
      opacity: 1;
    }

     99% {
      transform: scale(2);
      opacity: 0.2;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 767.98px) {

    .box-arrow i {
      font-size: 45px;
    }
  }
</style>