// definition.js of BlueOS.

const $ = x => console.log(x);
const $$ = x => document.getElementById(x);

function code(str) {
 var code = '';
 var codeList = str.split('_');
 for(let i = 0; i < codeList.length; i++) {
  code += String.fromCharCode(Number(codeList[i]));
 }
 return code;
}

window.currentScreen = '';
window.devicePassword = code('49_50_51_52');

function setScreen(id) {
 var screens = document.querySelectorAll('.screen');
 var thisScreen = document.getElementById(id);
 screens.forEach(function(each) {
  each.style.display = 'none';
 });
 thisScreen.style.display = 'block';
 window.currentScreen = id;
}

function setRealTimeData() {
 // Set Battery Percentage.
 navigator.getBattery().then(x => {
  var battery = (x.level * 100) + '%';
  var bticon = document.querySelectorAll('[data-btel="icon"]');
  var btbox = document.querySelectorAll('[data-btel="value"]');
  if(x.charging == true) {
   battery += `&nbsp; <icon class="fa fa-bolt"></icon>&nbsp;`;
  }
  bticon.forEach(each => {
   var icon = '';
   var color = '';
   if(x.level <= 0.2) { icon = "fa fa-battery-1"; color = "red"; }
   else if(x.level > 0.2 && x.level <= 0.75) { icon = "fa fa-battery-2"; color = "white"; }
   else if(x.level > 0.75 && x.level < 0.95) { icon = "fa fa-battery-3"; color = "white"; }
   else if(x.level >= 0.95) { icon = "fa fa-battery-4"; color = "white"; };
   each.className = icon;
   each.style.color = color;
  });
  btbox.forEach(i => i.innerHTML = battery);
 });


 // Set Date & Time.
 var today, h, m, s, d, D, M, y;
 var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

 var date = document.querySelectorAll("time.widget #date");
 var time = document.querySelectorAll("time.widget #time");

 today = new Date();
 h = today.getHours();
 m = today.getMinutes();
 s = today.getSeconds();
 d = today.getDate();
 D = days[today.getDay()];
 M = months[today.getMonth()];
 y = today.getFullYear();

 h = (h < 10) ? "0" + h : h;
 m = (m < 10) ? "0" + m : m;
 s = (s < 10) ? "0" + s : s;
 d = (d < 10) ? "0" + d : d;

 var _time = `${h}:${m}`;
 var _date = `${D}, ${d} ${M} ${y}`;
 time.forEach(i => i.innerText = _time);
 date.forEach(i => i.innerText = _date);
}

window.keypress = {
 'left': null,
 'call': null,
 'right': null,
 'end': null,
 '1': input(1),
 '2': input(2),
 '3': input(3),
 '4': input(4),
 '5': input(5),
 '6': input(6),
 '7': input(7),
 '8': input(8),
 '9': input(9),
 'ast': null,
 '0': input(0),
 'hash': null,
}

function numTask(n) {
 // Set a number task.
}

function notify(msg) {
 $$("notify").setAttribute("data-msg", msg);
 $$("notify").style.display = "block";
 var iX = setTimeout(() => {
  $$("notify").style.display = "none";
  clearTimeout(iX);
 }, 2000);
}

function lock() {
 window.setScreen('lock');
 notify("Device Locked!")
}

function unlock(n) {
 if(n == 0) {
  window.setScreen('lockarea');
  window.activeInputEl = $$('pinbox');
  window.activeInputType = 'num';
 }
 if(n == 1) {
  if(box.value === devicePassword) {
   window.setScreen("home");
   notify("Device Unlocked!")
   box.value = '';
   $$("unlocker").classList.add('ui-hidden');
   window.activeInputEl = null;
   window.activeInputType = null;
  }
  else {
   notify("Wrong Password!");
  }
 }
}

function input(n) {
 if(window.activeInputEl) {
  if(activeInputType == "num") {
   activeInputEl.value += n;
   if(activeInputEl.oninput) {
    activeInputEl.oninput();
   }
  }
 }
 else {
   // Using for shortcut or task.
   numTask(n);
 }
}

function bsp() {
 if(window.activeInputEl) {
  var i = activeInputEl;
  i.value = i.value.slice(0, i.value.length - 1);
  if(activeInputEl.oninput) {
   activeInputEl.oninput();
  }
 }
}

function changeIb(box, ib) {
 if(box.value != '') {
  ib.innerText = "Delete";
 }
 else {
  ib.innerText = "Back";
 };
}

function call(pnum) {
 window.open(`tel:${pnum}`);
}
