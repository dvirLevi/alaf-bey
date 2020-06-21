<template>
  <div class="row">
    <div class="col">
      <div class="row center">
        <div class="col-md-4">
          <!-- <p class="h3"> -->
          <parts v-for="(item, correntIndex) in letterAndSound" :item="item" :index="index" :correntIndex="correntIndex"
            :key="item.id" @customEvent="playSound" />
          <audio ref="sound"></audio>
          <!-- </p> -->
        </div>
      </div>
      <div class="row mt-4">
        <div class="col center">
          <ButtonLink text="" @customEvent="playList = !playList" link="" class="center col-md-1 col-3 h3 p-2 w-50">
            <i class="m-2" :class="playList? 'fas fa-stop': 'fas fa-play'"></i>
          </ButtonLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import parts from '@/components/parts.vue'
  import partsReading from '@/helpers/partsReading.js'
  // import {
  //   changeIndex
  // } from '@/mixins/changeIndex.js'

  export default {
    name: 'partsOfRead',
    components: {
      parts
    },
    props: {
      // item: Object,
      // letterAndSound: Array,
    },
    // mixins: [changeIndex],
    data() {
      return {
        index: 0,
        playList: false
      }
    },
    mounted() {
      this.playSound(0)
    },
    methods: {
      playSound(index) {
        this.index = index;
        this.$refs.sound.src = "../" + this.letterAndSound[index].sound
        this.$refs.sound.play();
        this.$refs.sound.onended = () => {
          if (this.playList) {
            if (this.letterAndSound.length - 1 === this.index) {
              this.playSound(0)
            } else {
              this.playSound(index + 1)
            }
          }
        }
      },

    },
    computed: {
      correntPart() {
        let arr = partsReading.filter((val) => {
          return val.id == this.$route.params.id
        })
        return arr[0]
      },
      letterAndSound() {
        return this.correntPart.partsOfRead
      }
    },
    watch: {
      playList: function () {
        if (this.playList) {
          this.playSound(this.index);
        } else {
          this.$refs.sound.pause();
        }
      }
    }
  }
</script>

<style scoped>
  @media (max-width: 767.98px) {}
</style>