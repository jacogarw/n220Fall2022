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
    [request[6],request[7],request[8]]]
for (i=0;i<request.length;i++) {
    request[i].style.height="20px"
    request[i].style.width="30px"
    request[i].innerHTML= " "
    request[i].removeAttribute("clicked")
    request[i].style.backgroundColor="white"}
function select(event) {
    let reqclicked = document.querySelectorAll("button[clicked]");
    console.log(reqclicked)
    if (current%2==0){
    event.target.innerHTML=player1
    event.target.style.backgroundColor="#FF6E60"
    current++}
    else {
    event.target.innerHTML=player2
    event.target.style.backgroundColor="#61FFA7"
    current++}
    event.target.setAttribute("clicked","yes")
//Vertical win con for X
    for (x=0;x<board.length;x++) {
    if (board[x][0].innerHTML=="X" && board[x+1][0].innerHTML=="X" && board[x+2][0].innerHTML=="X") {
            resultPlay.innerHTML="X wins!"}
    if (board[x][1].innerHTML=="X" && board[x+1][1].innerHTML=="X" && board[x+2][1].innerHTML=="X") {
            resultPlay.innerHTML="X wins!"}
    if (board[x][2].innerHTML=="X" && board[x+1][2].innerHTML=="X" && board[x+2][2].innerHTML=="X") {
            resultPlay.innerHTML="X wins!"}
    if (board[0][x].innerHTML=="X" && board[0][x+1].innerHTML=="X" && board[0][x+2].innerHTML=="X") {
            resultPlay.innerHTML="X wins!"}
    if (board[1][x].innerHTML=="X" && board[1][x+1].innerHTML=="X" && board[1][x+2].innerHTML=="X") {
            resultPlay.innerHTML="X wins!"}
    if (board[2][x].innerHTML=="X" && board[2][x+1].innerHTML=="X" && board[2][x+2].innerHTML=="X") {
            resultPlay.innerHTML="X wins!"}
    if (board[0][x].innerHTML=="X" && board[0][x+1].innerHTML=="X" && board[0][x+2].innerHTML=="X") {
            resultPlay.innerHTML="X wins!"}
    if (board[x][1].innerHTML=="X" && board[x+1][1].innerHTML=="X" && board[x+2][1].innerHTML=="X") {
            resultPlay.innerHTML="X wins!"}
    if (board[x][x].innerHTML=="X" && board[x+1][x+1].innerHTML=="X" && board[x+2][x+2].innerHTML=="X") {
            resultPlay.innerHTML="X wins!"}
    if (board[x][x+2].innerHTML=="X" && board[x+1][x+1].innerHTML=="X" && board[x+2][x].innerHTML=="X") {
            resultPlay.innerHTML="X wins!"}
    //Logic for O winning
    if (board[x][0].innerHTML=="O" && board[x+1][0].innerHTML=="O" && board[x+2][0].innerHTML=="O") {
        resultPlay.innerHTML="O wins!"}
    else if (board[x][1].innerHTML=="O" && board[x+1][1].innerHTML=="X" && board[x+2][1].innerHTML=="O") {
        resultPlay.innerHTML="O wins!"}
    else if (board[x][2].innerHTML=="O" && board[x+1][2].innerHTML=="O" && board[x+2][2].innerHTML=="O") {
        resultPlay.innerHTML="O wins!"}
    if (board[0][x].innerHTML=="O" && board[0][x+1].innerHTML=="O" && board[0][x+2].innerHTML=="O") {
        resultPlay.innerHTML="O wins!"}
    if (board[1][x].innerHTML=="O" && board[1][x+1].innerHTML=="O" && board[1][x+2].innerHTML=="O") {
        resultPlay.innerHTML="O wins!"}
    if (board[1][x].innerHTML=="O" && board[1][x+1].innerHTML=="O" && board[1][x+2].innerHTML=="O") {
        resultPlay.innerHTML="O wins!"}
    if (board[2][x].innerHTML=="O" && board[2][x+1].innerHTML=="O" && board[2][x+2].innerHTML=="O") {
        resultPlay.innerHTML="O wins!"}
    if (board[0][x].innerHTML=="O" && board[0][x+1].innerHTML=="O" && board[0][x+2].innerHTML=="O") {
        resultPlay.innerHTML="O wins!"}
    if (board[x][1].innerHTML=="O" && board[x+1][1].innerHTML=="O" && board[x+2][1].innerHTML=="O") {
        resultPlay.innerHTML="O wins!"}
    if (board[x][x].innerHTML=="O" && board[x+1][x+1].innerHTML=="O" && board[x+2][x+2].innerHTML=="O") {
        resultPlay.innerHTML="O wins!"}
    if (board[x][x+2].innerHTML=="O" && board[x+1][x+1].innerHTML=="O" && board[x+2][x].innerHTML=="O") {
        resultPlay.innerHTML="O wins!"}}}
function reset() {
for (i=0;i<request.length;i++) {
        request[i].style.height="20px"
        request[i].style.width="30px"
        request[i].innerHTML= " "
        request[i].removeAttribute("clicked")
        request[i].style.backgroundColor="white"}
    resultPlay.innerHTML=" "}
