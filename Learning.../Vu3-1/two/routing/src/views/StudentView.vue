<template>
  <div class="home">
    <h2>Öğrencilerim</h2>
    <div v-for='student in students' :key="student.id">
        <h4>{{ student.name }}</h4>
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
            {name:"İshak Eren", id:1},
            {name:"Firdevs Rana", id:2}
        ]
    }   
  }
}
</script>
