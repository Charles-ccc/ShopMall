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
        <h2>{{ slides[nowIndex].title }}</h2>
        <ul class="slide-pages">
            <li @click="goto(prevIndex)">&lt;</li>
            <li v-for="(item,index) in slides" :key="index" @click="goto(index) ">
                <a :class="{on: index === nowIndex}">{{ index+1 }}</a>
            </li>
            <li @click="goto(nextIndex)">&gt;</li>
        </ul>
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
    .slide-show h2{
        width: 100%;
        height: 100%;
        background-color:rgba(0, 0, 0, .7);
        position: absolute;;
        bottom: 0;
        height: 30px;
        line-height: 30px;
        text-align: left;
        padding-left: 15px;
        font-size: 14px;
        color: #f3f3f3;
    }
    .slide-pages{
        position: absolute;
        bottom: 5px;
        right: 15px;
    }
    .slide-pages li{
        color: #f3f3f3;
        display: inline-block;
        padding: 0 10px;
        cursor: pointer;
        color: #fff;
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
