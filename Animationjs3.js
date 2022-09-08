//Jacob Garwood
//9/7/2022
//N220

let speedleft=5;
let speeddown=5;
let PosX=400;
let PosY=300;
function setup() {
    createCanvas(800,600);
}
function draw() {
PosX=PosX-speedleft;
PosY=PosY+speeddown;
ellipse(PosX,PosY,100,100);
if (PosX<=0) {
    speedleft*=-1;
}
if (PosX>=800) {
    speedleft*=-1;
}
if (PosY>=600) {
    speeddown*=-1;
}
if (PosY<=0) {
    speeddown*=-1;
}


}
