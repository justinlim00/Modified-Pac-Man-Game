    //This JS file includes all the function related to the flagpole
    var FlagPole;
    
    //Drawing of Flagpole
    function drawFlagPole() {
      push();
      strokeWeight(7);
      stroke(0);
      line(FlagPole.x_pos, snowPos_y, FlagPole.x_pos, snowPos_y - 250);
      fill(0, 0, 255);
      noStroke();

    if (FlagPole.isReached) {
      // Checkered flag when reached
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 6; j++) {
          if ((i + j) % 2 === 0) {
            fill(0);
          } else {
            fill(255, 255, 255);
          }
          rect(FlagPole.x_pos + 2 + i * 8, snowPos_y - 250 + j * 10, 8, 10);
        }
      }
    } else {
      // Checkered flag when not reached
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 6; j++) {
          if ((i + j) % 2 === 0) {
            fill(0);
          } else {
            fill(255, 255, 255);
          }
          rect(FlagPole.x_pos + 2 + i * 8, snowPos_y - 60 + j * 10, 8, 10);
        }
      }
    }

      fill(255, 255, 255);
      strokeWeight(2);
      stroke(0);
      ellipse(FlagPole.x_pos, snowPos_y - 250, 20, 20);
      ellipse(FlagPole.x_pos, snowPos_y - 230, 15, 15);
      ellipse(FlagPole.x_pos, snowPos_y - 210, 10, 10);
      pop();
    }
       
    //Rendering of Flagpole
    function renderFlagPole() {
    fill(125);
    rect(FlagPole.x_pos, snowPos_y-400,30,400);
    fill(100);
    if(FlagPole.isReached){
        rect(FlagPole.x_pos,snowPos_y-400,100,50);
    }else{
        rect(FlagPole.x_pos,snowPos_y-50,100,50);
    }
    }

    //Function that allow players to know that they have won
    function checkFlagPole(){
    if(FlagPole.isReached==false){
        var d = dist(gameCharact_world_x, gameCharact_y, FlagPole.x_pos, snowPos_y);
        if (d<10){
            FlagPole.isReached=true;
            winSound.play();
        }
    }
    }