let equalCount = 0;
let addCount = 0;
let plusUse = 0;
let subtractUse = 0;
let tempMemoryNew = [];
let tempMemoryOld = [];
let tempMemoryResult = [];
let tempJoin = [];

function blankDisplay() {
  document.getElementById("displayPanel").innerHTML = "";
}
function clearButton() {
  tempMemoryNew = [];
  tempMemoryOld = [];
  addCount = 0;
  equalCount = 0;
  document.getElementById("displayPanel").innerHTML = "";
}
function initializeDisplay() {
  if (equalCount !== 0) {
    tempMemoryNew = [];
    addCount = 0;
    equalCount = 0;
    document.getElementById("displayPanel").innerHTML = "";
  }
  if (addCount === 0) {
    blankDisplay();
  }
}

function preProcessor() {
  let num = Number(tempMemoryNew.join(""));
  tempMemoryOld.push(num);
  tempMemoryNew = [];
}

function clickNine() {
  initializeDisplay();

  document.getElementById("displayPanel").innerHTML += 9;

  tempMemoryNew.push(9);
  addCount++;

}
function clickEight() {
  initializeDisplay();

  document.getElementById("displayPanel").innerHTML += 8;
  tempMemoryNew.push(8);
  addCount++;
}
function clickSeven() {
  initializeDisplay();

  document.getElementById("displayPanel").innerHTML += 7;
  tempMemoryNew.push(7);
  addCount++;
}
function clickSix() {
  initializeDisplay();

  document.getElementById("displayPanel").innerHTML += 6;
  tempMemoryNew.push(6);
  addCount++;
}
function clickFive() {
  initializeDisplay();

  document.getElementById("displayPanel").innerHTML += 5;
  tempMemoryNew.push(5);
  addCount++;
}
function clickFour() {
  initializeDisplay();

  document.getElementById("displayPanel").innerHTML += 4;
  tempMemoryNew.push(4);
  addCount++;
}
function clickThree() {
  initializeDisplay();

  document.getElementById("displayPanel").innerHTML += 3;
  tempMemoryNew.push(3);
  addCount++;
}
function clickTwo() {
  initializeDisplay();

  document.getElementById("displayPanel").innerHTML += 2;
  tempMemoryNew.push(2);
  addCount++;
}
function clickOne() {
  initializeDisplay();

  document.getElementById("displayPanel").innerHTML += 1;
  tempMemoryNew.push(1);
  addCount++;
}
function clickZero() {
  initializeDisplay();

  document.getElementById("displayPanel").innerHTML += 0;
  tempMemoryNew.push(0);
  addCount++;
}

function add() {
  let num = Number(tempMemoryNew.join(""));
  tempMemoryOld.push(num);
  tempMemoryNew = [];

  addCount = 0;
  let result = 0;

  for (let i = 0; i < tempMemoryOld.length; i++) {
    result += tempMemoryOld[i];
  }
  if (equalCount !== 0) {
    blankDisplay();
  }
  tempMemoryOld = [];
  tempMemoryOld.push(result);

  document.getElementById("displayPanel").innerHTML = result;
  operatorUse++;
}

function subtract() {
  let num = -Number(tempMemoryNew.join(""));
  tempMemoryOld.push(num);
  tempMemoryNew = [];
  addCount = 0;
  let result = 0;
  for (let i = 0; i < tempMemoryOld.length; i++) {
    result += tempMemoryOld[i];
  }
  if (equalCount !== 0) {
    blankDisplay();
  }
  tempMemoryOld = [];
  tempMemoryOld.push(result);
  document.getElementById("displayPanel").innerHTML = result;
}

function timeMath() {
  let num = Number(tempMemoryNew.join(""));
  tempMemoryOld.push(num);
  tempMemoryNew = [];
  addCount = 0;
  let initValue = 1;
  for (let i = 0; i < tempMemoryOld.length; i++) {
    initValue *= tempMemoryOld[i];
  } if (equalCount !== 0) {
    blankDisplay();
  }
  tempMemoryOld = [];
  tempMemoryOld.push(initValue);
  document.getElementById("displayPanel").innerHTML = initValue;
}

function divideFunc() {
  let num = Number(tempMemoryNew.join(""));
  tempMemoryOld.push(num);
  tempMemoryNew = [];
  addCount = 0;
  let initValue = 1;
  for (let i = 0; i < tempMemoryOld.length; i++) {
    initValue /= tempMemoryOld[i];
  } if (equalCount !== 0) {
    blankDisplay();
  }
  tempMemoryOld = [];
  tempMemoryOld.push(initValue);
  document.getElementById("displayPanel").innerHTML = initValue;
}

function equalTo() {
  equalCount++;
  let result = tempMemoryOld[0];
  document.getElementById("displayPanel").innerHTML = result;
}

