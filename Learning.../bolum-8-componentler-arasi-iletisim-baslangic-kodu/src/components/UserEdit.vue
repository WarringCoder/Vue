<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir diğer Child componentim</p>
    <p>Yaş: {{ sendAge }}</p>
    <button @click="changedAge">Yaşı Değiştir</button>
  </div>
</template>
<script>
  export default{
    props:{
      sendAge:{
        type:Number
      }
    },
    methods:{
      changedAge(){
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        this.sendAge += randomNumber;
        this.$emit("newAgee", this.sendAge)
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightgoldenrodyellow;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>

