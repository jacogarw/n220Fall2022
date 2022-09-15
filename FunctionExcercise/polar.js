function setup() {
    createCanvas(1000,1000)
}
function polarPoint(r) {
    let x=r * Math.sin(mouseX);
    let y=r * Math.cos(mouseX);
    return createVector(x,y);
}

function draw() {
    translate(100,100);
    let result=polarPoint();
    
    ellipse(result.x,result.y,10)
}