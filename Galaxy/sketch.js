var stars = [];
function setup() {
    createCanvas(800,800);
    for(var i=0;i<400;i++){
        stars[i]=new Star();
        console.log(stars[i]);
    }
}
var speed;
function draw() {
    speed = map(mouseX,0,width,0,50);
    background(0);
    translate(width/2,height/2);
    for(var i=0;i<stars.length;i++){
        stars[i].update();
        stars[i].show();
    }
}