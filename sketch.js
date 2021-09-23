var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;

var database;

var car1,car2,car3,car4,Car

var form, player, game;
var allPlayers

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===4){
    game.update(1)
  }

  if(gameState===1){
    clear()
    game.play()
  }
}
