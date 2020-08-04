<template>
  <el-container>
    <el-header>
      <el-carousel height="300px">
        <el-carousel-item v-for="(item,index) in img_arr" :key="index">
          <el-image :src="item" alt="item" />
        </el-carousel-item>
      </el-carousel>
    </el-header>
  </el-container>
</template>

<script>
  import img1 from '../assets/images/img_1.jpg'
  import img2 from '../assets/images/img_2.jpg'

  export default {
    data() {
      return {
        img_arr: [img1, img2],
      }
    },
  }
</script>

<style>
</style>