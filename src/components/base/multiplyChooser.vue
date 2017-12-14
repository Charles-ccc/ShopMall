<template>
  <div class="chooser-component">
      <ul class="chooser-list">
          <li>11</li>
          <li>22</li>
          <li>33</li>
      </ul>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
      selection:{
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
    }
}
</script>

<style scoped>
.chooser-component{
    position: relative;
    display: inline-block;
}
.chooser-list{
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
