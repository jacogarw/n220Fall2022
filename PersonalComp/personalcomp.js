function setup() {
    createCanvas(1080,1080);
}
x=500
white=255
function draw() {
    background(255);
    //Chicken comes first
    //Head of chicken
    fill(255,234,0); //colors the head yellow
    stroke(225,224,0);//makes the line color slightly darker
    rect(465,470,70,100);
    ellipse(x,450,100,100);//head base 
    fill(0)//colors the eyes
    //eyes
    ellipse(475,440,20,20);
    ellipse(525,440,20,20);
    fill(255,165,0);//colors it orange
    stroke(255,165,0);
    //beak
    beginShape();
    vertex(490,460);
    vertex(510,460);
    vertex(x,490);
    endShape();
    
    
    //egg
    fill(white)//colors it white
    stroke(0)//makes the line black
arc(x,x,160,200, 0,radians(180));//base of the egg


//line(420,x,580,x) Used as a guide for the egg cracks
beginShape() ;//cracks in the egg
vertex(420,x);
vertex(450,480);
vertex(460,520);
vertex(480,480);
vertex(x,x);
vertex(520,475);
vertex(530,x);
vertex(550,530);
vertex(580,x);
endShape();

}



