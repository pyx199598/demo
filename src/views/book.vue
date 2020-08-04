<template>
  <div class="a_box">
    <p>文章详情 ></p>
    <h3 class="book_title">{{book.title}}</h3>
    <div v-html="book.content"></div>
    <!-- 将内容html化  v-html -->
    <p></p>
  </div>
</template>

<script>
  import { getBook } from '../services/bookServices.js'
  export default {
    data() {
      return {
        id: '',
        channelId: '',
        book: '',
      }
    },
    async created() {
      // console.log(this.$route.params) 得到路由传来的数据
      this.id = this.$route.params.id
      this.channelId = this.$route.params.channelId
      //拿bookservices来获取书本详情
      var res = await getBook(this.channelId, this.id)
      this.book = res
    },
  }
</script>

<style scope>
  .book_title {
    line-height: 100px;
    text-align: center;
    font-size: 20px;
    color: #023489;
    font-weight: 800;
    border-bottom: dotted 1px #dadada;
  }
</style>