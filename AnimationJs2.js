//Jacob Garwood
//9/7/2022
//N220
let xPosition=0
function setup() {
    createCanvas(800,600);
}
function draw() {
    ellipse(xPosition,300,100,100);
    xPosition=xPosition+5;
    if (xPosition>=800){
        xPosition=0;
    };
}
