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
      name: "חזרה על שמות האותיות",
      link: "/asd",
      category: 1,
      id: 12
    },
    {
      name: "לימוד שמות הנקודות",
      link: "/asd",
      category: 2,
      id: 2
    },
    {
      name: "חזרה על שמות הנקודות",
      link: "/asd",
      category: 2,
      id: 22
    },
    {
      name: "לימוד הגיית האותיות והנקודות",
      link: "/asd",
      category: 0,
      id: 3
    },
    {
      name: "שינון פסוקים",
      link: "/asd",
      category: 0,
      id: 4
    },
    {
      name: "אודות",
      link: "/asd",
      category: 0,
      id: 5
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
