const $ = function(selector) {
 return document.querySelector(selector);
}

const $$ = function(selector) {
 return document.querySelectorAll(selector);
}

$("#navbtn").addEventListener('click', function() {
 $("#navlinks").className = "active";
 window.addEventListener('click', function(e) {
  if(e.target != $("#navlinks")) {
   $("#navlinks").className = "";
   window.onclick = null;
  }
 });
});