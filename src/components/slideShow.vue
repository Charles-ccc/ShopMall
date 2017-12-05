<template>
    <div class="slide-show">
        <div class="slide-img">
            <a :href="slides[nowIndex].href">
                <img :src="slides[nowIndex].src">
            </a>
        </div>
        <div class="slide-title">
            <h2>{{ slides[nowIndex].title }}</h2>
            <ul class="slide-pages">
                <li v-for="(item,index) in slides" :key="index">
                    <a>{{ index+1 }}</a>
                </li>
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
    .slide-show{
        width: 900px;
        height: 500px;
        margin: 15px 15px 15px 0;
        position: relative;
    }
    .slide-title{
        width: 100%;
        height: 22px;
        line-height: 22px;
        background-color:rgba(0, 0, 0, .7);
        position: relative;;
        left: 0px;
        top: -26px;
    }
    .slide-title h2{
        float: left;
        font-size: 16px;
        color: #f3f3f3;
        padding-left: 18px;
    }
    .slide-pages{
        float: right;
    }
    .slide-pages li{float: left;color: #f3f3f3;padding: 0 8px;height: 22px;line-height: 22px;}
</style>

<script>
export default {
    data(){
        return{
           nowIndex:0
        }
    },
    props:{
        slides:{
            type:Array,
            default:[]
        }
    }
}
</script>
