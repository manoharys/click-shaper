//DOM elements
const message = document.querySelector(".message");
const gameArea = document.querySelector(".gameArea");
const button = document.querySelector("button");

//Gobal variables
let inplay = false;
let start;
let play = {};
messager("click the start button ");
//Adding the eventListeners to the button 
button.addEventListener("click", () => {
    if (!inplay) {
        inplay = true;
        button.style.display = "none";
        messager("Click the circles as quickly as you see them");
        ShowBox();
    }
})

function ShowBox() {
    start = new Date().getTime();
    console.log(start);
    creatBox();

}

//Function which creates the element shapes
function creatBox() {
    let box = document.createElement("div");
    box.style.backgroundColor = "red";
    box.style.position = "relative";
    box.style.width = randomGenerator(50) + 100 + "px";
    box.style.height = randomGenerator(50) + 100 + "px";
    box.style.borderRadius = randomGenerator(30) + 70 + "px";
    box.style.top = randomGenerator(500) + "px";
    box.style.left = randomGenerator(1000) + "px";
    gameArea.appendChild(box);

}

//Function which returns random number
function randomGenerator(num) {
    let temp = Math.floor(Math.random() * num);
    return temp;
}

///Function which Updated the content of the class message..
function messager(mes) {
    message.innerHTML = mes;
}