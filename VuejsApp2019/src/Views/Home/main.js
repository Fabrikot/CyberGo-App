import Vue from 'vue';
import App from '@/Views/Home/Dashboard.vue';

Vue.config.productionTip = true;

new Vue({
    render: h => h(App)
}).$mount('#app');
