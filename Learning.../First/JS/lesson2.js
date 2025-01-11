var cmp =  {
    data:function(){
        return{
            status:"Pasif"
        }
    },
    template: '<p>Componentlere Giriş : {{status}} (<button @click="changeStatus">Değiştir</button>) </p>',
    methods: {
        changeStatus: function() {
            if(this.status=="Pasif")
            {
                this.status =  "Aktif"
            }
            else
            {
                this.status =  "Pasif"
            }
        }
    }
}

new Vue({
    el: "#app1",
    components: {
        "mycomp" : cmp 
    }

});

new Vue({
    el: "#app2",
   
});









