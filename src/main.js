// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Swipe, SwipeItem,NavBar,Icon, DropdownMenu, DropdownItem,Field,Cell,CellGroup  } from 'vant';

Vue.use(Swipe).use(SwipeItem).use(NavBar).use(Icon ).use(DropdownMenu).use(DropdownItem).use(Field).use(Cell).use(CellGroup);

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
