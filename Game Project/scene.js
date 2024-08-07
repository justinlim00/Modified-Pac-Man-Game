    var SnowMountains;
    var ChristmasTrees;
    var MovingClouds;
    var ChristmasTree_Y_Pos; 
    var FlagPole;

    function setupScene()
    {
        ChristmasTree_Y_Pos = snowPos_y - 50;
        ChristmasTreeX=[-1000,-500,-150,0,350,530,900,1500,1800,2500,3000]

        MovingClouds=[{pos_x:random(15,width),pos_y:random(20,100),size:random(70,80)}, 
                      {pos_x:random(15,width),pos_y:random(80,200),size:random(70,80)}, 
                      {pos_x:random(15,width),pos_y:random(150,250),size:random(70,80)}];

        SnowMountains = [{pos_x:-700,pos_y:snowPos_y-100,height:200,width:350},
                         {pos_x:-158,pos_y:snowPos_y-124,height:250,width:191},
                         {pos_x:298,pos_y:snowPos_y-124,height:250,width:191},
                         {pos_x:450,pos_y:snowPos_y-175,height:350,width:200},
                         {pos_x:1000,pos_y:snowPos_y-150,height:300,width:200},
                         {pos_x:2000,pos_y:snowPos_y-125,height:250,width:500},
                         {pos_x:1650,pos_y:snowPos_y-150,height:300,width:400},
                         {pos_x:2620,pos_y:snowPos_y-150,height:300,width:400},
                         {pos_x:2850,pos_y:snowPos_y-150,height:300,width:400},
                    ];
        FlagPole = {isReached: false, x_pos: 3100}
    }

    function animateAllMovingClouds() {
        MovingClouds.forEach(MovingCloud => {
          MovingCloud.pos_x += 1;
        });
      }

    function drawAllMovingClouds() {
        for (let i = 0; i < MovingClouds.length; i++) {
          drawMovingCloud(MovingClouds[i]);
        }
      }

    function drawMovingCloud(z_MovingCloud) {
      const { pos_x, pos_y, size } = z_MovingCloud;
      noStroke();

      // Draw the main cloud body
      fill(255);
      ellipse(pos_x, pos_y, size * 1.2, size * 1.2);
      ellipse(pos_x - 40, pos_y + 20, size * 0.8, size * 0.8);
      ellipse(pos_x + 40, pos_y + 20, size * 0.8, size * 0.8);
      ellipse(pos_x - 70, pos_y + 10, size * 0.8, size * 0.8);
      ellipse(pos_x + 70, pos_y + 10, size * 0.8, size * 0.8);

      // Add some texture to the cloud
      fill(255, 200);
      ellipse(pos_x - 25, pos_y - 10, size * 0.8, size * 0.8);
      ellipse(pos_x + 25, pos_y - 10, size * 0.8, size * 0.8);
      ellipse(pos_x - 55, pos_y + 20, size * 0.8, size * 0.8);
      ellipse(pos_x + 55, pos_y + 20, size * 0.8, size * 0.8);
      ellipse(pos_x, pos_y + 25, size * 0.8, size * 0.8);
    }


    function drawAllChristmasTrees() {
        for (var i = 0; i < ChristmasTreeX.length; i++) {
          drawChristmasTree(ChristmasTreeX[i]);
        }
      }

      function drawChristmasTree(z_ChristmasTree) {
        noStroke();
        pos_y:snowPos_y-50
        //drawing of trunk
        fill(177, 127, 50);
        rectMode(CENTER);
        rect(z_ChristmasTree, ChristmasTree_Y_Pos, 40, 100);
        rectMode(CORNER); 
        // owl hole
        fill(123, 63, 0);
        ellipse(z_ChristmasTree - 3, ChristmasTree_Y_Pos + 5, 25, 35);

        fill(34, 139, 34);
        for (let i = 0; i < 2; i++) {
          var x1 = z_ChristmasTree - 80;
          var y1 = ChristmasTree_Y_Pos - 50 - i * 50;
          var x2 = z_ChristmasTree;
          var y2 = ChristmasTree_Y_Pos - 150 - i * 50;
          var x3 = z_ChristmasTree + 80;
          var y3 = ChristmasTree_Y_Pos - 50 - i * 50;
          triangle(x1, y1, x2, y2, x3, y3);
        }
        //decoration
        fill(255, 0, 0);
        ellipse(x1, y1, 15, 15);
        fill(255, 0, 0);
        ellipse(x3, y3, 15, 15);

        fill(255, 0, 0);
        ellipse(x1, y1 + 50, 15, 15);
        fill(255, 0, 0);
        ellipse(x3, y3 + 50, 15, 15);

        //star
        fill(255, 215, 0);
        triangle(x2 - 10, y2 - 5, x2, y2 - 15, x2 + 10, y2 - 5);
        fill(255, 215, 0);
        triangle(x2 - 10, y2 - 10, x2, y2 , x2 + 10, y2 - 10);

            // ornaments
      fill(255, 0, 0);
      ellipse(z_ChristmasTree - 20, ChristmasTree_Y_Pos - 100, 15, 15);
      fill(0, 0, 255);
      ellipse(z_ChristmasTree + 20, ChristmasTree_Y_Pos - 100, 15, 15);

      // lights
      fill(255, 255, 0, 150);
      ellipse(z_ChristmasTree - 30, ChristmasTree_Y_Pos - 75, 10, 10);
      ellipse(z_ChristmasTree - 10, ChristmasTree_Y_Pos - 75, 10, 10);
      ellipse(z_ChristmasTree + 10, ChristmasTree_Y_Pos - 75, 10, 10);
      ellipse(z_ChristmasTree + 30, ChristmasTree_Y_Pos - 75, 10, 10);

    //anchor point
    //    fill(255,0,0);
    //    ellipse(ChristmasTreeX,ChristmasTree_Y_Pos,10,10);
      }

    function drawAllSnowMountains() {
        for (let i = 0; i < SnowMountains.length; i++) {
          drawSnowMountain(SnowMountains[i]);
        }
      }

    function drawSnowMountain(z_SnowMountain) {
      let x1 = z_SnowMountain.pos_x - z_SnowMountain.width / 2;
      let y1 = z_SnowMountain.pos_y + z_SnowMountain.height / 2;
      let x2 = z_SnowMountain.pos_x;
      let y2 = z_SnowMountain.pos_y - z_SnowMountain.height / 2;
      let x3 = z_SnowMountain.pos_x + z_SnowMountain.width / 2;
      let y3 = z_SnowMountain.pos_y + z_SnowMountain.height / 2;

      // Draw the snowy part of the mountain
      fill(255);
      stroke(0);
      strokeWeight(0);
      triangle(x1, y1, x2, y2 - 50, x3, y3);
      noStroke();

      // Draw the rocky part of the mountain
      fill(100);
      triangle(x1, y1, x2, y2 + 50, x3, y3);

      // Add some texture to the rocky part of the mountain
      fill(50);
      let noiseScale = 0.01;
      let noiseVal = 0;
      let x = x1;
      let y = y1;
      let amplitude = 20;
      beginShape();
      vertex(x1, y1);
      while (x < x3) {
        x += 5;
        noiseVal = noise(x * noiseScale, y * noiseScale);
        y = map(noiseVal, 0, 1, y1 - amplitude, y1 + amplitude);
        vertex(x, y);
      }
      vertex(x3, y3);
      vertex(x1, y1);
      endShape(CLOSE);
    }


    function drawGround(){
        noStroke();
        fill(255,250,250);
        rect(0, snowPos_y, width, height - snowPos_y);
        fill(205,133,63);
        rect(0, snowPos_y+20, width, height - snowPos_y);
    }

    function drawSun(){
        fill(245,163,62);
        ellipse(1200,100,100,100);
    }
