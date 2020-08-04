<template>
  <div>
    <div class="book">
      <img :src="bookimg" alt="book" />
    </div>
    <div class="web_msg">
      <p>
        <b>【主管单位】</b>湖南省教育厅
      </p>
      <p>
        <b>【主办单位】</b>湖南省教育考试院
      </p>
      <p>
        <b>【协办单位】</b>
        湖南教育督导与评价协会
        <br />湖南省教育评价研究中心
      </p>
      <p>
        <b>【办公地址】</b>长沙市岳麓区潇湘中路271号湖南省教育考试院内
      </p>
      <p>
        <b>【邮政编码】</b>410012
      </p>
      <p>
        <b>【联系电话】</b>
        0731-88090435（编辑）
        0731-88090432（发行）
        0731-88090433（广告）
      </p>
      <p>
        <b>【投稿信箱】</b>jyclypj@126.com
      </p>
      <p>
        <b>【创刊时间】</b>2008年7月
      </p>
      <p>
        <b>【国际标准刊号】</b>ISSN1674-1536
      </p>
      <p>
        <b>【国内统一刊号】</b>CN43-1482/G4
      </p>
      <p>
        <b>【邮发代号】</b>42-353
      </p>
      <p>
        <b>【订阅处】</b>全国各地邮政局（所）
      </p>
      <p>
        <b>【出版日期】</b>每月1日
      </p>
    </div>
    <div class="web_msg">
      <ul>
        <li v-for="(item,index) in web_1" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import bookimg from '../assets/images/book_img.png'
  export default {
    name: 'MainAside',
    data() {
      return {
        bookimg,
        web_1: [
          '中国人民大学“复印报刊资料”重要转载来源期刊',
          '湖南省双十佳期刊',
          '湖南省期刊优秀栏目奖',
          '湖湘优秀出版物奖',
        ],
      }
    },
  }
</script>

<style scope>
  .book {
    border: 1px solid rgb(151, 192, 255);
    padding: 20px;
    text-align: center;
  }
  .web_msg {
    margin-top: 20px;
    background: #e7f0ff;
    padding: 20px 0 20px 20px;
    line-height: 26px;
    font-family: Arial, 'Microsoft Yahei', 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    font-size: 14px;
  }
</style>