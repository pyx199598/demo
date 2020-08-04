<template>
  <el-footer>
    <div class="foo_link">
      <span>友情链接</span>
      <a
        :href="item.adds"
        v-for="(item,index) in foot_nav"
        :key="index"
        target="_blank"
      >{{item.title}}</a>
    </div>
    <div class="foo_id">
      <span>许可证号：</span>
      <a href="http://www.beian.miit.gov.cn/" target="_blank">湘ICP备16011742号-2</a>
    </div>
  </el-footer>
</template>

<script>
  export default {
    data() {
      return {
        foot_nav: [
          { title: '教育部', adds: 'http://www.moe.gov.cn/' },
          {
            title: '教育部基础教育质量监测中心',
            adds: 'http://www.eachina.org.cn/',
          },
          { title: '国家教育发展研究中心', adds: 'http://www.ncedr.edu.cn/' },
          { title: '中国教育考试网', adds: 'http://www.neea.edu.cn/' },
          { title: '中国教育新闻网', adds: 'http://www.jyb.cn/' },
          { title: '湖南省教育厅', adds: 'http://jyt.hunan.gov.cn/' },
          { title: '湖南省教育考试院', adds: 'http://www.hneao.edu.cn/' },
        ],
      }
    },
  }
</script>

<style scoped>
  .el-footer {
    height: 130px !important;
    padding: 0 !important;
    font-family: Arial, 'Microsoft Yahei', 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 14px;
  }
  .foo_link {
    height: 96px;
    line-height: 96px;
    text-align: center;
    background-color: #003689;
    color: #fff;
  }
  .foo_id {
    height: 34px;
    line-height: 34px;
    text-align: center;
    background-color: #001b46;
    color: #fff;
  }
  .foo_link >>> a {
    text-decoration: none;
    padding-left: 30px;
    color: #fff;
  }
  .foo_id >>> a {
    text-decoration: none;
    color: #25a4bb;
  }
</style> 