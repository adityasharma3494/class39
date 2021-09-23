class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200)
    car2=createSprite(300,200)
    car3=createSprite(500,200)
    car4=createSprite(700,200)
    Car=[car1,car2,car3,car4]
  }
  play(){

    form.hide()
    Player.getplayerinfo()
    text("game started",120,120)
    if(allPlayers!= undefined){
      var position=130
      var index=0,x=0,y=0
      for(var plr in allPlayers){
        index=index+1
        x=x+200
        y=displayHeight-allPlayers[plr].distance
        Car[index-1].x=x
        Car[index-1].y=y
        if(index===player.index){
          Car[index-1].shapeColor="blue"
          camera.position.x=displayWidth/2
          camera.position.y=Car[index-1].y
        }
        else{fill("red")}
        position=position+20
        
      }
    }
if(keyIsDown(UP_ARROW)){player.distance=player.distance+50
  player.update()

  }
  drawSprites();
}
}