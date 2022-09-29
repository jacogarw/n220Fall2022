//Jacob Garwood
//N220 Fall
//9 29 2022
let mcDv=document.getElementById("box");
let clicks=0;


function clk() {
   mcDv.innerHTML="mc";
   clicks++;
   if(clicks>2)mcDv.innerHTML="divdivdiv";
}
mcDv.style.backgroundColor="#F5BA0A";
mcDv.style.width="100px";
mcDv.style.height="100px";
