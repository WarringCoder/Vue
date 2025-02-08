<template>
  <div> 
    <p><strong>ad:</strong>  {{ mösyö}}</p> 
    <p><strong> yaş:</strong> {{ age}}</p> 
    <p><strong>iş:</strong>  {{ job}}</p> 
    <p><strong>maaş:</strong>  {{ wage}}K</p> 
    <button @click="üstseviye">yüksel</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  setup(){
    let mösyö= "İshak Eren";
    let age= 22;
    let job = "software developer";
    let wage = 50;

    const üstseviye = () =>{
      alert("Savaşçı Kazandı ve Yükselmeye Devam Ediyor");
    }

    return {mösyö, age, job, wage, üstseviye}
  }
}
</script>

<style>

</style>
