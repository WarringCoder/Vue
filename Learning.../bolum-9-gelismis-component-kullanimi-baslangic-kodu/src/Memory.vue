<template>
  <div>
    <div>
      <slot name="Head"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot name="content1"></slot>
    </div>
  </div>
</template> 
<script>
  export default{
    props:["content"]
  }
</script>
<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #666;
    padding: 20px 20px;
    margin-top: 20px;
  }
</style>
