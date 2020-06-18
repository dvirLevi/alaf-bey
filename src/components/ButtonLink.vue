<template>
  <div class="my-button c-p" @click.stop="$emit('customEvent')" @mouseover="hovColor" @mouseout="outHovColor"
    :style="{backgroundColor: selectRoute}">
    <router-link v-if="link" class="" tag="button" :to="link" :style="{color: textColor}"><slot></slot>{{text}}</router-link>
    <button :type="type" :form="formId" class="" v-else :style="{color: textColor}"><slot></slot>{{text}}</button>
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
        default: '#f25f51'
      },
      backColorHov: {
        type: String,
        default: '#ee4535'
      },
      textColor: {
        type: String,
        default: '#fff'
      },
      selectRouteColor: {
        type: String,
        default: '#ee4535'
      },
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
    box-shadow: 1px 1px 10px #00000029;
  }

  button {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0);
    padding: 10px 20px;
  }


  @media (max-width: 767.98px) {
    button {
    padding: 5px 10px;
  }
  }
</style>