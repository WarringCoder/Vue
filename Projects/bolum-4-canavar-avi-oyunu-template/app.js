new Vue({
    el:"#app",
    data: {
        player_heal: 100,
        monster_heal:100,
        game_is_on: false,
        logs: [],
    },
    methods: {
        start_game: function(){
            this.game_is_on = true;
        },
        attack: function(){
            var point = Math.ceil(Math.random() * 10);
            this.monster_heal -= point;
            this.monster_attack();
            this.add_to_log({turn: "p", text : "OYUNCU ATAĞI (" + point +")" });
            console.log("M :" + this.monster_heal );
            console.log("P :" + this.player_heal);
        },
        special_attack: function(){
            var point = Math.ceil(Math.random() * 25);
            this.add_to_log({turn: "p", text : "OYUNCU ÖZEL ATAĞI (" + point +")" });
            this.monster_heal -= point;
            this.monster_attack();

        },
        heal_up: function() {
            var point = Math.ceil(Math.random() * 27);
            this.add_to_log({turn: "p", text : "OYUNCU İLK YARDIM ALDI (" + point +")" });
            this.player_heal += point;
            this.monster_attack();
        },
        give_up: function(){
            this.player_heal = 0;
            this.add_to_log({turn: "p", text : "OYUNCU PES ETTİ" });

        },
        monster_attack: function(){
             var point = Math.ceil(Math.random() * 15);
            this.add_to_log({turn: "m", text : "CANAVAR SALDIRISI (" + point +")" });
            this.player_heal -= point;
        },
        add_to_log: function(log){
            this.logs.push(log)
        }
    },
    watch: {
        player_heal : function(value){
            if(value <= 0){
                this.player_heal = 0
                if(confirm("Oyunu Kaybettin! Tekrar Denemek ister misin?")){
                    this.player_heal = 100;
                    this.monster_heal = 100;
                    this.logs = [];
                }
            }
            else if (value >= 100){
                this.player_heal = 100
            }
        },
         monster_heal : function(value){
            if(value <= 0){
                this.monster_heal = 0
                if(confirm("Oyunu Kazandın! Tekrar Denemek ister misin?")){
                    this.player_heal = 100;
                    this.monster_heal = 100;
                    this.logs = [];
                }
                
            }
        }
    }
})