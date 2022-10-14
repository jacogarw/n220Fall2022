let Var=document.getElementsByClassName("square")
console.log(Var)

let orange="#FFBB00"

function Click(x) {
    for(i=0;i<Var.length;i++){
    Var[i].removeAttribute('style');
    }
    Var[x].style.backgroundColor=orange;
    Var[x].style.width="100px";
    document.getElementById("Top").innerHTML=Var[x].innerHTML;
    Var[x].style.fontWeight="bold";
    console.log("It worked!")
}

