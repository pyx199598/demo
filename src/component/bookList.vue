<template>
  <div class="a_box">
    <div>
      <div class="left_title">
        <span>
          <!-- 判断是否为重点资讯 -->
          {{newchannelId == 'CHANNELI_1810121125220000' ? '行业资讯':'重点阅读'}}
          <b>HOT</b>
        </span>
        <router-link :to="{name:'news'}" style="float:right">更多>></router-link>
      </div>
      <div class="left_news" v-for="(item,index) in books" :key="index">
        <a @click="showBook(item.id,item.channelId)">{{item.title}}</a>
        <span>{{item.author}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      // 创建一个属性来接收父组件的传值
      books: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        newchannelId: this.books[0].channelId,
      }
    },
    created() {
      console.log(this.newchannelId)
      console.log(this.books)
    },

    methods: {
      //点击书本内容，vue-router就会将参数传到name为book的组件里。
      showBook(id, channelId) {
        // console.log(id, channelId)
        this.$router.push({
          name: 'book',
          params: {
            id: id,
            channelId: channelId,
          },
        })
      },
    },
  }
</script>

<style scope>
  .a_box a {
    text-decoration: none;
    color: #333333;
  }
  /* 行业资讯和重点阅读的蓝色底背景样式 */
  .left_title span {
    display: inline-block;
    width: 146px;
    text-indent: 8px;
    background: url('../../src/assets/images/news_title.png') left center
      no-repeat;
    color: white;
    margin-bottom: 10px;
  }
  .left_news {
    text-indent: 15px;
  }
  .left_news a {
    display: block;
    width: 80%;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .left_news span {
    display: block;
    width: 20%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #808080;
  }
  .left_news a:hover {
    color: #10568a;
    text-decoration: underline;
    font-weight: 700;
  }
</style>
