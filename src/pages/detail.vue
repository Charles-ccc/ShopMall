<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <div class="product-board">
        <img :src="productIcon">
        <ul>
            <router-link :to="{ path: item.path }"  v-for="(item, index) in productsDetail" :key="index" tag="li" active-class="active">
              {{ item.name }}
            </router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return {
        productsDetail: [],
        imgMap: {
        '/detail/count': require("../assets/images/1.png"),
        '/detail/forecast': require("../assets/images/2.png"),
        '/detail/analysis': require("../assets/images/3.png"),
        '/detail/publish': require("../assets/images/4.png")
        }
      }
    },
    created:function () {
      this.$http.get("http://localhost:8088/api/productsDetail")
      .then((res) => {
        // console.log(res.data.api_productsDetail)
        this.productsDetail = res.data.api_productsDetail
      })
      .catch((error) => {
        console.log(error)
      })
    },
    computed: {
      productIcon (){
        return this.imgMap[this.$route.path]
      }
    }
  }
</script>

<style>
  *{
    list-style: none;
    text-decoration: none;
  }
  .detail-wrap{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
  }
  .detail-left{
    float: left;
    width: 200px;
    text-align: center;
  }
  .detail-right{
    float: left;
    width: 980px;
    margin-left: 20px;
  }
  .product-board{
    background-color: #fff;
    padding: 20px 0;
  }
  .product-board ul {
  margin-top: 20px;
}
  .product-board li {
    text-align: left;
    padding: 10px 15px;
    cursor: pointer;
    color: #555555;
  }
  .product-board li.active,
  .product-board li:hover {
    background: #4fc08d;
    color: #fff;
  }
  .product-board li a {
    display: block;
  }
  .sales-board {
    background: #fff;
  }
  .sales-board-intro h2 {
    font-size: 20px;
    padding: 20px;
  }
  .sales-board-intro p {
    background: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
  }
  .sales-board-form {
    padding: 30px 20px;
    font-size: 14px;
  }
  .sales-board-line {
    clear: both;
    padding-bottom: 20px;
  }
  .sales-board-line-left {
      display: inline-block;
      width: 100px;
  }
  .sales-board-line-right {
      display: inline-block;
      width: 75%;
  }
  .sales-board-des {
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
  }
  .sales-board-des p {
    line-height: 1.6;
  }
  .sales-board-des h2 {
    font-size: 20px;
    padding-bottom: 15px;
  }
  .sales-board-des h3 {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px 0;
  }
  .sales-board-des li {
    padding: 5px 0;
  }
  .sales-board-table {
    width: 100%;
    margin-top: 20px;
  }
  .sales-board-table th {
    background: #4fc08d;
    color: #fff;
  }
  .sales-board-table td {
      border: 1px solid #f0f2f5;
      padding: 15px;
  }
  .button{
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 6px;
    background-color:#4fc08d;
    color: #fff;
    text-align: center; 
  }
</style>
