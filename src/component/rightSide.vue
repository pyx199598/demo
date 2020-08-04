<template>
  <div>
    <div class="bg bg_one right_title">
      <i class="el-icon-tickets"></i>
      <span>本刊声明</span>
    </div>
    <div class="bg bg_two right_title">
      <i class="el-icon-tickets"></i>
      <span>重点选题</span>
    </div>
    <div class="bg bg_one">
      <i class="el-icon-tickets"></i>
      <span>投稿须知</span>
      <el-row :gutter="10" class="right_cont">
        <el-col :span="8">主要栏目</el-col>
        <el-col :span="8">投稿要求</el-col>
        <el-col :span="8">常见问题</el-col>
      </el-row>
    </div>
    <div class="bg bg_two">
      <i class="el-icon-tickets"></i>
      <span>往期回顾</span>
      <el-row :gutter="10" class="right_cont">
        <el-col :span="8">2020</el-col>
        <el-col :span="8">2019</el-col>
        <el-col :span="8">2018</el-col>
      </el-row>
      <el-row :gutter="10" class="right_cont">
        <el-col :span="8">2017</el-col>
        <el-col :span="8">2016</el-col>
        <el-col :span="8">2015</el-col>
      </el-row>
      <el-row type="flex" justify="end" class="right_cont">
        <el-col :span="8">更多>></el-col>
      </el-row>
    </div>
    <div class="bg bg_one">
      <i class="el-icon-tickets"></i>
      <span>往期回顾</span>
      <div
        class="right_cont"
      >凡向本刊投稿，即视为将作品的数字化处理权、网络传播权、无线增值业务权、电子发行权授予本刊，同意本刊将以上权利转授予与本刊合作的第三方使用。本刊支付的稿酬已包括上述使用方式的稿酬。</div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scope>
  .bg {
    padding: 20px 0;
    margin-bottom: 10px;
    text-align: center;
    color: white;
    font-size: 16px;
  }

  .right_title {
    padding: 30px 0 30px 0;
  }

  .bg_one {
    background-color: #847160;
  }
  .bg_two {
    background-color: #9f9fab;
  }
  .right_cont {
    text-align: left;
    font-size: 14px;
    line-height: 26px;
    padding: 10px 0 0 10px;
  }
</style>