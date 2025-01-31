<template>
    <div>
        <h2>Öğrenci Detay</h2>
        <div v-if="student">
            <h4>{{ student.name }}</h4>
        </div>
    </div>
</template>
<script>
    export default
    {
        props:['id'],
        data(){
            return{
                student:null
            }
        },
        mounted(){
            fetch('http://localhost:3000/students/'+this.id).then(res => res.json()).then(data =>this.student = data)
        }
    }
</script>
