import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import WebcomponentsPlugin from 'vue-webcomponents-plugin';
import SubscriptionsPlugin from 'vuex-subscriptions-plugin';
import WcInput from '@/web-components/wc-input';

Vue.config.productionTip = false;
Vue.use(WebcomponentsPlugin);
Vue.use(SubscriptionsPlugin);
Vue.webComponent('linear-input', WcInput);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
