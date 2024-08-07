    //This JS file includes all the function related to the enemies
    var enemies;

    function setupEnemies(){
    enemies = [];
    enemies.push(new Enemy(300,snowPos_y -20,100));
    enemies.push(new Enemy(1900,snowPos_y -20,100));

    }

   //For loops for enemies, Adding of sound and reducing of lives upon touching it
   function drawEnemies(){
        for(var i =0; i <enemies.length; i++){
            enemies[i].draw();
        var isContact = enemies[i].checkContact(gameCharact_world_x, gameCharact_y);
        if(isContact)
            {
                lives--;
                loseSound.play();
                if(lives > 0)
                {
                    startGame();
                    break;
                }
            }
        }
   }
   
    function Enemy(x, y, range) {
    this.x = x;
    this.y = y;
    this.range = range;
    this.currentX = x;
    this.inc = 1;

    this.update = function () {
    this.currentX += this.inc;

    if (this.currentX >= this.x + this.range) {
      this.inc = -1;
    } else if (this.currentX < this.x) {
      this.inc = 1;
    }
    };

    this.draw = function () {
    this.update();
    noStroke();
    fill(255, 255, 0); // yellow
    arc(this.currentX, this.y, 40, 40, 0.1, TWO_PI - 0.3, PIE); // body
    fill(0); // black
    ellipse(this.currentX + 10, this.y - 10, 10, 10); // right eye
    fill(255); // white
    ellipse(this.currentX + 12, this.y - 12, 4, 4); // right eye pupil
    fill(0); // black
    };


    this.checkContact = function (gc_x, gc_y) {
    var d = dist(gc_x, gc_y, this.currentX, this.y);
    if (d < 30) {
      return true;
    }
    return false;
    };
    }