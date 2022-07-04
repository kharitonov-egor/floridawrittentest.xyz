// DOM elements declaration:

const next = document.querySelector('#next')
const images=document.querySelector('#images')
const previous = document.querySelector('#previous')
const go = document.querySelector('#go')
const inputButton = document.querySelector('#inputButton')
const question = document.querySelector('#question')
const A = document.querySelector('#A')
const B = document.querySelector('#B')
const C = document.querySelector('#C')
const CheckRight = document.querySelector('#CheckRight')
const StartButton = document.querySelector('#StartButton')
const AText = document.querySelector('#AText')
const BText = document.querySelector('#BText')
const CText = document.querySelector('#CText')
const SkipButton = document.querySelector('#SkipButton')
const right=document.querySelector('#right')
const wrong=document.querySelector('#wrong')
const righttext = document.querySelector('#righttext')
const wrongtext = document.querySelector('#wrongtext')
const testQuestion = document.querySelector('#testQuestion')

const questions = [
    {
        question:"0. 2+2?",
        answers: [
            {text: '22', correct: false},
            {text: '4', correct: true},
            {text: '5', correct: false}
        ]
    },

    {
        question:"1. Ты двигаешься по двухсторонней улице и ищешь место для парковки",
        answers: [
            {text: 'Ты можешь припарковать машину на любой стороне улицы, включая левую сторону, расположив автомобиль против движения потока', correct: false},
            {text: 'Ты должен парковать машину на правой стороне дороги, направив автомобиль по ходу движения потока', correct: true},
            {text: 'Ты можешь припарковать машину на любой стороне улицы, если достаточно места для парковки', correct: false}
        ]
    },

    {
        question:"2. Если ты - водитель или собственник автомобиля, попавшего в аварию по твоей вине, и на момент аварии не имеющего страховки согласно флоридскому закону о финансовой ответсвенности",
        answers: [
            {text: 'Ты будешь должен посетить курс о финансовой ответственности водителей', correct: false},
            {text: 'Ты будешь должен компенсировать повреждения прежде чем будут восстановлены твои водительские права', correct: true},
            {text: 'Тебе будет установлен испытательный срок до 4х месяцев', correct: false}
        ]
    },

    {
        question:"Список вопросов в будущем дополниться",
        answers: [
            {text: '.', correct: false},
            {text: '.', correct: false},
            {text: '.', correct: true}
        ]
    }


]

// Buttons functions reference:

next.onclick = NextFunction
previous.onclick = PreviousFunction
CheckRight.onclick = CheckRightFuntion 
StartButton.onclick = StartFunction

var CurrentQuestionIndex = 0
var RIGHT = 0
var WRONG = 0

function StartFunction () {
    Questionss.style.display = "block";
    StartButton.style.display = "none";
    righttext.style.display = "none";
    wrongtext.style.display = "none";
    next.style.display = "block";
    previous.style.display = "block";

    ChangeHeader()
}

function ChangeHeader () {
    question.innerHTML = questions[CurrentQuestionIndex].question;
    AText.innerHTML = questions[CurrentQuestionIndex].answers[0].text;
    BText.innerHTML = questions[CurrentQuestionIndex].answers[1].text;
    CText.innerHTML = questions[CurrentQuestionIndex].answers[2].text;
    A.checked=false
    B.checked=false
    C.checked=false
}

function CheckRightFuntion () {
    if (questions[CurrentQuestionIndex].answers[0].correct == true && A.checked == true && B.checked == false && C.checked==false) {
        if (CurrentQuestionIndex!=0) {RIGHT++}
        righttext.style.display = "block";
    } else if (questions[CurrentQuestionIndex].answers[1].correct == true && B.checked == true && A.checked == false && C.checked==false) {
        if (CurrentQuestionIndex!=0) {RIGHT++}
        righttext.style.display = "block";
    } else if (questions[CurrentQuestionIndex].answers[2].correct == true && C.checked == true && A.checked == false && B.checked==false) {
        if (CurrentQuestionIndex!=0) {RIGHT++}
        righttext.style.display = "block";
    } else {
        WRONG++
        wrongtext.style.display = "block";
    }


    ChangeRightWrong ()

    setTimeout(NextFunction,1500)
    setTimeout("righttext.style.display = 'none'" ,1500);
    setTimeout("wrongtext.style.display = 'none'" ,1500);
    setTimeout("testQuestion.style.display = 'none'" ,1500);
}

function ChangeRightWrong () {
    right.innerHTML = 'Правильно: '+RIGHT+'';
    wrong.innerHTML = 'Неправильно: '+WRONG+'';
}

function NextFunction () {
    if (CurrentQuestionIndex != questions.length-1) {
        CurrentQuestionIndex++
        ChangeHeader()
    }
}

function PreviousFunction () {
    if (CurrentQuestionIndex != 0) {
        CurrentQuestionIndex--
        ChangeHeader()
    }
}

/*
function SkipFunction () {
    questionsListNumbers.splice(CurrentQuestionIndex-1,1)
    questionsListNumbers.push(CurrentQuestionIndex)
    CurrentQuestionIndex++
    ChangeHeader()
    CurrentQuestionIndex--
}
*/
document.onkeydown = checkKey;

 function checkKey(event) { 
     if (event.keyCode == '37') { // If "leftarrow" key is pressed PreviousFunction starts
        PreviousFunction();
     } else if (event.keyCode == '39') { // If "rightarrow" key is pressed NextFunction starts
        NextFunction();
     }
 
 }