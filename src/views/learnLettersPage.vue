<template>
  <div class="row">
    <div class="col">
      <boxArrowLetter :letterAndSound="letterAndSound" />
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
        letterAndSound: [{
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