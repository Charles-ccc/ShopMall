<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template>
        <div v-for="(product,index) in productList" :key="index">
          <h3>{{ product.title}}</h3>
          <ul>
            <li v-for="(item,index) in product.list" :key="index">
              <a :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="(item,index) in newsList" :key="index">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
     <slide-show :slides="slides" @onchange="jiantingOnchange"></slide-show>
      <div class="index-board-list">
        <div
        class="index-board-item"
        v-for="(item, index) in boardList" :key="index"
        :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]"
        >
          <div class="index-board-item-inner" >
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
        text-decoration: none;
    }
    .index-wrap {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .index-left {
        float: left;
        width: 300px;
        text-align: left;
    }
    .index-right {
        float: right;
        width: 900px;
    }
    .index-left-block{
        margin: 15px;
        background-color: #ffffff;
        box-shadow: 0 0 1px #ddd;
    }
    .index-left-block a{color: #555}
    .index-left-block .hr{
        margin-bottom:20px;
    }
    .index-left-block h2 {
        background: #4fc08d;
        color: #fff;
        padding: 10px 15px;
        margin-bottom: 20px;
    }
    .index-left-block h3 {
        padding: 0 15px 5px 15px;
        font-weight: bold;
        color: #222;
    }
    .index-left-block ul {
        padding: 10px 15px;
    }
    .index-left-block li {
        padding: 5px;
    }
    .index-board-list {
        overflow: hidden;
    }
    .index-board-item {
        float: left;
        width: 400px;
        background: #fff;
        box-shadow: 0 0 1px #ddd;
        padding: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .index-board-item-inner {
        min-height: 125px;
        padding-left: 120px;
    }
    .index-board-car .index-board-item-inner{
        background: url(../assets/images/1.png) no-repeat;
    }
    .index-board-loud .index-board-item-inner{
        background: url(../assets/images/2.png) no-repeat;
    }
    .index-board-earth .index-board-item-inner{
        background: url(../assets/images/3.png) no-repeat;
    }
    .index-board-hill .index-board-item-inner{
        background: url(../assets/images/4.png) no-repeat;
    }
    .index-board-item h2 {
        font-size: 18px;
        font-weight: bold;
        color: #000;
        margin-bottom: 15px;
    }
    .line-last {
        margin-right: 0;
    }
    .index-board-button {
        margin-top: 20px;
    }
    .index-board-button a{
        background-color: #4fc08d;
        color: #fff;
        display: inline-block;
        padding: 10px 20px;
        cursor: pointer;
    }
    .lastest-news {
        min-height: 512px;
    }
    .hot-tag {
        background: red;
        color: #fff;
    }
    .new-item {
        display: inline-block;
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>

<script>
import axios from 'axios'
import slideShow from '../components/slideShow'
export default {
    components:{
        slideShow
    },
    data(){
        return{
            productList: [],
            newsList:[],
            boardList:[],
            invTime: 3000,
            slides: [
                {
                    src: require('../assets/slideShow/pic1.jpg'),
                    title: 'React.js学习',
                    href: 'detail/analysis'
                },
                {
                    src: require('../assets/slideShow/pic2.jpg'),
                    title: 'Vue.js学习',
                    href: 'detail/count'
                },
                {
                    src: require('../assets/slideShow/pic3.jpg'),
                    title: 'ES6学习',
                    href: 'http://xxx.xxx.com'
                },
                {
                    src: require('../assets/slideShow/pic4.jpg'),
                    title: 'HTML5学习',
                    href: 'detail/forecast'
                }
            ]
        }
    },
    methods:{
        jiantingOnchange(){
            console.log('jiantingOnchange run!')
        }
    },
    created:function(){
        this.$http.get('http://localhost:8088/api/productList')
        .then((res)=>{
            this.productList = res.data.api_productList;
        })
        .catch((error)=>{
            console.log(error);
            alert("index-left 他强任他强");
        }),
        this.$http.get('http://localhost:8088/api/news')
        .then((res)=>{
            this.newsList = res.data.api_news.getNewsList;
        })
        .catch((error)=>{
            console.log(error);
            alert("index-left 他强任他强");
        }),
        this.$http.get('http://localhost:8088/api/boardList')
        .then((res)=>{
            this.boardList = res.data.api_boardList;
        })
        .catch((error)=>{
            console.log(error);
            alert("index-right 他强任他强");
        })
    }
}
</script>
