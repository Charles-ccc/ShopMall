<template>
  <div class="login-form">
    <div class="-form">
      <div class="g-form-line" v-for="(formLine,index) in formData" :key="index">
        <span class="g-form-label">{{ formLine.label }}:</span>
        <div class="g-form-input">
          <input type="text" placeholder="请输入用户名">
        </div>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data (){
      return{

      }
    },
    props:{
      'isShow': "boolean"
    },
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
    methods: {
      closeMyself (){
        this.$emit('on-close')
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
    .dialog-wrap {
      position: fixed;
      width: 100%;
      height: 100%;
    }
    .dialog-cover {
      background: #000;
      opacity: .3;
      position: fixed;
      z-index: 5;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .dialog-content {
      width: 50%;
      position: fixed;
      max-height: 50%;
      overflow: auto;
      background: #fff;
      top: 20%;
      left: 50%;
      margin-left: -25%;
      z-index: 10;
      border: 2px solid #464068;
      padding: 2%;
      line-height: 1.6;
    }
    .dialog-close {
      position: absolute;
      right: 5px;
      top: 5px;
      width: 20px;
      height: 20px;
      text-align: center;
      cursor: pointer;
    }
    .dialog-close:hover {
      color: #4fc08d;
    }
</style>
