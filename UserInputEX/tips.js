let bill=document.getElementById("bill")

function tipcalc() {
    let tip=bill.value * .20;
    let total= tip + Number(bill.value);
    console.log("Tip:"+tip+"Total:"+total)
}