let r=0;
let g=0;
let b=0;
let element= document.getElementById("eventMix")
let block= document.getElementById("block")
element.addEventListener("click",mix)

block.style.width="500px";
block.style.height="500px";

function mix(event) {
block.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
let addby=Number(event.target.getAttribute("addby"))
let clr=event.target.getAttribute("clr")
if (clr=="red") {
    if (addby==1) {
        
        r+=addby
    }
    if (addby==5) {
        r+=addby
    }
    if (addby==10) {
        r+=addby
    }
}
if (clr=="green") {
    if (addby==1) {
        
        g+=addby
    }
    if (addby==5) {
        g+=addby
    }
    if (addby==10) {
        g+=addby
    }
}
if (clr=="blue") {
    if (addby==1) {
        
        b+=addby
    }
    if (addby==5) {
        b+=addby
    }
    if (addby==10) {
        b+=addby
    }
}
document.getElementById("rgbshow").innerHTML= "The current RGB Value is: " + r + ", " + g + ", " + b + "";
}