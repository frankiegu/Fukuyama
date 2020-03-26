import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueLazyload from 'vue-lazyload'
import Vant from 'vant'
import 'vant/lib/index.css';
import vueFeedback from 'vue-feedback'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(vueFeedback)

Vue.use(ViewUI);
Vue.use(VueLazyload)
Vue.use(Vant)

// import '@/network/mock'


new Vue({
    router,
    store: store,
    render: h => h(App),
}).$mount('#app')
Vue.config.productionTip = false
