//Jacob Garwood
//9/7/2022
//N220
let ball = {
    xPosition:0,
    yPosition:300,
    size:100,
    velocity:5

}
function setup() {
    createCanvas(800,600);
}
function draw() {
    circle(ball.xPosition,ball.yPosition,ball.size);
    ball.xPosition=ball.xPosition+ball.velocity;
    if (ball.xPosition>=800){
        ball.xPosition=0;
    };
}
