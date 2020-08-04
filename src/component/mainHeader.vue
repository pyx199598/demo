<template>
  <div class="header">
    <div class="head_box">
      <div class="head_box_time">
        <span class="el-icon-date"></span>
        {{ currentTime}}
      </div>
      <div>
        <input type="text" placeholder="标题/关键字" />
        <span></span>
      </div>
    </div>
    <div class="head_nav">
      <!-- element UI的菜单栏自带跳转方法  写在el-menu里面 -->
      <!-- :default-active="activeIndex" @select="handleSelect" router  -->
      <el-menu
        mode="horizontal"
        background-color="#d7e6ff"
        text-color="#003689"
        active-text-color="#fff"
      >
        <el-menu-item
          v-for="(item,index) in menu_arr"
          :key="index"
          :index="item.id"
          @click="chgMenu(item.id)"
        >
          {{item.name}}
          <!-- <router-link :to="{name:item.id}">{{item.name}}</router-link> -->
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentTime: new Date(), // 获取当前时间
        weeks: [
          '星期日',
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六',
        ],
        menu_arr: [
          { name: '首页', id: 'home' },
          { name: '关于我们', id: 'aboutUs' },
          { name: '投稿须知', id: 'contributeNeedKnow' },
          { name: '本刊动态', id: 'newspaperTrends' },
          { name: '行业资讯', id: 'news' },
          { name: '在线阅读', id: 'webread' },
          { name: '在线投稿', id: 'webContribute' },
          { name: '高考专刊', id: 'ceeMonograph' },
          { name: '意见反馈', id: 'feedback' },
        ],
      }
    },
    created() {
      var _this = this //声明一个变量指向Vue实例this，保证作用域一致
      setInterval(function () {
        var week = (_this.currentTime = //修改数据date
          new Date().getFullYear() +
          '-' +
          (new Date().getMonth() + 1) +
          '-' +
          new Date().getDate() +
          ' ' +
          new Date().getHours() +
          ':' +
          new Date().getMinutes() +
          ': ' +
          new Date().getSeconds() +
          ' ' +
          _this.weeks[new Date().getDay()])
      }, 1000)
    },
    methods: {
      chgMenu(id) {
        //点击导航栏里的标题，vue-router就会将参数传到name为id的组件里。
        this.$router.push({
          name: id,
          params: {
            id: id,
          },
        })
      },
    },
  }
</script>

<style scoped>
  .header {
    background: url('../assets/images/head_bling.png') no-repeat top center;
    height: 240px !important;
  }
  .head_box {
    float: right;
    padding-top: 80px;
    width: 320px;
    color: #ffffff;
    font-family: Arial, 'Microsoft Yahei', 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 16px;
  }
  input {
    height: 30px;
    text-indent: 13px;
    font-size: 12px;
    width: 268px;
    border: none;
    border-radius: 0.8em;
    background: #ffffff;
  }
  .head_box_time {
    padding-bottom: 20px;
  }
  .head_nav {
    padding-top: 180px;
  }
  .el-menu-item {
    text-align: center;
    font-size: 16px;
    width: 11%;
  }
  .el-menu-item:hover {
    border-bottom: none !important;
    background: url('../assets/images/nav_hoverimg.png') center no-repeat !important;
  }
  .el-menu-item.is-active {
    border-bottom: none !important;
    background: url('../assets/images/nav_actimg.png') center no-repeat !important;
  }
</style>