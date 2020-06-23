<template>
  <div class="row row-home">
    <div class="col">
      <div class="row">
        <div class="col center logos">
          <img src="@/assets/logos.png" alt="">
        </div>
      </div>
      <div class="row mt-md-4 mt-2">
        <div class="col center">
          <h1>אַלַף-בֵּי</h1>
        </div>
      </div>
      <div class="row">
        <div class="col center mt-md-5 mt-2">
          <h2>המרכז למורשת הרמב"ם ועדות ישראל</h2>
          <h2> שמחים להציג:</h2>
        </div>
      </div>
      <div class="row">
        <div class="col center mt-2">
          <h2>לימוד שמות האותיות לפי נוסח תימן</h2>
        </div>
      </div>
      <div class="row center mt-md-5 mt-2">
        <!-- <div class="col "> -->
          <router-link :to="item.link" class="box-butt p-3 col-md-7 m-md-3  m-1" v-for="item in mainCategory" :key="item.id">
            {{item.name}}
          </router-link>
        </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      // HelloWorld
    },
    data() {
      return {
        mainCategory: [{
            name: "לימוד שמות האותיות",
            link: "/learnLetters",
            id: 1
          },
          {
            name: "לימוד שמות הנקודות",
            link: "/learnSounds",
            id: 2
          },
          {
            name: "לימוד הגיית האותיות והנקודות",
            link: "/learnLettersAndSounds",
            id: 3
          },
          {
            name: "שינון פסוקים",
            link: "/readingPart",
            id: 4
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .row-home {
    position: relative;
    text-align: center;
  }

  .row-home::after {
    content: "";
    background-image: url('https://storage.needpix.com/rsynced_images/ornamental-1327925_1280.png');
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
  }

  .row-home .logos img {
width: 20%;
  }

  .row-home h1 {
    font-size: 100px;
    font-family: 'shofarregular';
  }

   .row-home h2 {
    font-weight: 800;
  }

  .box-butt {
    background-color: #f25f51d1;
    color: #fff;
    font-size: 30px;
    border-radius: 8px;
    font-weight: 400;
  }

  @media (max-width: 767.98px) {
    .row-home .logos img {
width: 50%;
  }
   .row-home h1 {
    font-size: 60px;
  }

   .row-home h2 {
    font-size: 18px;
  }

  .box-butt {
    font-size: 18px;
  }
  
  }
</style>