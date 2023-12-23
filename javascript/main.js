let initValue = 0;
let selectedValue;
let tempMemory = [];
function clickNine() {
  document.getElementById("displayPanel").innerHTML += 9;
  tempMemory.push(9);
}
function clickEight() {
  document.getElementById("displayPanel").innerHTML = 8;
  tempMemory.push(8);
}
function clickSeven() {
  document.getElementById("displayPanel").innerHTML = 7;
  tempMemory.push(7);
}
function clickSix() {
  document.getElementById("displayPanel").innerHTML = 6;
  tempMemory.push(6);
}
function clickFive() {
  document.getElementById("displayPanel").innerHTML = 5;
  tempMemory.push(5);
}
function clickFour() {
  document.getElementById("displayPanel").innerHTML = 4;
  tempMemory.push(4);
}
function clickThree() {
  document.getElementById("displayPanel").innerHTML = 3;
  tempMemory.push(3);
}
function clickTwo() {
  document.getElementById("displayPanel").innerHTML = 2;
  tempMemory.push(2);
}
function clickOne() {
  document.getElementById("displayPanel").innerHTML = 1;
  tempMemory.push(1);
}
function clickZero() {
  document.getElementById("displayPanel").innerHTML = 0;
  tempMemory.push(0);
}

function add(tempMemory) {
  for (let i = 0; i < tempMemory.length; i++) {
    let sum = 0;
    sum += tempMemory[i];
  }
  document.getElementById("displayPanel").innerHTML = sum;
}


console.log(tempMemory);