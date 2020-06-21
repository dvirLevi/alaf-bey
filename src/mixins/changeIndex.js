
export const changeIndex = {
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
  }
}
