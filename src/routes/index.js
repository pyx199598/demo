import Vue from 'vue'
import VueRouter from 'vue-router' //导入路由
Vue.use(VueRouter); //安装
import config from './config.js'
var router = new VueRouter({
    ...config
})
export default router;