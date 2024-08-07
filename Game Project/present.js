var Presents
const Present_SIZE = 40;

function setupPresents(){
    
var Present1 = {x_pos: -100, y_pos:snowPos_y-20, size : Present_SIZE,isFound: false};
var Present2 = {x_pos: 20, y_pos:snowPos_y-20, size : Present_SIZE,isFound: false};
var Present3 = {x_pos: 400, y_pos:snowPos_y-20, size : Present_SIZE,isFound: false};
var Present4 = {x_pos: 900, y_pos:snowPos_y-20, size : Present_SIZE,isFound: false};
var Present5 = {x_pos: 1700, y_pos:snowPos_y-20, size : Present_SIZE,isFound: false};
var Present6 = {x_pos: 2500, y_pos:snowPos_y-20, size : Present_SIZE,isFound: false};
        
    Presents = [Present1,Present2,Present3,Present4, Present5, Present6]
}

function drawAllPresents(){
    for(i in Presents) {
        var Present = Presents[i];
        drawPresent(Present);
    }
}

function drawPresent(Present){
    if(Present.isFound==false){
        fill(255,30,30);
        rectMode(CENTER);
        rect(Present.x_pos, Present.y_pos,Present.size,Present.size);
        rectMode(CORNER);
        fill(255,215,0);
        ellipse(Present.x_pos,Present.y_pos-25,15,15);
        fill(0);
        rect(Present.x_pos-20,Present.y_pos,40,5);
        fill(0);
        rect(Present.x_pos-2.5,Present.y_pos-20,5,40);
    }
}