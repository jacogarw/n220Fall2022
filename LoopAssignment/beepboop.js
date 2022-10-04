let Boop=document.getElementById("Beep")

for (i=1;i<=25;i++) {
    //in I210, I learned about the modulo function, which factors the remainder of division. Using that, I
    //formatted my code accordingly.
    if (i%5==0 && i%3==0) {
    Boop.innerHTML+= "Beepbop "
    }
    else  if (i%3==0) {
        Boop.innerHTML+="Beep "
    }
    else if (i%5==0) {
        Boop.innerHTML+="Bop "
    }
   
    else {
        Boop.innerHTML+= i + " ";
    }
    
}