let Rectleft = {
 x:0,
 y:250,
 width:25,
 height:100
}
let Rectright = {
    x:450,
    y:250,
    width:25,
    height:100
   }
function setup() {
    createCanvas(500,500);
}
function Rect(x,y) {
   rect(Rectright.x,Rectright.y,Rectright.width,Rectright.height)
    rect(Rectleft.x,Rectleft.y,Rectleft.width,Rectleft.height)
}
function draw() {
  Rect();
    if (keyIsDown(UP_ARROW)) {
    Rectleft.y=Rectleft.y+5;
    Rectright.y=Rectright.y-5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        Rectright.y=Rectright.y+5;
        Rectleft.y=Rectleft.y-5;
    }
   
}