import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mix from "./mixin.js"
import store from './store.js';

const app = createApp(App);

app.directive("focus",{
    mounted(el){
        el.focus();
    }
});

app.use(store);

app.use(router);
app.mixin(mix);
app.mount("#app");

//createApp(App).use(router).mixin(mix).mount('#app')
