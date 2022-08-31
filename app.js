var size=100;

function setup() {
    createCanvas(1200, 1080);
  }
 
  function draw() {
    ellipse(mouseX,mouseY,size);
    console.log(size);
    if (mouseIsPressed){
      size ++;
    }  {
      
     }
     if (size>=150) {
      size=150;
  
     }
     
  }