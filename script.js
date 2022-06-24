const next = document.querySelector('#next')
const images=document.querySelector('#images')
const previous = document.querySelector('#previous')
const go = document.querySelector('#go')
const inputButton = document.querySelector('#inputButton')

let COUNT=1

next.onclick = function () {
    if (COUNT>=145) {
        COUNT=1
    } else {
        COUNT++
    }
    images.src='images/'+COUNT+'.png';
}

previous.onclick = function () {
    if (COUNT>1) { 
        COUNT--
    } else {
        COUNT=145
    }
    images.src='images/'+COUNT+'.png';
}

go.onclick = function () {
    let temp = parseInt(inputButton.value);
    if (1 <= temp <=145) {
        images.src='images/'+temp+'.png';  
    } else {
        alert("Ошибка!")
    }

    COUNT = temp
    inputButton.value = ""
}