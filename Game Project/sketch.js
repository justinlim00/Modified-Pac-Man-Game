    var gameCharact_x;
    var gameCharact_y;
    var gameCharact_width;
    var snowPos_y;
    var scrollPos;
    var gameCharact_world_x;

    var toLeft;
    var toRight;

    var CharactFalling;
    var CharactPlummeting;
    var CharactInPond;
    
    //Original position of game character to reset the game
    var original_gameCharact_x;
    var original_gameCharact_y;

    var presentCount = 0;
    var lives;
    var gameOver = false;

    //Sound effect variables
    var jumpSound;
    var collectSound;
    var winSound;
    var loseSound;
    var backgroundSound;

    //sound effect source : "https://mixkit.co/free-sound-effects/" 
    function preload(){
        soundFormats("mp3");
        jumpSound = loadSound("assets/jump.mp3");
        collectSound = loadSound("assets/collect.mp3")
        winSound = loadSound("assets/win.mp3")
        loseSound = loadSound("assets/lose.mp3")
        backgroundSound = loadSound("assets/background.mp3")
    }


    function setup()
    {   
    createCanvas(2000, 800);
    initialiseVaraiable();
    // calling Setups
    setupScene();
    // calling Presents
    setupPresents();
    // calling Ponds
    setupPonds();
    // calling Platforms 
    setupPlatforms();
    // calling Enemies
    setupEnemies();

    lives = 3;
    startGame();
    FlagPole = {x_pos: 3500, isReached:false};

    original_gameCharact_x = gameCharact_x;
    original_gameCharact_y = gameCharact_y;

    }


    function draw()
    {
    background(162, 210, 250); //blue skies

    drawGround(); //drawing snow ground
        
    push();
    translate(scrollPos,0);
    //drawing of Pond
    drawPonds();
    //drawing of MovingClouds
    drawAllMovingClouds();
    animateAllMovingClouds();
    //drawing of SnowMountains
    drawAllSnowMountains();
    //drawing of ChristmasTrees
    drawAllChristmasTrees();
    //drawing of Presents
    drawAllPresents();
    //drawing of sun
    drawSun();
    //drawing of Flagpole
    drawFlagPole();
    checkFlagPole();
    //drawing of Platforms
    drawPlatforms();
    //drawing of Enemies
    drawEnemies();
    pop();
    //give character lives
    drawLifeTokens();
    //draw present counter
    drawPresentCounter();
    // check if game is over
    gameOver = checkIfGameOver();

    // draw game over screen if necessary
    if (gameOver) {
        drawGameOver();
        noLoop;
    }
    //Things related to game character
    if(toLeft && CharactFalling)
    {
        // chracter jump left
        drawgameCharactToLeftAndCharactFalling();
    }
    else if(toRight && CharactFalling)
    {
        // character jump right
        drawgameCharactToRightAndCharactFalling();
    }
    else if(toLeft)
    {
        // character walking left
        drawgameCharactToLeft();
    }
    else if(toRight)
    {
        // character walking right
        drawgameCharactToRight();
    }
    else if(CharactFalling || CharactPlummeting)
    {
        // character jumping front
        drawgameCharactCharactFallingOrCharactPlummeting();
    }
    else
    {
        // characting standing
        drawgameCharactStandingFront();
    }

    // Character Interaction
    if (CharactPlummeting == true) {
        gameCharact_y += 5;
        checkCharactDie();
        return;
    }

    if(toLeft ==true){
        if(gameCharact_x>width*0.5){
        gameCharact_x -= 7;
        }else{ 
        scrollPos+=7;
    }

    }else if(toRight == true){
        if(gameCharact_x<width*0.5){
        gameCharact_x +=7;
        }else{ 
        scrollPos-=7;
        }
    }

    if(gameCharact_y<snowPos_y) {
        CharactFalling = true;
            
    }else {
        CharactFalling = false;
    }

    if(FlagPole.isReached == false)
        {
            checkFlagPole();
        }

    if (CharactInPond) {
    if (CharactFalling) {
          // Game over
    }
    } else if (CharactPlummeting) {
    // character jumping front
    drawgameCharactCharactFallingOrCharactPlummeting();
    if(CharactInPond){
      gameCharact_x = original_gameCharact_x;
      gameCharact_y = original_gameCharact_y;
    }else {
      lives--;
      if(lives<=0){
        // Game over
      }
    }
    }


    gameCharact_world_x = gameCharact_x - scrollPos;

    checkIfgameCharactPickUpPresent();

    checkifGamCharIsOnAnyPonds();

    checkFlagPole();
        
    checkIfGameCharIsOnAnyPlatform();
    }
    
    function drawPresentCounter(){
    fill(255);
    rect(20, 15, 350, 60, 0);

    fill(0);
    textSize(32);
    textAlign(LEFT, TOP);
    text("Presents Counter: " + presentCount, 30, 30);

    }

    // function for lifes and reset 
    function drawLifeTokens (){
    fill(0);
    for(var i=0; i<lives;i++){
        ellipse(40*i+950,60,35,35);
    }
    }

    function checkCharactDie (){
    if(gameCharact_y>height){
        if(lives>0){
            initialiseVaraiable();
        }
    }
    }

    // function for Game Over \
    function checkIfGameOver (){
    var gameOver = false;

    if (lives<1 || FlagPole.isReached) {
        gameOver = true;
    }
    return gameOver;
    }

    function drawGameOver (){
    fill(0);
    textSize(100);
    textAlign(CENTER); // Center align the text
    text("GAME OVER", 1000, 300); // Center horizontally and vertically
     if(lives > 0) {
    text("YOU WIN", width/2, 200);
    } else {
    text("YOU LOSE", width/2, 200);
    }

    // create a button with a rectangle shape
    rect(width/2 - 100, height/2 + 50, 200, 50);
    fill(199,199,199);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Play Again", width/2, height/2 + 75);

    // check if the mouse is over the button
    if (mouseX > width/2 - 100 && mouseX < width/2 + 100 &&
      mouseY > height/2 + 50 && mouseY < height/2 + 100) {
    // change the color of the button
    fill(100,100,100);
    rect(width/2 - 100, height/2 + 50, 200, 50);
    fill(255);
    text("Play Again", width/2, height/2 + 75);

    // check if the mouse is clicked
    if (mouseIsPressed) {
      // restart the game
      setup();
      loop();
    }
    }
    }

    function checkifGamCharIsOnAnyPonds(){
    for (i in Ponds){
        var Pond = Ponds[i];
        var condi1 = gameCharact_y >= snowPos_y 
        var condi2 = gameCharact_world_x-gameCharact_width/2>(Pond.x_pos) 
        var condi3 = gameCharact_world_x+gameCharact_width/6<(Pond.x_pos+Pond.width) 
        if(condi1 && condi2 && condi3){
            CharactPlummeting = true;
                lives--;
            loseSound.play();
        }
    }
    }
    function checkIfCharacterInPond() {
    if (gameCharact_x > pond_x && gameCharact_x < pond_x + pond_width && gameCharact_y > pond_y && gameCharact_y < pond_y + pond_height) {
    CharactInPond = true;
    } else {
    CharactInPond = false;
    }
    }

    function checkIfgameCharactPickUpPresent(){
    for (i in Presents){
        var Present = Presents[i];
        checkIfgameCharactInPresentRange(Present);
    }
    }

    function checkIfgameCharactInPresentRange(Present){
    var d = dist(gameCharact_world_x,gameCharact_y,Present.x_pos,Present.y_pos);
    if (d<30 && Present.isFound== false){
        Present.isFound=true;
        presentCount++;
        collectSound.play();
    }
    }

     function checkIfGameCharIsOnAnyPlatform(){
	if(CharactFalling){
		var isContact = false;
		onPlatform = false;
		for(var i=0;i<Platforms.length;i++){
			isContact = Platforms[i].checkContact(gameCharact_world_x,gameCharact_y);
			if(isContact){
				console.log(onPlatform);
				onPlatform=true;
                CharactFalling=false;
				break;
			}
		}
		
		if(!isContact){
			gameCharact_y += 4.5;
		}
	}
}

    function startGame(){
    gameCharact_x = 900;
    gameCharact_y = snowPos_y;
    gameCharact_width = 30;

    presentCount = 0;

    toLeft = false;
    toRight = false;
    CharactPlummeting = false;
    CharactFalling = false;
    scrollPos = 0;
    onPlatform = false;
    }


    function keyPressed() {
    if (keyCode === LEFT_ARROW) {
    console.log("left arrow");  
    toLeft = true;
    } else if (keyCode === RIGHT_ARROW) {
    console.log("right arrow");
    toRight = true;
    } else if (keyCode === UP_ARROW) 
        if(gameCharact_y >= snowPos_y || onPlatform) {
    console.log("up arrow");
    gameCharact_y -= 100;
    jumpSound.play();
    }
    }

    function keyReleased() {
    if (keyCode === LEFT_ARROW) {
    console.log("left arrow");
    toLeft = false;
    } else if (keyCode === RIGHT_ARROW) {
    console.log("right arrow");
    toRight = false;
    }
    }

    function initialiseVaraiable(){
    snowPos_y = height * 3/4;
    gameCharact_x = width/2;
    gameCharact_y = snowPos_y;
    gameCharact_width = 30;

    toLeft = false;
    toRight = false;
    CharactFalling = false;
    CharactPlummeting = false;

    scrollPos = 0;
    gameCharact_world_x = gameCharact_x;
    }
