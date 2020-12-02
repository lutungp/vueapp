import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import sideDrawer from './modules/sideDrawer.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sideDrawer
  },
  
  state: {
    username : "",
    isAuth : false
  },

  getters : {
    isAuth (state) {
      return state.isAuth;
    },

    user (state) {
      var data = {
        username : state.username
      };

      return data;
    }
  },

  mutations: {
    save(state, data) {
        state.username = data.username;
        state.isAuth = true;
    }
  },
  actions: {

  }
});
