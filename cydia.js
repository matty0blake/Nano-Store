var whatiscydia = document.getElementById("whatiscydia");
var harms = document.getElementById("harms");
var goodsofcydia = document.getElementById("goodsofcydia");
var P1 = document.getElementById("cydiaP1");

whatiscydia.style.height = "50px";
harms.style.height = "50px";
goodsofcydia.style.height = "50px";
whatiscydia.addEventListener("click", opp);
harms.addEventListener("click", opp);
goodsofcydia.addEventListener("click", opp);

function opp() {
  if (this.style.height === "50px") {
    this.style.height = "auto";
  } else {
    this.style.height = "50px";
  }
}
