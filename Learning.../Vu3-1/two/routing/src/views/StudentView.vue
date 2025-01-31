<template>
  <div class="home">
    <h2>Öğrencilerim</h2>
    
        <div v-for='student in students' :key="student.id">
            <router-link :to="{name:'StudentDetail' , params:{id:student.id}}">
                <h4>{{ student.name }}</h4>
            </router-link>
        </div>
   
 </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'StudentView',
  components: {
  },
  data(){
    return{
        students:
        [
          
        ]
    }   
  },
  mounted(){
    fetch('http://localhost:3000/students').then(res => res.json()).then(data =>this.students = data)
  }
}
</script>
