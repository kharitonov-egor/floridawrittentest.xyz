const next = document.querySelector('#next')
const images=document.querySelector('#images')
const previous = document.querySelector('#previous')
const go = document.querySelector('#go')
const inputButton = document.querySelector('#inputButton')

next.onclick = NextFunction
previous.onclick = PreviousFunction
go.onclick = GoToImageFunction

let COUNT = 1

function NextFunction () {
    if (COUNT>=145) {
        COUNT=1
    } else {
        COUNT++
    }
    images.src='images/'+COUNT+'.PNG';
}

function PreviousFunction () {
    if (COUNT>1) { 
        COUNT--
    } else {
        COUNT=145
    }
    images.src='images/'+COUNT+'.PNG';
}

function GoToImageFunction () {
    let temp = parseInt(inputButton.value);
    if (1 <= temp && temp <=145) {
        if (temp) {
            images.src='images/'+temp+'.PNG';  
        }
    } else {
        alert("Ошибка!")
    }

    COUNT = temp
    inputButton.value = ""
}

function enterKeyPressed(event) {
    if (event.keyCode == 13) {
        GoToImageFunction ();
    } else {
    }
 }

 document.onkeydown = checkKey;

 function checkKey(event) {
     if (event.keyCode == '37') {
        PreviousFunction();
     } else if (event.keyCode == '39') {
        NextFunction();
     }
 
 }