ColorRed=(170,200,150);
function setup() {
    createCanvas(1000,1000);
   
   
}


function removeRed(red) {
    red.setRed(0);
    
    return red;
    
}


function draw() {
let noRed=removeRed(color(170,200,150));
   fill(noRed);
    ellipse(100,100,100,100);
    
}
