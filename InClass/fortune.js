let fortresp = ["Don’t hold onto things that require a tight grip.", "Vulnerability sounds like faith and looks like courage.",
"No one is you and that is your superpower.","You have to believe in your heart what you know to be true about yourself. And let that be that."]

function fortune() {
    document.getElementById("cookie").innerHTML=fortresp[Math.floor(Math.random()*fortresp.length)]
}//determines the fortune by using the math.floor and math.random method

function addfort() {
    let newfort = document.getElementById("newfort");
    fortresp.push(newfort.value);
    newfort.value= " ";
}//adds a new fortune by having a text input field and clearing it after