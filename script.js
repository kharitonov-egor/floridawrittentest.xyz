// DOM elements declaration:

const next = document.querySelector('#next')
const images=document.querySelector('#images')
const previous = document.querySelector('#previous')
const go = document.querySelector('#go')
const inputButton = document.querySelector('#inputButton')

// Buttons functions reference:

next.onclick = NextFunction
previous.onclick = PreviousFunction
go.onclick = GoToImageFunction

let COUNTER = 1 // Setting some counter to 1 so that we can change images

function NextFunction () {
    if (COUNTER>=145) {
        COUNTER=1
    } else {
        COUNTER++
    }
    images.src='images/'+COUNTER+'.PNG';
}

function PreviousFunction () {
    if (COUNTER>1) { 
        COUNTER--
    } else {
        COUNTER=145
    }
    images.src='images/'+COUNTER+'.PNG';
}

function GoToImageFunction () {
    let temp = parseInt(inputButton.value); // temp = input of "Go to image" input without any letters
    if (1 <= temp && temp <=145) { // There are only 145 images
        if (temp) {
            images.src='images/'+temp+'.PNG'; // Image changing only if temp equals something
        }
    } else {
        alert("Ошибка!")
    }

    COUNTER = temp // Global variable COUNTER now equals temp so NextFunction and PreviousFunction can be triggered
    inputButton.value = "" // Clearing any numbers after function done image changing
}

function enterKeyPressed(event) { // If enter pressed then function above starts
    if (event.keyCode == 13) { 
        GoToImageFunction ();
    } else {
    }
 }

document.onkeydown = checkKey;

 function checkKey(event) { 
     if (event.keyCode == '37') { // If "leftarrow" key is pressed PreviousFunction starts
        PreviousFunction();
     } else if (event.keyCode == '39') { // If "rightarrow" key is pressed NextFunction starts
        NextFunction();
     }
 
 }