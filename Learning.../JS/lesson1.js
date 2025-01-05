new Vue({
    el: "#OneInstance",
    data: {
        OneInstanceButton: false, // Başlangıç değeri
    },
    methods: {
         ShownstanceOne: function () {
            if (this.OneInstanceButton === false) { // Doğru şekilde karşılaştırma
                this.OneInstanceButton = true; // Durumu değiştir
            } else {
                this.OneInstanceButton = false; // Durumu eski haline getir
            }
        }
    }
});

new Vue({
    el: "#TwoInstance",
    data: {
        TwoInstanceButton: false, // Başlangıç değeri
    },
    methods: {
         ShownstanceTwo: function () {
            if (this.TwoInstanceButton === false) { // Doğru şekilde karşılaştırma
                this.TwoInstanceButton = true; // Durumu değiştir
            } else {
                this.TwoInstanceButton = false; // Durumu eski haline getir
            }
        }
    }
});

