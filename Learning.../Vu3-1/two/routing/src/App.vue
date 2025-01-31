<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/student">Student</router-link>
    </nav> 
    <div>
      <button @click="MainPage()" > Ana Sayfa</button>
      <button @click="BackPage()">Geri</button>
      <button @click="NextPage()">İleri</button>
    </div>
  <router-view/>
 </div>
</template>

<script>
export default{
  methods: {
    MainPage(){
      this.$router.push('/')
    },
    BackPage(){
      this.$router.go(-1)
    },
    NextPage(){
      this.$router.go(+1)
    }
  }
}
  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
