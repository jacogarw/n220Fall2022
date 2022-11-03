let randNum=0

function rand() {
    randNum=Math.floor(Math.random() * 10) + 1;
    return randNum
}
function randomshow() {
   let RanDiv=document.getElementById("RanNum")
   rand()
   RanDiv.innerHTML=randNum
}