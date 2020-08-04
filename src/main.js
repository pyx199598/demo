import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui' //导入element ui
import 'element-ui/lib/theme-chalk/index.css' //此时要单独引入elementUI的样式
Vue.use(ElementUI); //使用elementUI
import './assets/styles/test.css'
import router from './routes'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router, //配置路由对象到实例中
}).$mount('#app')