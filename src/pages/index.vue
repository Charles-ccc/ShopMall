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
        axios.get('../../productList.json').then(())
    }
}
</script>
