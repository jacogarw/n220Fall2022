let element=document.getElementById("tictacevent")
element.addEventListener("click",select)
let resultPlay=document.getElementById("results")
let player1="X"
let player2="O"
let current = 0
let request = document.querySelectorAll("button[Box]");
let board = [
    [request[0],request[1],request[2]],
    [request[3],request[4],request[5]],
    [request[6],request[7],request[8]]
]

function select(event) {
    let reqclicked = document.querySelectorAll("button[clicked]");
    console.log(reqclicked)
    console.log(board)
    for (let i=0;i<reqclicked.length;i++) {
        reqclicked[i].addEventListener("click",result)
    }
    if (current%2==0){
    
    event.target.innerHTML=player1
    current++
    }
    else {
    event.target.innerHTML=player2
    current++
    }
  
    
    event.target.setAttribute("clicked","yes")
    //Logic for X winning
    if (request[0].innerHTML=="X" && request[1].innerHTML=="X" && request[2].innerHTML=="X"){
        resultPlay.innerHTML="X wins!"
    }
    else if (request[3].innerHTML=="X" && request[4].innerHTML=="X" && request[5].innerHTML=="X"){
        resultPlay.innerHTML="X wins!"
    }
    else if (request[6].innerHTML=="X" && request[7].innerHTML=="X" && request[8].innerHTML=="X"){
        resultPlay.innerHTML="X wins!"
    }
    else if (request[0].innerHTML=="X" && request[3].innerHTML=="X" && request[6].innerHTML=="X"){
        resultPlay.innerHTML="X wins!"
    }
    else if (request[1].innerHTML=="X" && request[4].innerHTML=="X" && request[7].innerHTML=="X"){
        resultPlay.innerHTML="X wins!"
    }
    else if (request[2].innerHTML=="X" && request[5].innerHTML=="X" && request[8].innerHTML=="X"){
        resultPlay.innerHTML="X wins!"
    }
    else if (request[0].innerHTML=="X" && request[4].innerHTML=="X" && request[8].innerHTML=="X"){
        resultPlay.innerHTML="X wins!"
    }
    else if (request[2].innerHTML=="X" && request[4].innerHTML=="X" && request[6].innerHTML=="X"){
        resultPlay.innerHTML="X wins!"
    }
    else if (request[0].innerHTML=="X" && request[1].innerHTML=="X" && request[2].innerHTML=="X"){
    resultPlay.innerHTML="X wins!"
    }
    else if (request[3].innerHTML=="X" && request[4].innerHTML=="X" && request[5].innerHTML=="X"){
        resultPlay.innerHTML="X wins!"
    }
    else if (request[6].innerHTML=="X" && request[7].innerHTML=="X" && request[8].innerHTML=="X"){
        resultPlay.innerHTML="X wins!"
    }
    else if (request[0].innerHTML=="X" && request[3].innerHTML=="X" && request[6].innerHTML=="X"){
        resultPlay.innerHTML="X wins!"
    }
    else if (request[1].innerHTML=="X" && request[4].innerHTML=="X" && request[7].innerHTML=="X"){
        resultPlay.innerHTML="X wins!"
    }
    else if (request[2].innerHTML=="X" && request[5].innerHTML=="X" && request[8].innerHTML=="X"){
        resultPlay.innerHTML="X wins!"
    }
    else if (request[0].innerHTML=="X" && request[4].innerHTML=="X" && request[8].innerHTML=="X"){
        resultPlay.innerHTML="X wins!"
    }
    else if (request[2].innerHTML=="X" && request[4].innerHTML=="X" && request[6].innerHTML=="X"){
        resultPlay.innerHTML="X wins!"
    }
    //LOGIC FOR O WINNING
    else if (request[0].innerHTML=="O" && request[1].innerHTML=="O" && request[2].innerHTML=="O"){
        resultPlay.innerHTML="O wins!"
    }
    else if (request[3].innerHTML=="O" && request[4].innerHTML=="O" && request[5].innerHTML=="O"){
        resultPlay.innerHTML="O wins!"
    }
    else if (request[6].innerHTML=="O" && request[7].innerHTML=="O" && request[8].innerHTML=="O"){
        resultPlay.innerHTML="O wins!"
    }
    else if (request[0].innerHTML=="O" && request[3].innerHTML=="O" && request[6].innerHTML=="O"){
        resultPlay.innerHTML="O wins!"
    }
    else if (request[1].innerHTML=="O" && request[4].innerHTML=="O" && request[7].innerHTML=="O"){
        resultPlay.innerHTML="O wins!"
    }
    else if (request[2].innerHTML=="O" && request[5].innerHTML=="O" && request[8].innerHTML=="O"){
        resultPlay.innerHTML="O wins!"
    }
    else if (request[0].innerHTML=="O" && request[4].innerHTML=="O" && request[8].innerHTML=="O"){
        resultPlay.innerHTML="O wins!"
    }
    else if (request[2].innerHTML=="O" && request[4].innerHTML=="O" && request[6].innerHTML=="O"){
        resultPlay.innerHTML="O wins!"
    }
    
    
}

function result() {
}
function reset() {
    for (i=0;i<request.length;i++) {
        request[i].innerHTML= " "
        request[i].removeAttribute("clicked")
    }
    resultPlay.innerHTML=" "
}