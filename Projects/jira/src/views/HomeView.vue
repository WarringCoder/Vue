<template>
 <div v-if="tasks.length">
    <div v-for="task in tasks" :key="task.id">
        <p>{{ task.title }}</p>
    </div>
 </div>
</template>

<script>



export default {
  name: 'HomeView',
  components: {    
  },
  data() {
    return {
      tasks:[]
    }
  },
  mounted() {
    fetch('http://localhost:3000/tasks').then(res=>res.json()).then(data=>this.tasks=data).catch(err =>console.log(err.message))
  },
}
</script>
