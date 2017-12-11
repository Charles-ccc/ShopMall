<template>
  <div class="login-form">
      <div class="g-form">
          <div class="g-form-line">
              <span class="g-form-label">用户名：</span>
              <div class="g-form-input">
                  <input type="text" v-model="usernameModel" placeholder="请输入用户名">
              </div>
              <span class="g-form-error">{{ userErrors.errorText }}</span>
          </div>
          <div class="g-form-line">
              <span class="g-form-label">密码：</span>
              <div class="g-form-input">
                  <input type="text" v-model="passwordModel" placeholder="请输入密码">
              </div>
              <span class="g-form-error">{{ passwordErrors.errorText }}</span>
          </div>
          <div class="g-form-line">
              <div class="g-form-btn">
                  <a class="button" @click="onLogin">登录</a>
              </div>
          </div>
          <p>{{ errorText }}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            usernameModel: "",
            passwordModel: "",
            errorText:"",
            userFlag:false,
            passwordFlag:false
        }
    },
    /* created(){
        console.log(this)
        console.log(this.userFlag)
    },
    beforeMount(){
        console.log(this)
        console.log(this.userFlag)
    },
    mounted(){
        console.log(this)
        console.log(this.userFlag)
    }, */
    computed:{
        userErrors (){
            let errorText, status
            if(!/@/g.test(this.usernameModel)){
                status = false,
                errorText = "不包含@符号"
            }else{
                status = true,
                errorText = ""
            }
            if(!this.userFlag){
                errorText = "",
                this.userFlag = true
            }
            //初步推断 计算属性内可以直接定义userFlag这种属性，
            //而不需要在data中定义
            return{
                status,
                errorText
            }
        },
        passwordErrors (){
            let errorText, status
            if(!/^\w{1,9}/g.test(this.passwordModel)){
                status = false,
                errorText = "密码长度不足9位"
            }else{
                status = true,
                errorText = ""
            }
            if(!this.passwordFlag){
                errorText = "",
                this.passwordFlag = true
            }
            return{
                status,
                errorText
            }
        }
    },
    methods:{
        onLogin(){
            if(!this.userErrors.status || !this.passwordErrors.status){
                this.errorText = "请正确输入账号或密码"
            }else{
                this.errorText = ""
                this.$http.get('http://localhost:8088/api/news')
                .then((res)=>{
                    this.$emit('has-log',this.usernameModel)
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        }
    },
    watch: {
        usernameModel: function (value) {
            console.log(value)
        }
    }
}
</script>

<style scoped>
    .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 6px 16px;
    cursor: pointer;
    border-radius: 8px;
    }
    .button:hover {
    background: #555555;
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
