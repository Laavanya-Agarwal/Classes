class Game {
  constructor(){}
  
  //fetching gameState's value from the database
  getState(){
    var gameStateRef  = database.ref('gameState');
    //.on turns on the listener which listens to every change
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    //use '/' when it is not a child (represents the root)
    database.ref('/').update({
      gameState: state
    });
  }

  //async is when the function waits for the command to get executed
  async start(){
    if(gameState === 0){
      player = new Player();
      //.once is an async listener to listen only once, and then set up a permanent listenenr
      var playerCountref = await database.ref("playerCount").once("value");
      if(playerCountref.exists()){
        playerCount = playerCountref.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();

    //text
    textSize(30);
    text("Game Start", 120, 100);
    //class name.function name
    Player.getPlayer_Info()

    if (allPlayers!== undefined){
      var y = 130;

      //for loop
      for (var plr in allPlayers){
        //colour
        if(plr === "player" + player.index){
        fill("Red");
        }
        else{
        fill("black");
        }
      y += 20
      textSize(15);
      text(allPlayers [plr].name + ":" + allPlayers [plr].distance,120,y)
      }
    }

    if (keyDown(UP_ARROW)&& player.index != null){
      //+= means = the whole thing plus
      player.distance += 50
      player.update();
    }
  }
}