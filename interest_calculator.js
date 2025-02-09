//Formula: A = P(1 + r/n)nt</sup>sup> + PMT((1 + r/n)nt - 1)/(r/n)
const btn = document.getElementsById("calculate-button");
btn.addEventListener("click", calculate);

function calculate(){
    //Formula: A = P(1 + r/n)nt</sup>sup> + PMT((1 + r/n)nt - 1)/(r/n)
    let P = Number(document.getElementById("Starting-balance").value);
    let r = Number(document.getElementById("Interest-rate").value)/100;
}