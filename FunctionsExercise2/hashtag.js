let textHash=document.getElementById("HashT")

function hashremove() { 
    let noHash=textHash.value.replaceAll("#", " ");

    document.getElementById("noHash").innerHTML=noHash
    
}