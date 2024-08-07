    //This JS file includes all the function related to the Ponds
    var Ponds;
   
    //Puting ponds in different location
    function setupPonds(){
        var Pond1 = {x_pos: 110, width: 70};
        var Pond2 = {x_pos: 580, width: 100};
        var Pond3 = {x_pos: 1200, width: 80};
        var Pond4 = {x_pos: 2300, width: 90};
        var Pond5 = {x_pos: -400, width: 90};
        Ponds = [Pond1,Pond2,Pond3,Pond4, Pond5];
    }

    //For Loop of ponds
    function drawPonds () {
        for ( var i =0; i < Ponds.length; i++){
        drawPond(Ponds[i]);
        }
    }

    //Drawings of ponds
    function drawPond(z_Pond) {
        fill(162, 210, 250); 
        rect(z_Pond.x_pos,snowPos_y,z_Pond.width, height-snowPos_y);
        fill(0,0,205);
        rect(z_Pond.x_pos,snowPos_y+100,z_Pond.width, height-snowPos_y);
    //anchor point
    //    fill(255,0,0);
    //    ellipse(Pond.x_pos,snowPos_y+100,10,10);
    }
