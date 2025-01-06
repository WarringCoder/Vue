var vm1 = new Vue({
    el: "#OneInstance",
    data: {
        OneInstanceButton: false, // Başlangıç değeri
        h1:"Birinci İnstance Örneği",
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

var vm2 = new Vue({
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
        },
        Changeh1: function (){
            vm1.h1 = "instance 2 tarafında değiştirildi"
        }
    }
});

