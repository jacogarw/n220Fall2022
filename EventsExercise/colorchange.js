


let divsquare=document.getElementsByClassName("eventcolor")
let element=document.getElementById("eventCheck")

console.log(divsquare)
element.addEventListener("click",clicked)

for (i=0;i<divsquare.length;i++)  {
divsquare[i].style.float="left";
divsquare[i].style.backgroundColor="#808080";
divsquare[i].style.width="200px";
divsquare[i].style.height="200px";
divsquare[i].style.margin="5px";
}

function clicked(event) {
    let clr= event.target.getAttribute("clr")
    console.log(clr)   
    if (clr == "red"){
    event.target.style.backgroundColor="#FF0000"
    
}
if (clr == "green"){
    event.target.style.backgroundColor="#00FF00"
    
}
if (clr == "blue"){
    event.target.style.backgroundColor="#0000FF"
    
}
    

}