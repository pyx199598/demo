<template>
  <el-container>
    <el-header>
      <main-header></main-header>
    </el-header>
    <el-container class="main_cont">
      <el-aside class="left_cont">
        <left-side></left-side>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer class="no_pad">
      <main-footer></main-footer>
    </el-footer>
  </el-container>
</template>

<script>
  import mainHeader from './component/mainHeader.vue'
  import leftSide from './component/leftSide.vue'
  import mainFooter from './component/mainFooter.vue'
  export default {
    components: {
      mainHeader,
      leftSide,
      mainFooter,
    },
    methods: {},
  }
</script>

<style scoped>
  .no_pad {
    padding: 0px !important;
  }
</style>