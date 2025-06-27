var _total = 1;
var sc = document.body;
var cont = document.createElement("script");
document.body.appendChild(cont);

function viewer(path, page, num) {
 let n = num;
 let p = '../' + path;
 let u = p + page + num + '.js';
 cont.src = u;
 let x = {
  prev: function() {
   num -= 1;
   let vn = validate(num);
   u = p + page + vn + '.js';
   cont.src = u;
  },
  next: function() {
   num += 1;
   let vn = validate(num);
   u = p + page + vn + '.js';
   cont.src = u;
  }
 };
 return x;
}

function validate(n) {
 if(n <= 0) { n = _total; }
 if(n > _total) { n = 1; }
 return n;
}

function load(code, content) {
 content.innerHTML = code;
 cont.remove();

 let title = content.querySelector("h1").innerText;
 let docOriginalTitle = document.title.concat(' ');
 document.title = docOriginalTitle + title;
 document.getElementById("ttname").innerHTML = title;
}