let badwords=["clear","water","tires"]


function BadFind(){
    let badcount=0;
    let text=document.getElementById("goodword").value

let textsplit= text.split(" ")
console.log(textsplit)
for(x=0;x<textsplit.length;x++) {
    
        if (textsplit[x] == badwords[0] || x == badwords[1] || x == badwords[2] )  {
            badcount++;
            console.log("succ")
            document.getElementById("BadDvCnt").innerHTML="There were " + badcount + " bad words"
            
        }
        if (textsplit[x] == badwords[1]){
            badcount++;
            document.getElementById("BadDvCnt").innerHTML="There were " + badcount + " bad words"
        }
        if (textsplit[x] == badwords[2]){
            badcount++;
            document.getElementById("BadDvCnt").innerHTML="There were " + badcount + " bad words"
        }
   
        
    
   
}

}


