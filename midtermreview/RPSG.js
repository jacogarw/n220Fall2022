let PlayerChoice=document.getElementsByClassName("choice")
let CompArray=["Rock","Paper","Scissors"]
var innerscore=0;
function RPS(x) {    
CompDecision=CompArray[Math.floor(Math.random() * CompArray.length)];
console.log(CompDecision);
if (x=3) {
    innerscore-0.5;
}
else if (x=0) {
    if (CompDecision="Paper") {
        innerscore-1;
    }
    if (CompDecision="Scissors") {
        innerscore+1;
    }
    if (CompDecision="Rock")
        innerscore=innerscore;
    }

else if (x=1) {
    if (CompDecision="Rock") {
        innerscore+1;
    }
    if (CompDecision="Scissors"){
        innerscore-1;
    }
    if (CompDecision="Paper"){
        innerscore=innerscore;
    }
}
else if (x=2) {
    if (CompDecision="Rock") {
        innerscore-1;
    }
    if (CompDecision="Paper"){
        innerscore+1;
    }
    if (CompDecision="Scissors") {
        innerscore=innerscore;
    }
}
else {
    innerscore=innerscore
}
score=innerscore;

document.getElementById("Score").innerHTML=innerscore;
}



