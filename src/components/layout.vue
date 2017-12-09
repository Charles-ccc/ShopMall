<template>
  <div class="app">
      <div class="app-head">
          <div class="app-head-inner">
              <img src="../assets/logo.png" alt="">
              <div class="head-nav">
                  <ul class="nav-list">
                      <li @click="logClick">登录</li>
                      <li class="nav-pile">|</li>
                      <li @click="regClick">注册</li>
                      <li class="nav-pile">|</li>
                      <li @click="aboutClick">关于</li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="app-content">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
      </div>
      <div class="app-foot">
          <p>© 2017 LiuChang Coding</p>
      </div>
      <Mydialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
          <p>About-Others</p>
      </Mydialog>
      <Mydialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
          <p>Log-Others</p>
      </Mydialog>
      <Mydialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
          <p>Reg-Others</p>
      </Mydialog>
  </div>
</template>

<style scoped>
    *{
    margin: 0px;
    padding: 0px;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    a {
    color: inherit;
    text-decoration: none;
    }
    ul {list-style: none;}
    body {
        background: #f0f2f5;
        font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
        font-size: 14px;
        color: #444;
    }
    .app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
    }
    .app-head-inner {
    width: 1200px;
    margin: 0 auto;
    }
    .head-logo {
    float: left;
    }
    .app-head-inner img {
    width: 50px;
    margin-top: 20px;
    }
    .head-nav {
    float: right;
    
    }
    .head-nav ul {
    overflow: hidden;
    }
    .head-nav li {
    cursor: pointer;
    float: left;
    }
    .nav-pile {
    padding: 0 10px;
    }
    .app-content{
        background-color: #f7f7f7;
    }
    .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
    }
    .container {
    width: 1200px;
    margin: 0 auto;
    }
    .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
    }
</style>

<script>
import Dialog from './base/dialog'
    export default {
        components:{
            Mydialog:Dialog,
        },
        data(){
            return{
                isShowAboutDialog: false,
                isShowLogDialog: false,
                isShowRegDialog: false
            }
        },
        methods:{
            aboutClick(){
                this.isShowAboutDialog = true
            },
            regClick(){
                this.isShowRegDialog = true
            },
            logClick(){
                this.isShowLogDialog = true
            },
            closeDialog(attr){
                this[attr] = false;
            }
        }
    }
</script> 