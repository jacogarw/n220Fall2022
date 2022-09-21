//Jacob Garwood
//9/7/2022
//N220
let speed= {
    speedleft:Math.random(5-10),
    speeddown:Math.random(5-10)

}
function setup() {
    createCanvas(800,600);
}

function draw() {
     PosX=speed.speedleft;
     PosY=speed.speeddown;
ellipse(PosX,PosY,100,100);
if (PosX<=0) {
    speed.speedleft*=-1;
}
if (PosX>=800) {
    speed.speedleft*=-1;
}
if (PosY>=600) {
    speed.speeddown*=-1;
}
if (PosY<=0) {
    speed.speeddown*=-1;
}



}
