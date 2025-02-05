<template>
  <nav>
    <router-link to="/">Home</router-link>  
  </nav>
  <router-view/>
</template>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background: ghostwhite;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  max-width: 600px;
    width: 100%;
 
    margin: 0px auto;
 
}
</style>
