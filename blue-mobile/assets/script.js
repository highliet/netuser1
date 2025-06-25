// script.js of BlueOS.

window.setScreen('lock');
setInterval(setRealTimeData, 500);
window.keypress.left = {
 "lock": () => unlock(0),
 "lockarea": () => {
  if(box.value.length == 4) {
   unlock(1);
  }
 },
 "home": () => window.setScreen("appmenu"),
}

window.keypress.right = {
 "lockarea": () => {
  var p = $$("pinbox");
  if(p.value != "") { bsp(); }
  else {
   window.setScreen('lock');
   window.activeInputEl = null;
   window.activeInputType = null;
  }
 },
 "home": () => window.setScreen("notifications"),
 "notifications": () => window.setScreen("home"),
 "appmenu": () => window.setScreen("home"),
 "dialer": () => {
  var p = $$("phonebox");
  if(p.value != "") { bsp(); }
  else {
   window.setScreen('home');
   window.activeInputEl = null;
   window.activeInputType = null;
  }
 },
}

window.keypress.ok = {
 "home": () => window.setScreen("appmenu"),
 "appmenu": () => {}
}

window.keypress.call = {
 "home": () => {
  window.setScreen("dialer");
  window.activeInputEl = $$('phonebox');
  window.activeInputType = 'num';
 },
 "dialer": () => call($$("phonebox").value),
}

window.keypress.end = {
 "home": () => {
   lock();
 }
}

function numTask(n) {
 var x = window.currentScreen;
 if(x === "home") {
  notify(`No shortcut assigned with number ${n}`);
 }
}


var counter = $$("pincounter");
var box = $$("pinbox");
box.oninput = function() {
 changeIb(box, $$("ib1"));

 if(box.value.length >= 4) {
  $$("unlocker").classList.remove('ui-hidden');
 }
 else {
  $$("unlocker").classList.add('ui-hidden');
 }

 if(box.value.length >= 6) {
  box.value = box.value.slice(0, 6);
 }
 counter.innerText = 6 - Number(box.value.length);
}

var pbox = $$("phonebox");
pbox.oninput = function() {
 changeIb(pbox, $$("ib2"));
}
