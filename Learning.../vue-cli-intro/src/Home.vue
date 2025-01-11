<template>
    <div>
        <lampstatus v-for="lamp in 5"></lampstatus>
    </div>
</template>
<script>
    import LampStatus from "./Status.vue";
    export default{
        components:{
            "lampstatus" : LampStatus
        }
    }
</script>
<style>
</style>