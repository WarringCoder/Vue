<template>
  <div class="task">
        <div class="actions">
            <h3 @click="toggleDetail()">{{ task.title }}</h3>
            <div>
                <span @click="deleteTask()" class="material-symbols-outlined">delete</span>
                <span class="material-symbols-outlined">edit</span>
                <span @click="toggleComplete()" class="material-symbols-outlined">done</span>
            </div>
        </div>
        <div class="details" v-if="showDetails">
            <p>{{ task.details }}</p>
        </div>
  </div>
</template>

<script>
export default {
    props:['task'],
    emits:['delete','complete'],
    data() {
        return {
            showDetails:false,
            uri:'http://localhost:3000/tasks/' + this.task.id
        }
    },
    methods:{
        toggleDetail(){
            this.showDetails = !this.showDetails
        },
        deleteTask(){
            fetch(this.uri,{method:'DELETE'}).then(()=>this.$emit('delete',this.task.id)).catch(err =>console.log(err.message))
        },
        toggleComplete(){
            fetch(this.uri,{method:'PUT',
             headers:{'Content-Type':'application/json'},
             body:JSON.stringify({title:this.task.title,details:this.task.details,complete:!this.task.complete}) 
        }).then(()=>this.$emit('complete',this.task.id)).catch(err =>console.log(err.message))
        }
    }

}
</script>

<style>
.task{    
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 10px 20px;
    margin: 20px 0px;
    background: white;
    border-radius: 20px;
    border-left: 8px solid palevioletred; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
h3{
    cursor: pointer;
}
.details{
    padding: 20px 0px;
}
.actions{
    padding: 15px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.material-symbols-outlined{
    font-size: 25px;
    margin-left: 10px;
    color: gray;
    cursor: pointer;
}

</style>