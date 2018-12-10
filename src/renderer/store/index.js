import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/Auth.js' 
import test from './modules/test.js' 

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    test
  },
  
  strict: process.env.NODE_ENV !== 'production'
})
