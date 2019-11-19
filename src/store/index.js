import Vue from 'vue'
import Vuex from 'vuex'
import component from './component'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    component
  }
})
