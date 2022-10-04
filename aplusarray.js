let myDiv = document.getElementById("myDiv")
let myData = [1,20,2,30,3,40,4,90];

for (let i = 0; i<myData.length;i++) {
    myDiv.innerHTML += myData[i] + " "
    console.log(myData[i])
    if (myData[i]<10) {
        myDiv.innerHTML+= "a";
    }
}