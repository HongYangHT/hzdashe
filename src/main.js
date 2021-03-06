// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-default/index.css'
import '@/assets/css/common.css'
import '@/assets/js/snow'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
