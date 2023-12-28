import Vue from 'vue';
import App from '@/Views/CatStats/CategoriesStat.vue';
import VueGraph from 'vue-graph';

Vue.use(VueGraph)

new Vue({
    render: h => h(App),
    el: "#app", 
}).$mount('#app');
