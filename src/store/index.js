import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [{
      name: "לימוד שמות האותיות",
      link: "/asd",
      id: 1
    },
    {
      name: "חזרה על שמות האותיות",
      link: "/asd",
      id: 12
    },
    {
      name: "לימוד שמות הנקודות",
      link: "/asd",
      id: 2
    },
    {
      name: "חזרה על שמות הנקודות",
      link: "/asd",
      id: 22
    },
    {
      name: "לימוד הגיית האותיות והנקודות",
      link: "/asd",
      id: 3
    },
    {
      name: "שינון פסוקים",
      link: "/asd",
      id: 4
    },
    {
      name: "אודות",
      link: "/asd",
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
