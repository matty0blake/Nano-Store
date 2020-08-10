var home = document.getElementById("home");
var cydia = document.getElementById("cydia");
var games = document.getElementById("games");
var appstore = document.getElementById("appstore");
var tweakedapps = document.getElementById("tweakedapps");
var logIn = document.getElementById("logIn");

function openmenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "none") {
    menu.style.display = "block";
    menu.style.animationName = "alphamenu";
    menu.style.right = "1%";
  } else {
    menu.style.animationName = "betamenu";
    menu.style.right = "-60%";
    setTimeout('menu.style.display = "none" ', 700);
  }
}

//this is menu editing codes
function s0() {
  home.style.display = "block";
  cydia.style.display = "none";
  games.style.display = "none";
  appstore.style.display = "none";
  tweakedapps.style.display = "none";
  logIn.style.display = "none";
  openmenu();
}
function s1() {
  home.style.display = "none";
  cydia.style.display = "block";
  games.style.display = "none";
  appstore.style.display = "none";
  tweakedapps.style.display = "none";
  logIn.style.display = "none";

  openmenu();
}
function s2() {
  home.style.display = "none";
  cydia.style.display = "none";
  games.style.display = "block";
  appstore.style.display = "none";
  tweakedapps.style.display = "none";
  logIn.style.display = "none";
  openmenu();
}
function s3() {
  home.style.display = "none";
  cydia.style.display = "none";
  games.style.display = "none";
  appstore.style.display = "block";
  tweakedapps.style.display = "none";
  logIn.style.display = "none";
  openmenu();
}
function s4() {
  home.style.display = "none";
  cydia.style.display = "none";
  games.style.display = "none";
  appstore.style.display = "none";
  tweakedapps.style.display = "block";
  logIn.style.display = "none";
  openmenu();
}
function s5() {
  home.style.display = "none";
  cydia.style.display = "none";
  games.style.display = "none";
  appstore.style.display = "none";
  tweakedapps.style.display = "none";
  logIn.style.display = "block";
  openmenu();
}

function desgin() {
  var desgin = document.getElementById("alphaapps");
  if (desgin.style.height === "8vh") {
    desgin.style.height = "70vh";
  } else {
    desgin.style.height = "8vh";
  }
}
var postmatter = document.getElementById("postmatter");
var choose = document.getElementById("choose");
var po = document.getElementById("po");
var im = document.getElementById("im");

function newpost() {
  document.createElement("div");
}
