let television = { 
BoxPosX: 250,
BoxPosY:250,
BoxWidth: 250,
BoxHeight: 200,
ScreenPosX:285,
ScreenPosY:265,
ScreenWidth: 180,
ScreenHeight:150,
boxColor: "#D4F1FA",
screenColor: "#4D5759",
lineX:30,
lineY:30
}
function DrawTV() {
fill(television.screenColor)
rect(television.BoxPosX, television.BoxPosY,television.BoxWidth,television.BoxHeight)
fill(television.boxColor)
rect(television.ScreenPosX,television.ScreenPosY,television.ScreenWidth,television.ScreenHeight)
fill(0)
line(television.BoxWidth/2,televisison.BoxPosY+television.lineY,Box)
}
function setup() {
    createCanvas(500,500)
}

function draw() {
    DrawTV();
}