let myDiv=document.getElementById("checker")


function divider(x) {
    let divided=Boolean(x%7==0)
    console.log(divided)
    return divided
    
    
}
function dividecheck() {
    let myNum=document.getElementById("sevNum").value

   if (divider(myNum)==true) {
    document.getElementById("checker").innerHTML="It is divisible by 7"
   }
   if (divider(myNum)==false) {
    document.getElementById("checker").innerHTML="It is not divisible by 7"
   }
}