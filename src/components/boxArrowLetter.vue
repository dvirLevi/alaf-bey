<template>
  <div class="w-100 center wrap-box">
    <div class="box-arrow" v-if="boxOf !== 'test'">
      <i class="fas fa-chevron-right c-p" @click.stop="changeIndex('-')"></i>
    </div>
    <boxLetter v-if="boxOf === 'letter'" :correntLetter="correntLetter" :playList="playList" :key="correntLetter.id"
      @clickNextLetter="changeIndex('+')" @autoNextLetter="changeIndex('+')" />
    <boxTest v-if="boxOf === 'test'" :correntLetter="correntLetter" :playList="playList" :key="correntLetter.id"
      @clickNextLetter="changeIndex('+')" @autoNextLetter="changeIndex('+')" />
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
        index: 0
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
  .wrap-box {
    height: 60vh;
  }

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