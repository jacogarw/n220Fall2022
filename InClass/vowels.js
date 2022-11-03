let word=document.getElementById("RawText")
let VowDiv=document.getElementById("VowResults")
let vowels = ["a","e","i","o","u"]
let noVow=document.getElementById("NoVow")

function RemoveVowel(x,y) {
    let NoVow=x.value.replaceAll(vowels[0-4], " ");
    y.innerHTML=NoVow
}
function Vowelcheck() {
let VowResult= word.value.toLowerCase().includes(vowels[0||1||2||3||4])
if (VowResult==true) {
    VowDiv.innerHTML="Yes, it does contain a value. Here is what it looks like without vowels:"
    RemoveVowel(word,noVow)
}
else {
    VowDiv.innerHTML="No, it does not contain a vowel."
}
}


 