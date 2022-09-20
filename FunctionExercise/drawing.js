function setup() {
    createCanvas(1000,1000);
}
function DrawBoat(x,y) {
    arc(x,y,100,70, 0,radians(180))
    line(x-50,y,x+50,y);
    line(x,y-60,x,y);
    triangle(x,y-60,x+30,y-50,x,y-40);
}

function draw() {
    DrawBoat(mouseX,mouseY);
}