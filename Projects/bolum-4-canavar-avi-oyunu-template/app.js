new Vue({
    el:"#app",
    data: {
        player_heal: 100,
        monster_heal:100,
        game_is_on: false,
    },
    methods: {
        start_game: function(){
            this.game_is_on = true;
        },
        attack: function(){
            var point = Math.ceil(Math.random() * 10);
            this.monster_heal -= point;
            this.monster_attack();
            console.log("M :" + this.monster_heal );
            console.log("P :" + this.player_heal);
        },
        special_attack: function(){

        },
        heal_up: function() {

        },
        give_up: function(){

        },
        monster_attack: function(){
             var point = Math.ceil(Math.random() * 10);
            this.player_heal -= point;
        }
    }
})