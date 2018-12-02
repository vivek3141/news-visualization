var x = 0;
var xspeed = 3;
var yspeed = 3;
var y = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
    text("Hi", x, y);
    if(y > height){
        yspeed = -3;
    }
    if(y < 0){
        yspeed = 3;
    }
    if (x > width) {
        xspeed = -3;
    }
    if(x < 0){
        xspeed = 3;
    }
    x = x + xspeed;
    y = y + yspeed;
}