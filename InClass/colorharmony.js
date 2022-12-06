
//application vars
let dvWheel = document.getElementById("wheel");
let colors = [ "#f9ff40", "#ffcc40", "#ff821c", "#ff591c", "#d11b1b", "#940f5a",  "#611069", "#4d0e9e", "#1430e3", "#14d9e3", "#05a80a", "#b4fa3c" ];
let storedcolor=document.getElementById("Colorstore")
let SelectedColor=""
//setup
colors.forEach( function(color, i) {
  let rot = (i / colors.length) * 360;
  
  let newSelection = document.createElement("div");

  newSelection.style.backgroundColor = color;
  newSelection.style.transform = `rotate(${rot}deg) translate(8em)`;
  newSelection.dataset.color = color;
  //newSelection.innerHTML = color;
  newSelection.classList.add("option");
  wheel.appendChild(newSelection);
  dvWheel.addEventListener("click",clicked)
  newSelection.addEventListener("click",selectColor)
}

)

//functions
function selectColor(event) {
    SelectedColor=event.target.dataset.color
    console.log(SelectedColor)
    storedcolor.style.color=SelectedColor
}
function clicked(event) {
    storedcolor.style.backgroundColor=SelectedColor
}
    
    




//make handler for clicking on new selection
