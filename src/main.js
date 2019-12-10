import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueLazyload from 'vue-lazyload'
import Vant from 'vant'
import 'vant/lib/index.css';
import vueFeedback from 'vue-feedback'

Vue.use(vueFeedback)

Vue.config.productionTip = false

Vue.use(VueLazyload)
Vue.use(Vant)

new Vue({
    router,
    store: store,
    render: h => h(App),
}).$mount('#app')
