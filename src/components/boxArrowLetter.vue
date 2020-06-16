<template>
  <div class="w-100 center wrap-box">
    <template v-if="boxOf === 'test'">
      <div class="w-100 center score h1 m-0 mt-md-5 mt-3 text-bold">
        שלב: {{level}}
      </div>
      <div class="w-100 center score h3 m-0 mt-3 text-bold">
        ניקוד: {{score}}
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
         <ButtonLink text="שחק שוב" selectRouteColor="#ee9b36e6" link="" @customEvent="playAgain" backColor="#ffae4db8" backColorHov="#ffae4dd9" class="center m-1" />
      </div>
      <div v-else-if="rejectionScore <= 0" class="center">
        <h4 class="text-center w-100 mt-5">הניקוד שלך הוא {{score}}.</h4>
        <h4 class="text-center w-100">לא נורא נסה לשחק שוב</h4>
         <ButtonLink text="שחק שוב" selectRouteColor="#ee9b36e6" link="" @customEvent="playAgain" backColor="#ffae4db8" backColorHov="#ffae4dd9" class="center m-1" />
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
        level: 1
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
          if (this.previousScore <= this.score) {
            this.speedOfTest = this.speedOfTest - 2000;
            this.previousScore = this.score + 50;
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
  }

  @media (max-width: 767.98px) {

    .box-arrow i {
      font-size: 45px;
    }
  }
</style>