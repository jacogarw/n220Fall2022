let box= {
    Box1: document.getElementById("square1"),
    Box2: document.getElementById("square2"),
    Box3: document.getElementById("square3"),
    Box4: document.getElementById("square4"),
    Box5: document.getElementById("square5"),
    Box6: document.getElementById("square6"),
}
let orange="#FFBB00"
function Click() {
    box.style.backgroundColor=orange;
    box.style.width="100px";
    console.log("It worked!")
}
