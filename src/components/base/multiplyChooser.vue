<template>
  <div class="chooser-component">
      <ul class="chooser-list">
          <li v-for="(item,index) in selections" :key="index" :title="item.label" @click="toggleSelection(index)" :class="{ active:checkActive(index) }">{{ item.label }}</li>
      </ul>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
    props: {
        selections:{
            type:Array,
            default:[{
                label:'test',
                value:0
            }]
        }
    },
    data(){
        return {
            nowIndex:[0]
        }
    },
    methods:{
        checkActive(index){
            return this.nowIndex.indexOf(index) !== -1
        },
        toggleSelection (index){
            if(this.nowIndex.indexOf(index) ===-1){
                this.nowIndex.push(index)
            }else{
                this.nowIndex = _.remove(this.nowIndex,
                (idx) =>{
                    return idx !== index
                })
            }
        }

    }
}
</script>

<style scoped>
.chooser-component{
    position: relative;
    display: inline-block;
}
.chooser-list li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
}
.chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
}
</style>
