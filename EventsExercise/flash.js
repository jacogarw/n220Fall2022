let element=document.getElementById("flashevent")
element.addEventListener("click",showanswer)
let ans=document.getElementById("answer")


function showanswer(event) {
    let answer=event.target.getAttribute("answer")
 if (answer=="indy") {
    ans.innerHTML = "Indianapolis"
 }
 if (answer=="flip") {
    ans.innerHTML = "You Flip Them"
 }
 if (answer=="javascript") {
    ans.innerHTML = "Javascript"
 }
}