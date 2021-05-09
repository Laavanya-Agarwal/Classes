class Game{
    constructor(){}

    getState(){
        //to make the variable
        var gameStateref = database.ref ("gameState")
        //it will fetch value from database
        gameStateref.on ("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref ("/").update({
            gameState: state
        })
    }
    start(){
        if(gameState===0){
            //refer from player class
            player = new Player();
            player.getCount();
            //refer from form class
            form = new Form();
            form.display();
        }
    }
}