<template>
    <div>
        <h2>Öğrenci Detay</h2>
        <h4>{{ id }}</h4>
    </div>
</template>
<script>
    export default
    {
        data(){
            return{
                id:this.$route.params.id
            }
        }
    }
</script>
