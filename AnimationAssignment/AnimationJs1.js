//Jacob Garwood
//9/7/2022
//N220
function setup() {
    createCanvas(400,300);
};
function draw() {
    ellipse(mouseX,mouseY,50,50);
    if (mouseX>=200) {
        fill(255, 0, 0)
    }
    else {
        fill(0,0,255)
    };
}