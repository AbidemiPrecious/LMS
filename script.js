let btn = document.querySelector("#i-btn");
let sidebar = document.querySelector(".side-bar");
let light = document.querySelector(".light");
let home = document.querySelector(".home");
let image = document.querySelector("#btn-img");
let body = document.body
// let image2 = document.getElementById("btn-img")

btn.addEventListener("click", ()=>{
 sidebar.classList.toggle("active")
});

image.addEventListener("click", ()=>{
 if(image.src.match("lightbulb")){
  image.src = "bulb.png";
  body.classList.toggle("dark-mode");
  console.log("hot");
 }
 else{
  image.src = "lightbulb.png";
  body.classList.toggle("dark-mode");
 }
  
});

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
//mouse tracker 
document.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--mouse-x", e.clientX + "px");
  document.documentElement.style.setProperty("--mouse-y", e.clientY + "px");
});
