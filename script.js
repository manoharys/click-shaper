//DOM elements
const message = document.querySelector(".message");
const gameArea = document.querySelector(".gameArea");
const button = document.querySelector("button");

//Gobal variables
let inplay = false;

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

}

///Function which Updated the content of the class message..

function messager(mes) {
    message.innerHTML = mes;
}