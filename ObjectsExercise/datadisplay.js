let Boat = {
BoatX: 100,
HullX: 100,
HullY: 100,
HullSize1: 100,
HullSize2: 70,
HullSize3: 0,
HullRadian:180,
DeckX1: 50,
DeckY: 100,
DeckX2: 150,
SailX:100,
SailY1:40,
SailY2:100,
FlagX1:100,
FlagX2:130,
FlagY1:40,
FlagY2:50,
FlagY3:60
}
function setup() {
    createCanvas(1000,1000);
}
function drawBoat() {
    arc(Boat.BoatX,Boat.HullY,Boat.HullSize1,Boat.HullSize2,Boat.HullSize3,radians(Boat.HullRadian));
    line(Boat.DeckX1,Boat.DeckY,Boat.DeckX2,Boat.DeckY);
    line(Boat.SailX,Boat.SailY1,Boat.SailX,Boat.SailY2);
    triangle(Boat.FlagX1,Boat.FlagY1,Boat.FlagX2,Boat.FlagY2,Boat.FlagX1,Boat.FlagY3);
}
function draw() {
  drawBoat();
    
}

