const next = document.querySelector('#next')
const images=document.querySelector('#images')
const previous = document.querySelector('#previous')
const go = document.querySelector('#go')
const inputButton = document.querySelector('#inputButton')

let COUNT=1

function OnLoadFunction () {
    if (window.screen.width <= 699) {
        images.width == window.screen.width
    }
}

next.onclick = function () {
    if (COUNT>=145) {
        COUNT=1
    } else {
        COUNT++
    }
    images.src='images/'+COUNT+'.PNG';
}

previous.onclick = function () {
    if (COUNT>1) { 
        COUNT--
    } else {
        COUNT=145
    }
    images.src='images/'+COUNT+'.PNG';
}

go.onclick = GoToPageFunction

function GoToPageFunction () {
    let temp = parseInt(inputButton.value);
    if (1 <= temp && temp <=145) {
        if (temp) {
            images.src='images/'+temp+'.PNG';  
        } else {
            //pass
        }
    } else {
        alert("Ошибка!")
    }

    COUNT = temp
    inputButton.value = ""
}

function enterKeyPressed(event) {
    if (event.keyCode == 13) {
        GoToPageFunction ();
    } else {
    }
 }