    //This JS file includes all the function related to the platform
    var Platforms;
    var onPlatform;

    //This code allow me to add more platforms
    function setupPlatforms(){
    Platforms = [];
    for(i=0;i<4;i++){
        Platforms.push(createPlatforms(random(-200,2500),snowPos_y-70,100));
    }}
    
    //Drawing of platforms
    function drawPlatforms(){
        for (var i = 0; i < Platforms.length; i++){
    Platforms[i].draw();
    }}

    function createPlatforms(x , y, length) {
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function(){
            // Main body of the platform
            fill(30, 70, 120);
            rect(this.x, this.y, this.length, 10);

            // Left edge of the platform
            fill(20, 50, 90);
            rect(this.x, this.y, 5, 10);

            // Right edge of the platform
            fill(20, 50, 90);
            rect(this.x + this.length - 5, this.y, 5, 10);

            // Top edge of the platform
            stroke(30, 70, 120);
            strokeWeight(3);
            line(this.x, this.y + 3, this.x + this.length, this.y + 3);
            line(this.x, this.y + 6, this.x + this.length, this.y + 6);
    },
        checkContact: function(gc_x, gc_y)
        {
        if (gc_x> this.x && gc_x < this.x + this.length)
        {
            var d = this.y - gc_y;
            if(d >= 0 && d <5)
                {
                    return true;
                }
    }
            return false;
    }
    }
    return p;
    }