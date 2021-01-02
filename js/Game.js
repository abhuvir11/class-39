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

 async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(20)
    text("Game Start",150,150);
    Player.getPlayerInfo();
    if(allPlayers!==undefined){
      var display_position=100;
      for(var plr in allPlayers){
        if(plr==="player"+player.index)
        fill("blue");
        else
        fill("orange");
        display_position+=20;
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,100,display_position0);

      }
    }
    if(keyIsDown(UP_AROWW)&& player.index!==null)
  player.distance+=50;
  player.update();

    
  }
}
