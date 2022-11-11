let textInput = document.getElementById("numinput")
let sum=0;
let avg=0;
function AvgMake() {
    
    let NewInput = document.getElementById("numinput").value
    let numInput = NewInput.split(",");
   for(i=0;i<numInput.length;i++){
sum=sum+Number(numInput[i])
   }
   avg=sum/numInput.length;
    
console.log(sum)
console.log(avg)
textInput.value=" ";
}