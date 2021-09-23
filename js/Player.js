class Player {
  constructor(){
    this.index=null
    this.distance=0
    this.name=null
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

  update(name){
    var playerIndex = "players/player" + player.index;
    database.ref(playerIndex).set({
      name:this.name , distance:this.distance
    });
  }
  static getplayerinfo(){
    var playerinforef = database.ref('players');
    playerinforef.on("value",function(data){
      allPlayers = data.val();
    }) 
  }
}
