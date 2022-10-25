let bill=prompt("What is your bill?")

function tipcalc() {
    let tip=bill * .20;
    let total= tip + Number(bill);
    console.log("Tip:"+tip+"Total:"+total)
}