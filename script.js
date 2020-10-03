document.querySelector(".signin").addEventListener("click", function(){
  document.querySelector(".signin").classList.add("dim");
  setTimeout(function(){document.querySelector(".signin").classList.remove("dim");}, 150);
});
document.querySelector(".signup").addEventListener("click", function(){
  document.querySelector(".signup").classList.add("dim");
  setTimeout(function(){document.querySelector(".signup").classList.remove("dim");}, 150);
});
document.querySelector(".learnmore").addEventListener("click", function(){
  document.querySelector(".learnmore").classList.add("dim");
  setTimeout(function(){document.querySelector(".learnmore").classList.remove("dim");}, 150);
});
