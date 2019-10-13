import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
