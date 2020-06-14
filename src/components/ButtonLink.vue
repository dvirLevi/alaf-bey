<template>
  <div class="my-button c-p" @click.stop="$emit('customEvent')" @mouseover="hovColor" @mouseout="outHovColor"
    :style="{backgroundColor: selectRoute}">
    <router-link v-if="link" class="" tag="button" :to="link" :style="{color: textColor}">{{text}}</router-link>
    <button :type="type" :form="formId" class="" v-else :style="{color: textColor}">{{text}}</button>
  </div>
</template>

<script>
  export default {
    name: 'ButtonLink',
    props: {
      link: String,
      text: String,
      formId: String,
      type: {
        type: String,
        default: 'submit'
      },
      backColor: {
        type: String,
        default: '#df262d'
      },
      backColorHov: {
        type: String,
        default: '#cc1a21'
      },
      textColor: {
        type: String,
        default: '#fff'
      },
      selectRouteColor: String
    },
    data() {
      return {
        dynamicbackColor: ""
      }
    },
    mounted() {
      this.dynamicbackColor = this.backColor
    },
    methods: {
      hovColor() {
        this.dynamicbackColor = this.backColorHov
      },
      outHovColor() {
        this.dynamicbackColor = this.backColor
      }
    },
    computed: {
      selectRoute() {
        if (this.link === this.$route.path && this.selectRouteColor) {
          return this.selectRouteColor
        }
        return this.dynamicbackColor
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .my-button {
    border-radius: 8px;
    font-weight: 400;
  }

  button {
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0);
  }


  @media (max-width: 767.98px) {}
</style>