<template>
    <div class="progress">
      <div class="progress-bar bg-info" role="progressbar" :style="{width: progress + '%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        {{ currentItem}}/10
      </div>
    </div>
</template>
<script>
  import { eventBus } from '../main';
    export default{
        data(){
          return{
            progress: 0,
            currentItem: 0
          }
        },
        created(){
          eventBus.$on("progressBarUpdate", (productListCount) => {
            this.currentItem = productListCount;
            this.progress = productListCount *10; 
          })
        }
    }
</script>