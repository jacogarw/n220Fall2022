let beginline = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
}
//Function to tell the distance of the line
function distance(p1,p2) {
  
    let dx = p1.x - p2.x;
    let dy = p1.y - p2.y;
    
    //return the distance
     return Math.sqrt(dx*dx + dy*dy);

  }
  
function draw() {
  background(220);
  //sets the beginning of the line
  if(mouseIsPressed) {
    beginline.x = mouseX;
    beginline.y = mouseY;
  }
  //length of the line
  let len = distance( beginline, { x: mouseX, y: mouseY });
  
  if(len > 120) {
    stroke("#FF0000");
  } else {
    stroke("#000000");
  }
  //line command
  line(beginline.x, beginline.y , mouseX, mouseY);
}

