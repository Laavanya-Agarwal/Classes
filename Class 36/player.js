class Player{
    constructor(){}

    //fetch count from database
    getCount(){
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value",function(data){
            playercount = data.val();
        })
    }
    //update count to the database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }
    //update name to the database
    updateName(name){
        var playerIndex = "player" + playercount
        database.ref(playerIndex).set({
            name: name
        })
    }
}