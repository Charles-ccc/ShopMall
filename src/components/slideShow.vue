<template>
    <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
        <div class="slide-img">
            <a>
              <transition name="slide-trans">
                <img :src="slides[nowIndex].src" v-if="isShow">
              </transition>
              <transition name="slide-trans-old">
                <img :src="slides[nowIndex].src" v-if="!isShow">
              </transition>
            </a>
        </div>
        <div class="slide-title">
            <h2>{{ slides[nowIndex].title }}</h2>
            <ul class="slide-pages">
                <li @click="goto(prevIndex)">&lt;</li>
                <li v-for="(item,index) in slides" :key="index" @click="goto(index) ">
                    <a :class="{on: index === nowIndex}">{{ index+1 }}</a>
                </li>
                <li @click="goto(nextIndex)">&gt;</li>
            </ul>
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
    .slide-trans-enter-active {
      transition: all .5s;
    }
    .slide-trans-enter {
      transform: translateX(900px);
    }
    .slide-trans-old-leave-active {
      transition: all .5s;
      transform: translateX(-900px);
    }
    .slide-show{
        width: 900px;
        height: 500px;
        margin: 15px 15px 15px 0;
        position: relative;
        overflow: hidden;
    }
    .slide-title{
        width: 100%;
        height: 22px;
        line-height: 22px;
        background-color:rgba(0, 0, 0, .7);
        position: relative;;
        left: 0px;
        top: -32px;
    }
    .slide-title h2{
        float: left;
        font-size: 14px;
        color: #f3f3f3;
        padding-left: 18px;
    }
    .slide-pages{
        float: right;
    }
    .slide-pages li{
        float: left;
        color: #f3f3f3;
        padding: 0 8px;
        height: 22px;
        line-height: 22px;
        cursor: pointer;
    }
    .slide-pages li .on {
        text-decoration: underline;
    }
</style>

<script>
export default {
    data(){
        return{
           nowIndex:0,
           isShow:true
        }
    },
    props:{
        slides:{
            type:Array,
            default:[]
        },
        inv:{
          type: Number,
          default: 2000
        }
    },
    methods:{
        goto(index){
          this.isShow = false,
          setTimeout( () => {
            this.isShow = true
            this.nowIndex = index
            this.$emit('onchange',index)
          }, 10)
        },
        runInv(){
          this.invId = setInterval(() => {
            this.goto(this.nextIndex)
          },this.inv)
        },
        clearInv(){
          clearInterval(this.invId)
        }
    },
    mounted () {
      this.runInv();
    },
    computed:{
        prevIndex(){
            if (this.nowIndex === 0) {
                return this.slides.length -1
            }else{
                return this.slides -1
            }
        },
        nextIndex(){
            if (this.nowIndex === this.slides.length -1) {
                return 0
            }else{
                return this.nowIndex + 1
            }
        }
    }
}
</script>
