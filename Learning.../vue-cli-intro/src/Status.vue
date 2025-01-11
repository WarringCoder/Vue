<template>
  <div>
    <p>Lamba Durumu : {{ status }}</p>
    <hr>
    <button @click="LambChanged">Lamba Aç/Kapat</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Kapalı"
    }
  },
  methods: {
    LambChanged() {
      this.status = this.status === "Kapalı" ? "Açık" : "Kapalı";
    }
  }
}
</script>

<style>
/* Stil ekleyebilirsiniz */
</style>
