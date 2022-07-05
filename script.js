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
const ATextButton = document.querySelector('#ATextButton')
const BTextButton = document.querySelector('#BTextButton')
const CTextButton = document.querySelector('#CTextButton')
const SmallDOGE = document.querySelector('#SmallDOGE')
const BigDOGE = document.querySelector('#BigDOGE')

const QuestionChangeDelay = 2000

const questions = [
    {
        question:"Сколько будет два плюс два?",
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

//next.onclick = NextFunction
//previous.onclick = PreviousFunction
CheckRight.onclick = CheckRightFuntion 
StartButton.onclick = StartFunction
SkipButton.onclick = SkipFunction

var CurrentQuestionIndex = 0
var RIGHT = 0
var WRONG = 0

function StartFunction () {
    Questionss.style.display = "block";
    StartButton.style.display = "none";
    righttext.style.display = "none";
    wrongtext.style.display = "none";
    //next.style.display = "block";
    //previous.style.display = "block";

    ChangeHeader()
}

function ChangeHeader () {
    if (CurrentQuestionIndex != questions.length-1) {
        question.innerHTML = questions[CurrentQuestionIndex].question;
        AText.innerHTML = questions[CurrentQuestionIndex].answers[0].text;
        BText.innerHTML = questions[CurrentQuestionIndex].answers[1].text;
        CText.innerHTML = questions[CurrentQuestionIndex].answers[2].text;
        A.checked=false
        B.checked=false
        C.checked=false
    } else {
        FinalWords ()
    }

}

function CheckRightFuntion () {
    var NumberOfChecked = A.checked + B.checked + C.checked;
    if (NumberOfChecked > 1) {
        alert("Выберите только один ответ!")
        A.checked=false
        B.checked=false
        C.checked=false
    } else {
        if (questions[CurrentQuestionIndex].answers[0].correct == true && A.checked==true) {
            if (CurrentQuestionIndex!=0) {RIGHT++}
            righttext.style.display = "block";
            AText.style.color="lime"
            DogeShowRight()
        } else if (questions[CurrentQuestionIndex].answers[1].correct == true && B.checked==true) {
            if (CurrentQuestionIndex!=0) {RIGHT++}
            righttext.style.display = "block";
            BText.style.color="lime"
            DogeShowRight()
        } else if (questions[CurrentQuestionIndex].answers[2].correct == true && C.checked==true) {
            if (CurrentQuestionIndex!=0) {RIGHT++}
            righttext.style.display = "block";
             CText.style.color="lime"
            DogeShowRight()
        } else {
            DogeShowWrong ()
            WRONG++
            wrongtext.style.display = "block";

            if (questions[CurrentQuestionIndex].answers[0].correct == true) {

                AText.style.color="lime"

                if (B.checked==true) {
                    BText.style.color="red"
                } else {
                    CText.style.color="red"
                }

            } else if (questions[CurrentQuestionIndex].answers[1].correct == true) {
                BText.style.color="lime"

                if (A.checked==true) {
                    AText.style.color="red"
                } else {
                    CText.style.color="red"
                }
            } else if (questions[CurrentQuestionIndex].answers[2].correct == true) {
                CText.style.color="lime"

                
                if (A.checked==true) {
                    AText.style.color="red"
                } else {
                    BText.style.color="red"
                }
            }
                        
        }
    
        ChangeRightWrong ()
    
        setTimeout(NextFunction,QuestionChangeDelay)
        setTimeout("righttext.style.display = 'none'" ,QuestionChangeDelay);
        setTimeout("wrongtext.style.display = 'none'" ,QuestionChangeDelay);
        setTimeout("testQuestion.style.display = 'none'" ,QuestionChangeDelay);
        setTimeout("AText.style.color='#f1f1f1'" ,QuestionChangeDelay);
        setTimeout("BText.style.color='#f1f1f1'" ,QuestionChangeDelay);
        setTimeout("CText.style.color='#f1f1f1'" ,QuestionChangeDelay);

    }

}


function DogeShowRight () {
    BigDOGE.style.transform="translateY(20%)"
    setTimeout("BigDOGE.style.transform='translateY(100%)'" ,QuestionChangeDelay);
}

function DogeShowWrong () {
    SmallDOGE.style.transform="translateY(20%)"
    setTimeout("SmallDOGE.style.transform='translateY(100%)'" ,QuestionChangeDelay);
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

function SkipFunction () {
    alert("Скоро будет")

}

document.onkeydown = checkKey;

 function checkKey(event) { 
     if (event.keyCode == '37') { // If "leftarrow" key is pressed PreviousFunction starts
        PreviousFunction();
     } else if (event.keyCode == '39') { // If "rightarrow" key is pressed NextFunction starts
        NextFunction();
     }
 
}



function FinalWords () {

    question.innerHTML = "Спасибо!"
    AText.style.display = "none"
    BText.style.display = "none"
    CText.style.display = "none"
    CheckRight.style.display = "none"
    SkipButton.style.display = "none"
    A.style.display = "none"
    B.style.display = "none"
    C.style.display = "none"
    A.checked=false
    B.checked=false
    C.checked=false

}


