//Jacob Garwood
//N220 Fall
//9 29 2022
let square = document.getElementById("Square")
let BoxWidth="100";
let BoxHeight="100";
square.style.width=BoxWidth+"px";
square.style.height=BoxHeight+"px";
square.style.backgroundColor="#09EB3D";



function larger() {
    BoxWidth=BoxWidth* "1.1" ;
    BoxHeight = BoxHeight* "1.1";
    square.style.width=BoxWidth+"px";
    square.style.height=BoxHeight+"px";
    console.log(BoxWidth);
    console.log(BoxHeight);
}
