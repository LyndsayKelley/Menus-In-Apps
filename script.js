var ContentEle = document.body.querySelector(".Content");
var InteractEle = document.body.querySelector(".Interact"); 
var number = 0
function makeHome(){
  ContentEle.innerHTML=" "; 
  ContentEle.innerHTML = "Home Page"
}
function makeAbout(){
  ContentEle.innerHTML=" ";
  InteractEle.innerHTML=" ";
  var headEle = document.createElement("h1");
  headEle.innerHTML="About Page"
  var headEle3 = document.createElement("h3")
  headEle3.innerHTML = "Lyndsay"
  ContentEle.appendChild(headEle)
  ContentEle.appendChild(headEle3)
}

function makeInteract(){
  ContentEle.innerHTML=" ";
document.body.querySelector(".Content").innerHTML = number
 
}
function add(){
  number = number + 1
  document.body.querySelector(".Content").innerHTML = number
}

document.body.querySelector(".HomeButton").addEventListener("click",function(){
  makeHome();
})
document.body.querySelector(".AboutButton").addEventListener("click",function(){
  makeAbout();
})
document.body.querySelector(".InteractButton").addEventListener("click",function(){
  makeInteract();
})
document.body.querySelector(".add").addEventListener("click",function(){
  add();
})
makeHome();