let element= document.getElementById("message")
element.addEventListener("click",consolemessage)


function consolemessage(event){
event.target.innerHTML="CLICKED!!!!"
event.target.style.backgroundColor="#FF0000"
console.log(Number(event.target.getAttribute("number")))
}