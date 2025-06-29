
var today, DD, MM, YYYY, hh, mm, tt;
today = new Date();
DD = today.getDate();
MM = today.getMonth() + 1;
YYYY = today.getFullYear();
hh = today.getHours();
mm = today.getMinutes();
tt = "AM";
if(hh > 11) {
 tt = "PM";
 hh = today.getHours() - 12;
}

if(hh == 0) { hh = 12; };
if(mm < 10) {
 mm = "0" + today.getMinutes();
}

setTimeout(writeTime, 1000);
function writeTime() {
 document.querySelectorAll("#time").forEach(all => all.innerText = `${hh}:${mm} ${tt}`);
};

function writeDate() {
 document.querySelectorAll("#date").forEach(all => all.innerText = `${DD}/${MM}/${YYYY}`);
}

const hide = function(el) {
document.querySelector(el).style.display = "none";
}

const show = function(el, type) {
if(type !== "none") {
 document.querySelector(el).style.display = type;
}};

function setHash(hash) {
 location.hash = hash;
}

var pno = document.querySelector("#pno");
function addNumber(n) { document.querySelector("#pno").value += n; };
function subNumber(n) { document.querySelector("#pno").value.length; }
function redirect() {
 location.href = "tel:" + encodeURIComponent(document.querySelector("#pno").value);
}