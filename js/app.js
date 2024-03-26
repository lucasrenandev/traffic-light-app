"use strict";

const redColor = document.querySelector(".container .red-color");
const yellowColor = document.querySelector(".container .yellow-color");
const greenColor = document.querySelector(".container .green-color");
const buttons = document.querySelector(".buttons");

let colorInterval = null;
let colorIndex = 0;

const turnOnTrafficLight = (event) => {
    const buttonId = event.target.id;

    if(buttonId === "red-color") {
        stopAutomaticColor();
        lightUpRedColor();
    }
    else if(buttonId === "yellow-color") {
        stopAutomaticColor();
        lightUpYellowColor();
    }
    else if(buttonId === "green-color") {
        stopAutomaticColor();
        lightUpGreenColor();
    }
    else if(buttonId === "automatic-color") {
        stopAutomaticColor();
        lightUpAutomaticColor();
    }
}

const stopAutomaticColor = () => {
    clearInterval(colorInterval);
}

const controlAutomaticColor = () => {
    if(colorIndex < 2) {
        colorIndex++;
    }
    else {
        colorIndex = 0;
    }
}

const automaticColor = () => {
    const colors = [lightUpRedColor, lightUpYellowColor, lightUpGreenColor];
    const color = colors[colorIndex];
    controlAutomaticColor();
    return color();
}

const lightUpRedColor = () => {
    redColor.classList.add("active");
    yellowColor.classList.remove("active");
    greenColor.classList.remove("active");
}

const lightUpYellowColor = () => {
    redColor.classList.remove("active");
    yellowColor.classList.add("active");
    greenColor.classList.remove("active");
}

const lightUpGreenColor = () => {
    redColor.classList.remove("active");
    yellowColor.classList.remove("active");
    greenColor.classList.add("active");
}

const lightUpAutomaticColor = () => {
    colorInterval = setInterval(automaticColor, 800);
}

buttons.addEventListener("click", turnOnTrafficLight);