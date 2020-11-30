import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'
import Navigator from 'nativescript-vue-navigator'
// import FontIcon from 'nativescript-vue-fonticon'

import './app.scss'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

import store from './store'
import {routes} from './routes'

Vue.use(Navigator, { routes });

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

// Vue.use(FontIcon, {
//   componentName: 'FIcon', // <-- Optional. Will be the name for component icon.
//   debug: true, // <-- Optional. Will output the css mapping to console.
//   paths: {
//     fa: './assets/css/fontawesome.css'
//   }
// });

new Vue({
  store,
  render: h => h('Navigator', {
    attrs : {
      defaultRoute : store.getters.isAuth ? '/home' : '/login'
    } 
  })
}).$start()
