<template>
    <div>
        <div class="dialog-wrap">
            <div class="dialog-cover" v-if="isShow" @click="closeMyself">
                <transition name="drop">
                    <div class="dialog-content" v-if="isShow">
                        <p class="dialog-close" @click="closeMyself">X</p>
                        <slot name="empty">Empty</slot>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .dialog-wrap{
        position: fixed;
        width: 100%;
        height:100%
    }
    .dialog-cover{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        background-color:rgba(0, 0, 0, .3);
        width: 100%;
        height: 100%;
    }
    .dialog-content{
        width: 50%;
        height: 50%;
        position: fixed;
        top: 25%;
        left: 25%;
        z-index: 11;
        padding: 3%;
        border: 2px solid #464068;
        line-height: 2;
    }
    .dialog-close{
        position: absolute;
        top: 6px;
        right: 6px;
        text-align: center;
        cursor: pointer;
    }
    .dialog-close:hover{
        color:darkorange;
    }
</style>

<script>
export default {
    props:{
        isShow:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{

        }
    },
    methods:{
        closeMyself(){
            this.$emit('on-close')
        }
    }
}
</script>
