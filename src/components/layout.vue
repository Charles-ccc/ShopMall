<template>
  <div class="app">
      <div class="app-head">
          <div class="app-head-inner">
              <img src="../assets/logo.png" alt="">
              <div class="head-nav">
                  <ul class="nav-list">
                      <li>{{ username }}</li>
                      <li v-if="username!== ''" class="nav-pile">|</li>
                      <li v-if="username!== ''" @click="quit">退出</li>
                      <li v-if="username=== ''" @click="logClick">登录</li>
                      <li class="nav-pile">|</li>
                      <li v-if="username=== ''" @click="regClick">注册</li>
                      <li v-if="username=== ''" class="nav-pile">|</li>
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
          <logForm @has-log="onSuccessLog"></logForm>
      </Mydialog>
      <Mydialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
          <regForm></regForm>
      </Mydialog>
  </div>
</template>


<script>
import Dialog from './base/dialog'
import logForm from './logForm'
import regForm from './regForm';

    export default {
        components:{
            Mydialog:Dialog,
            logForm,
            regForm
        },
        data(){
            return{
                isShowAboutDialog: false,
                isShowLogDialog: false,
                isShowRegDialog: false,
                username: ""

            }
        },
        mounted () {
            console.log(this)
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
            },
            onSuccessLog(data){
                this.closeDialog ('isShowLogDialog')
                this.username = data
                console.log(data)
            },
            quit() {
                this.username =""
            }
        }
    }
</script> 

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
    .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    }
    .button:hover {
    background: #4fc08d;
    }
    .g-form {

    }
    .g-form-line {
    padding: 15px 0;
    }
    .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
    }
    .g-form-input {
    display: inline-block;
    }
    .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
    }
    .g-form-btn {
    padding-left: 100px;
    }
    .g-form-error {
    color: red;
    padding-left: 15px;
    }
</style>
