let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

   for (x=0;x<objects.length;x++){
    let newDv=document.createElement("div");
    newDv.innerHTML="Hello";
    newDv.style.color=objects[x].color;
    newDv.style.color=objects[x].height;
    newDv.style.color=objects[x].width;

    
    
    
    document.body.appendChild(newDv);
    

   }