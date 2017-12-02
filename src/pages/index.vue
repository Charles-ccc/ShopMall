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
              <!-- <router-link :to="item.url">{{ item.name }}</router-link> -->
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </div>
        </template>
      </div>
      <!-- <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="(item,index) in newsList" :key="index">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div> -->
    </div>
    <!-- <div class="index-right">
      <slide-show :slides="slides" :inv="invTime"></slide-show>
      <div class="index-board-list">
        <div
        class="index-board-item"
        v-for="(item, index) in boardList" :key="index"
        :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
          <div class="index-board-item-inner" >
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
            </div>  
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
    *{
        margin: 0px;
        padding: 0px;
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
</style>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            productList: []
        }
    },
    created:function(){
        axios.get('http://localhost:8088/api/productList')
        .then(res=>{
            this.productList = res.data.api_productList;
        })
        .catch(error=>{
            console.log(error)
        })
    }
}
</script>
