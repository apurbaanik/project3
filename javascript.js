function textChange(){
  document.getElementById("demo2").innerHTML="Hello Javascript!";
}

function textReset(){
  document.getElementById("demo2").innerHTML="Anik Barua";
}

var ninja = {
  name:"",
  rank:"",
  hairColor:"",
  eyecolor:"",
  skills: ["Supernova Shotgun", "Stun Drone", "Deployable Shield"],
}

function customizeNinja() {
  ninja.name = prompt("What shall your ninja named?");
  ninja.rank = prompt("What rank is this ninja?");
  ninja.hairColor = prompt("Ninja Hair?");
  ninja.eyecolor = prompt("Eye Color?");

document.getElementById("ninjaDesc").innerHTML = ("Your ninja name is" +
ninja.name + ". Rank: " + ninja.rank + " Haircolor: " + ninja.hairColor +
" Eyecolor: " + ninja.eyecolor + " Skills: " + ninja.skills[0]);
}

function add() {
  var str1 = eval(document.getElementById("box1").value);
  var str2 = eval(document.getElementById("box2").value);
  var answer = str1 + str2;
  alert("Answer:" + answer);
}

function subtract() {
  var str1 = eval(document.getElementById("box1").value);
  var str2 = eval(document.getElementById("box2").value);
  var answer = str1 - str2;
  alert("Answer:" + answer);
}

function multiply() {
  var str1 = eval(document.getElementById("box1").value);
  var str2 = eval(document.getElementById("box2").value);
  var answer = str1*str2;
  alert("Answer:" + answer);
}

function divide() {
  var str1 = eval(document.getElementById("box1").value);
  var str2 = eval(document.getElementById("box2").value);
  var answer = str1/str2;
  alert("Answer:" + answer);
}
