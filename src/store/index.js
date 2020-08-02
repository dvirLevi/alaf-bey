import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [{
      name: "לימוד שמות האותיות",
      link: "/learnLetters",
      category: 1,
      id: 1
    },
    {
      name: "משחק חזרה על שמות האותיות",
      link: "/testOnLetters",
      category: 1,
      id: 12
    },
    {
      name: "לימוד שמות הנקודות",
      link: "/learnSounds",
      category: 2,
      id: 2
    },
    {
      name: "משחק חזרה על שמות הנקודות",
      link: "/testOnSounds",
      category: 2,
      id: 22
    },
    {
      name: "לימוד הגיית האותיות והנקודות",
      link: "/learnLettersAndSounds",
      category: 3,
      id: 3
    },
    // {
    //   name: "משחק חזרה על האותיות והנקודות",
    //   link: "/asd",
    //   category: 3,
    //   id: 33
    // },
    {
      name: "שינון פסוקים",
      link: "/readingPart",
      category: 0,
      id: 4
    },
    {
      name: "משחק ללימוד שמות האותיות",
      link: "/games/bubble",
      category: 0,
      id: 5
    },
    {
      name: "אודות",
      link: "/about",
      category: 0,
      id: 6
    },
  ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
