<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <app-memory >
            <h1 slot="Head">Atomik Alışkanlıklar</h1>
            <p slot="content">Bilinçaltının Gücü // Atomik Alışkanlılar  //  NLP</p>
            <span slot="content1">Bu 3 Kitap hayatımı değiştirdi ve yükseltti...</span>
        </app-memory>
      </div>
    </div>
  </div>
</template>

<script>
  import Memory from "./Memory";

  export default {
    components : {
      appMemory : Memory
    }
  }
</script>
