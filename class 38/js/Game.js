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
    //create car sprites
    //car1 = createSprite(displayWdith/2,displayHeight-40)
    car1 = createSprite(100,100);
    car2 = createSprite(300,100);
    car3 = createSprite(500,100);
    car4 = createSprite(700,100);
    cars = [car1,car2,car3,car4];
  }

  play(){
    form.hide();

    //class name.function name
    Player.getPlayer_Info()

    if (allPlayers!== undefined){
      var y;
      var x = 0;
      var index = 0

      //for loop
      for (var plr in allPlayers){
        //colour
        index = index+1;
        x = x+200;
        y = displayHeight-allPlayers[plr].distance;
        cars[index-1].x = x
        cars[index-1].y = y
        if(index === player.index){
          cars[index-1].shapeColor = "red";
          camera.position.x = displayWidth/2
          camera.position.y = cars[index-1].y
        }
        else{
          cars[index-1].shapeColor = "black";
        }
      }
    }

    if (keyDown(UP_ARROW)&& player.index != null){
      //+= means = the whole thing plus
      player.distance += 50
      player.update();
    }
    drawSprites();
  }
}