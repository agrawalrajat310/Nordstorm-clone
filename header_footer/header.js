function searchBar() {
  var bar = document.querySelector("#inputBox");
  bar.style.height = "70px";
}

function removeBar() {
  var bar = document.querySelector("#inputBox");
  bar.style.height = "0px";
}

function signBar() {
  var bar = document.querySelector(".signIN");
  bar.style.display = "block";
}

function removeSignBar() {
  var bar = document.querySelector(".signIN");
  bar.style.display = "none";
}
let b=document.querySelector(".class");
function dropDown(a) {
  b.classList.add("card");
// b.style.display = "block";
}
function dropout(){
  b.classList.remove("card");
}
function clickec(){
  dropout();
  b.classList.add("card2");
}
function dropOOut(){
  b.classList.remove("card2");
}