//Formula: A = P(1 + r/n)nt</sup>sup> + PMT((1 + r/n)nt - 1)/(r/n)
const btn = document.getElementsById("calculate-button");
btn.addEventListener("click", calculate);

function calculate(){
    //Formula: A = P(1 + r/n)nt</sup>sup> + PMT((1 + r/n)nt - 1)/(r/n)
    let P = Number(document.getElementById("Starting-balance").value);
    let r = Number(document.getElementById("Interest-rate").value)/100;
    let n = Number(document.getElementById("compound").value);
    let t = Number(document.getElementById("years").value);
    let PMT = Number(document.getElementById("contribution").value);

    let temp = Math.pow((1 + r/n), n*t);
    let result1 = P*temp;
    let result2 = PMT*(temp - 1)/(r/n);
}