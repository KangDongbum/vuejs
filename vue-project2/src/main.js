import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import mixins from './lib/mixins.js'
import store from './store.js'

const app = createApp(App)
//app.mixins(mixins); // 공통 mixin

/**
app.directive('msg', {
    mounted(el, bindings){
        alert(bindings.value);
    }
});
*/

app.use(store);

app.use(router)
app.mount('#app')
