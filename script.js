let form = document.querySelector('form');
form.addEventListener('submit', e => {
e.preventDefault();
let output = document.querySelector('output');
let firstNum = document.querySelector('#first-num').value;
let secondNum = document.querySelector('#second-num').value;
let operator = document.querySelector('#operator').value;
output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish

const logBtn = document.getElementById("log");
const errorBtn = document.getElementById("error");
const countBtn = document.getElementById("count");
const warnBtn = document.getElementById("warn");
const assertBtn = document.getElementById("assert");
const clearBtn = document.getElementById("clear");
const dirBtn = document.getElementById("dir");
const dirxmlBtn = document.getElementById("dirxml");
const groupStartBtn = document.getElementById("groupStart");
const groupEndBtn = document.getElementById("groupEnd");
const tableBtn = document.getElementById("table");
const startTimerBtn = document.getElementById("startTimer");
const endTimerBtn = document.getElementById("endTimer");
const traceBtn = document.getElementById("trace");
const globalErrorBtn = document.getElementById("globalError");

const exampleObj = {
    name: "Bob",
    age: 33,
    occupation: "Staff SWE",
    skills: ["JavaScript", "Python", "C++"],
};

const exampleArray = [
    { id: 1, product: "Apple", price: 1.2 },
    { id: 2, product: "Tomato", price: 0.5 },
    { id: 3, product: "Pinapple", price: 0.8 },
];

// console.log
logBtn.addEventListener("click", () => {
    console.log("Console.log demo.");
});

// console.error
errorBtn.addEventListener("click", () => {
    console.error("This is a console.error message!");
});

// console.count
countBtn.addEventListener("click", () => {
    console.count("Counter");
});

// console.warn
warnBtn.addEventListener("click", () => {
    console.warn("This is a console.warn message.");
});

// console.assert
assertBtn.addEventListener("click", () => {
    e.preventDefault();
    console.assert(2 === 3, "2 is not equal to 3"); // fix output so it looks like in video
});

// console.clear
clearBtn.addEventListener("click", () => {
    e.preventDefault();
    console.clear();
});

// console.dir
dirBtn.addEventListener("click", () => {
    e.preventDefault();
    console.dir(exampleObj);
});

// console.dirxml
dirxmlBtn.addEventListener("click", () => {
    e.preventDefault();
    console.dirxml(dirxmlBtn);
});

// console.group and console.groupEnd
groupStartBtn.addEventListener("click", () => {
    e.preventDefault();
    console.group("Grouped Messages");
});

groupEndBtn.addEventListener("click", () => {
    e.preventDefault();
    console.groupEnd();
});

// console.table
tableBtn.addEventListener("click", () => {
    e.preventDefault();
    console.table(exampleArray);
});

// console.time and 
startTimerBtn.addEventListener("click", () => {
    e.preventDefault();
    console.time("Timer Button");
});

// console.timeEnd
endTimerBtn.addEventListener("click", () => {
    e.preventDefault();
    console.timeEnd("Timer Button");
});

// console.trace
traceBtn.addEventListener("click", () => {
    e.preventDefault();
    function a() {
    function b() {
        console.trace("Trace stack trace example");
    }
    b();
    }
    a();
});

// globalError
globalErrorBtn.addEventListener("click", () => {
    e.preventDefault();
    throw new Error("This is a triggered global error!");
  });
