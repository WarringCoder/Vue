<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <button @click="changed"> İsmi Değiştir</button>
    <p>{{ childData }}</p>
    <p>{{ age }}</p>
    <hr>
    <div class="row">
      <app-user-detail  :sendAge="age" @data="childData = $event" :name="title"></app-user-detail>
      <app-user-edit :sendAge="age" @newAgee="age = $event"></app-user-edit>
    </div>
  </div>
</template>
<script>
  import UserDetail from "./UserDetail";
  import UserEdit from "./UserEdit";
  export default {
    components : {
      appUserDetail : UserDetail,
      appUserEdit : UserEdit,
    },
    data: function(){
      return{
        title:"İshak",
        childData:"",
        age:25
      }
    },
    methods:{
      changed(){
        if(this.title === "İshak")
        {
          this.title = "Firdevs"
        }
        else
        {
          this.title = "İshak"
        }
      }
    }
  }
</script>

<style>
  div.container{
    margin-top: 30px;
    padding: 20px 40px;
    background-color: #6a8d99;
    border: 1px solid #666;
  }
  div.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
