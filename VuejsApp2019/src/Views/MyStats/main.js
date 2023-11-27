import Vue from 'vue';
import App from '@/Views/MyStats/MyStats.vue';
import VueGraph from 'vue-graph';

Vue.use(VueGraph)

new Vue({
    render: h => h(App),
    el: "#app", 
    data: {
        names: ["MS", "Apple", "Google"],
        values: [
            [0, 15, 8, 18],
            [15, 6, 10, 5],
            [20, 20, 20, 20]
        ]
    }
}).$mount('#app');
