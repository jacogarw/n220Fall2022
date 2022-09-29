//Jacob Garwood
//9/7/2022
//N220
PosX=400
PosY=300
let speed= {
    speedleft:5,
    speeddown:5

}
function setup() {
    createCanvas(800,600);
}

function draw() {
PosX=PosX+speed.speedleft;
PosY=PosY+speed.speeddown;
ellipse(PosX,PosY,100,100);
if (PosX<=0) {
    speed.speedleft*=-(Math.random() * (10-5)+5)
    fill("#FC4E14")
}
if (PosX>=800) {
    speed.speedleft*=-(Math.random() * (10-5)+5)
    fill("#FC4E14")
}
if (PosY>=600) {
    speed.speeddown*=-(Math.random() * (10-5)+5)
    fill("#4815FF")
}
if (PosY<=0) {
    speed.speeddown*=-(Math.random() * (10-5)+5)
    fill("#4815FF")
}



}
