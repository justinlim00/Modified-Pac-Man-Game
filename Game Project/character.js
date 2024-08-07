function drawgameCharactToLeftAndCharactFalling()
{
    fill(200,100,100);
    ellipse(gameCharact_x,gameCharact_y - 50,35);
    //body
    fill(0,204,0);
    rect(gameCharact_x -13,gameCharact_y -35,26,30);
    //legs
    fill(0);
    rect(gameCharact_x-15,gameCharact_y -5, 10,10);
    rect(gameCharact_x+5,gameCharact_y-5,10,10);
    //hands
    fill(0,100,100);
    rect(gameCharact_x-15,gameCharact_y-45,6,18);
    rect(gameCharact_x+10,gameCharact_y-45,6,18);
}

function drawgameCharactToRightAndCharactFalling()
{   
   //head
    fill(200,100,100);
    ellipse(gameCharact_x,gameCharact_y - 50,35);
    //body
    fill(0,204,0);
    rect(gameCharact_x -13,gameCharact_y -35,26,30);
    //legs
    fill(0);
    rect(gameCharact_x-15,gameCharact_y -5, 10,10);
    rect(gameCharact_x+5,gameCharact_y-5,10,10);
    //hands
    fill(0,100,100);
    rect(gameCharact_x-15,gameCharact_y-45,6,18);
    rect(gameCharact_x+10,gameCharact_y-45,6,18);
}
	
function drawgameCharactToLeft()
{
    fill(200,100,100);
    ellipse(gameCharact_x,gameCharact_y - 50,35);
    //body
    fill(0,204,0);
    rect(gameCharact_x -13,gameCharact_y -35,26,30);
    //legs
    fill(0);
    rect(gameCharact_x-18,gameCharact_y -5, 10,10);
    rect(gameCharact_x+2,gameCharact_y-5,10,10);
    //hands
    fill(0,100,100);
    rect(gameCharact_x,gameCharact_y-35,6,18);
    rect(gameCharact_x-23,gameCharact_y-35,10,5);
}
	
function drawgameCharactToRight()
{
    fill(200,100,100);
    ellipse(gameCharact_x,gameCharact_y - 50,35);
    //body
    fill(0,204,0);
    rect(gameCharact_x -13,gameCharact_y -35,26,30);
    //legs
    fill(0);
    rect(gameCharact_x-12,gameCharact_y -5, 10,10);
    rect(gameCharact_x+8,gameCharact_y-5,10,10);
    //hands
    fill(0,100,100);
    rect(gameCharact_x,gameCharact_y-35,6,18);
    rect(gameCharact_x+13,gameCharact_y-35,10,5);
}

function drawgameCharactCharactFallingOrCharactPlummeting()
{
    //head
    fill(200,100,100);
    ellipse(gameCharact_x,gameCharact_y - 60,35);
    //body
    fill(0,204,0);
    rect(gameCharact_x -13,gameCharact_y -45,26,30);
    //legs
    fill(0);
    rect(gameCharact_x-15,gameCharact_y -20, 10,10);
    rect(gameCharact_x+5,gameCharact_y-20,10,10);
    //hands
    fill(0,100,100);
    rect(gameCharact_x-15,gameCharact_y-55,6,18);
    rect(gameCharact_x+10,gameCharact_y-55,6,18);
}

function drawgameCharactStandingFront()
{
    //head
    fill(200,100,100);
    ellipse(gameCharact_x,gameCharact_y - 50,35);
    //body
    fill(0,204,0);
    rect(gameCharact_x -13,gameCharact_y -35,26,30);
    //legs
    fill(0);
    rect(gameCharact_x-15,gameCharact_y -5, 10,10);
    rect(gameCharact_x+5,gameCharact_y-5,10,10);
    //hands
    fill(0,100,100);
    rect(gameCharact_x-15,gameCharact_y-35,6,18);
    rect(gameCharact_x+10,gameCharact_y-35,6,18);
}

function drawGamCharAnchorPoint(){
    fill(255,0,0);
    ellipse(gameCharact_x,gameCharact_y,10,10);
}