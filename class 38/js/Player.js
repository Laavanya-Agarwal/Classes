class Player {
  constructor(){
    this.index = null,
    this.distance = 0,
    this.name = null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  //static info
  //function made to get all of the information and store it inside player
  static getPlayer_Info(){
    var playerInforef = database.ref("players");
    playerInforef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}