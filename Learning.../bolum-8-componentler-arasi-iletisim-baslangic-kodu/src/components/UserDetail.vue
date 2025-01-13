<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanıcı Adı: {{ name }}</p>
    <p>Ters Hali: {{ switchName() }}</p>
    <p>Yaş: {{ sendAge }}</p>
    <button @click="sendToParent">Child Component'ten Parent'e Veri Gönder</button>
  </div>
</template>
<script>
  export default{
    props:{
      name:{
        type: String, Number,
        default:"Birbirini İyileştiren İki Güç "
      },
      sendAge:{
        type:Number
      }
    },
    methods:{
      switchName(){
        return  this.name.split("").reverse().join("");   
      },
      sendToParent()
      {
        this.$emit("data", "Warring Coder")
      }
    }
  }
</script>
<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
