

function validation() {

var fname =document.getElementById('fnamecheck').value;
var lname =document.getElementById('lnamecheck').value;
var namepattern = /^[A-Za-z ]{1,30}$/;
var phno =document.getElementById('pno').value;
var numpattern =/^[0-9]{10}$/;
var citydata=document.getElementById('cityc').value;
var pinpattern =/^[0-9]{6}$/;
var pindata=document.getElementById('pin').value;
var statedata=document.getElementById('statec').value;

if (namepattern.test(fname)) {
  document.getElementById('fnamecheck').
  style.backgroundColor = 'LightGreen';
}
else {
  document.getElementById('fnamecheck').
  style.backgroundColor = 'red';
}
if (namepattern.test(lname)) {
  document.getElementById('lnamecheck').
  style.backgroundColor = 'LightGreen';
}
else {
  document.getElementById('lnamecheck').
  style.backgroundColor = 'red';
}

if (numpattern.test(phno)) {
  document.getElementById('pno').
  style.backgroundColor = 'LightGreen';
}
else {
  document.getElementById('pno').
  style.backgroundColor = 'red';
}
if (namepattern.test(citydata)) {
  document.getElementById('cityc').
  style.backgroundColor = 'LightGreen';
}
else {
  document.getElementById('cityc').
  style.backgroundColor = 'red';
}
if (pinpattern.test(pindata)) {
  document.getElementById('pin').
  style.backgroundColor = 'LightGreen';
}
else {
  document.getElementById('pin').
  style.backgroundColor = 'red';
}
if (namepattern.test(statedata)) {
  document.getElementById('statec').
  style.backgroundColor = 'LightGreen';
}
else {
  document.getElementById('statec').
  style.backgroundColor = 'red';
}
}
