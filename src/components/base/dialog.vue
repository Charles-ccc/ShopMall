<template>
    <div>
        <div class="dialog-wrap">
            <div class="dialog-cover" v-if="isShow" @click="closeMyself">
                <transition name="drop">
                    <div class="dialog-content" v-if="isShow">
                        <p class="dialog-close" @click="closeMyself">X</p>
                        <slot>Empty</slot>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .drop-enter-active {
        transition: all .5s ease;
    }
    .drop-leave-active {
        transition: all .3s ease;
    }
    .drop-enter {
        transform: translateY(-500px);
    }
    .drop-leave-active {
        transform: translateY(-500px);
    }
    .dialog-wrap{
        position: fixed;
        width: 100%;
        height:100%;
        overflow: hidden;
    }
    .dialog-cover{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        background-color:rgba(0, 0, 0, .5);
        width: 100%;
        height: 100%;
        overflow: hidden;
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
        background-color: #f2f2f2;
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
