<template>
  <el-container>
    <el-header>
      <banner></banner>
    </el-header>

    <el-row :gutter="15" class="main_cont">
      <el-col :span="18">
        <bookList :books="books1"></bookList>
        <bookList :books="books2"></bookList>
      </el-col>
      <el-col :span="6">
        <right-side></right-side>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
  import { getBooksList } from '../services/bookServices.js'
  import banner from '../component/Banner.vue'
  import bookList from '../component/bookList.vue'
  import rightSide from '../component/rightSide.vue'

  export default {
    components: {
      banner,
      bookList,
      rightSide,
    },
    data() {
      return {
        books1: [],
        books2: [],
      }
    },
    async created() {
      var res = await getBooksList('/api/articles/getContentByParentChannelId', {
        channelId: 'CHANNELI_1810111034260000',
        currentPage: 1,
        pageSize: 4,
      })
      this.books1 = res

      var res = await getBooksList('/api/articles/mobile', {
        channelId: 'CHANNELI_1810111407350005',
        currentPage: 1,
        pageSize: 12,
      })
      this.books2 = res
    },
  }
</script>

<style scoped>
  .main_cont .a_box:last-child {
    margin-top: 15px;
  }
</style>