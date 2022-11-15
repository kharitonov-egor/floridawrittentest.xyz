// DOM elements declaration:

const next = document.querySelector('#next')
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
const right = document.querySelector('#right')
const wrong = document.querySelector('#wrong')
const righttext = document.querySelector('#righttext')
const wrongtext = document.querySelector('#wrongtext')
const testQuestion = document.querySelector('#testQuestion')
const SmallDOGE = document.querySelector('#SmallDOGE')
const BigDOGE = document.querySelector('#BigDOGE')
const Sign = document.querySelector('#Sign')
const toHead = document.querySelector('#toHead')

const Algo0 = document.querySelector('#Algo0')
const Algo1 = document.querySelector('#Algo1')
const Algo2 = document.querySelector('#Algo2')
const Algo3 = document.querySelector('#Algo3')

const Docs0 = document.querySelector('#Docs0')
const Docs1 = document.querySelector('#Docs1')
const Docs2 = document.querySelector('#Docs2')

const Prep0 = document.querySelector('#Prep0')
const Prep1 = document.querySelector('#Prep1')
const Prep2 = document.querySelector('#Prep2')

const Translator228 = document.querySelector('#Translator228')


const HowToLicense = document.querySelector('#HowToLicense')

const QuestionChangeDelay = 3000 // A number of ms after question is change after answer

// Buttons functions reference:

CheckRight.onclick = CheckIfRight 
StartButton.onclick = StartQuiz
SkipButton.onclick = SkipFunction

// Setting up variables and array for futher use:

var CurrentQuestionIndex = 0
var RIGHT = 0
var WRONG = 0

const QuestionsWithImages = [5,52,57,68,77,83,85,103,105,109,110,127,129] // Array with QuestionsIndexes that have sign images

// When user presses start button function:

function StartQuiz () {
    questionsBlock.style.display = "grid"; // Questions block, input of number of questions and button appears
    inputButton.style.display = "block";
    go.style.display = "block";

	StartButton.style.display = "none"; // Startbutton disappears

    ChangeHeader()
}

function ChangeHeader () {
    if (CurrentQuestionIndex == questions.length) {EndOfQuestions()}

	if (CurrentQuestionIndex != 0) {testQuestion.style.display = 'none';} 
	else {testQuestion.style.display = 'block';}
	
	if (QuestionsWithImages.includes(CurrentQuestionIndex)) {ChangeSign(CurrentQuestionIndex)} 
	else {
		Sign.style.display="none"
		toHead.style.marginTop = "0px"}

	//Changing question and answers:
	
	question.innerHTML = questions[CurrentQuestionIndex].question;
	AText.innerHTML = questions[CurrentQuestionIndex].answers[0].text;
	BText.innerHTML = questions[CurrentQuestionIndex].answers[1].text;
	CText.innerHTML = questions[CurrentQuestionIndex].answers[2].text;

	A.checked = B.checked = C.checked = false // All checkboxes to unchecked position
}

function CheckIfRight () {
    var NumberOfChecked = A.checked + B.checked + C.checked;

	if (NumberOfChecked == 0) {return alert("Выберите вариант ответа. Choose your answer.")}

    if (NumberOfChecked > 1) {return alert("Выберите только один ответ. Choose only one answer.")}

	if (questions[CurrentQuestionIndex].answers[0].correct == true) {
		AText.style.color="lime"
		if (A.checked==true) {RightAnswer()} 
		else {
			WrongAnswer()
			if (B.checked==true) {BText.style.color="red"} 
			else {CText.style.color="red"}
		}
	} else if (questions[CurrentQuestionIndex].answers[1].correct == true) {
		BText.style.color="lime"
		if (B.checked==true) {RightAnswer()}
		else {
			WrongAnswer()
			if (A.checked==true) {AText.style.color="red"} 
			else {CText.style.color="red"}
		}
		
	} else if (questions[CurrentQuestionIndex].answers[2].correct == true) {
		CText.style.color="lime"
		if (C.checked==true) {RightAnswer()}
		else {
			WrongAnswer()
			if (A.checked==true) {AText.style.color="red"} 
			else {BText.style.color="red"}
		}
	}

	ChangeRightWrong ()

	setTimeout(() => {

		NextQuestion()
		righttext.style.display = wrongtext.style.display = "none"; // Wrong and Right text above to dissapear
		AText.style.color=BText.style.color=CText.style.color="#f1f1f1"; // Answers text to white again


	}, QuestionChangeDelay)
}


function RightAnswer () {
	if (CurrentQuestionIndex!=0) {RIGHT++}
	righttext.style.display = "block";

	// Showing big Doge:

	BigDOGE.style.transform="translateY(20%)"
	setTimeout("BigDOGE.style.transform='translateY(100%)'" ,QuestionChangeDelay); 
}

function WrongAnswer () {
	if (CurrentQuestionIndex!=0) {WRONG++}
	wrongtext.style.display = "block";

	//Showing small Doge:

	SmallDOGE.style.transform="translateY(20%)"
	setTimeout("SmallDOGE.style.transform='translateY(100%)'" ,QuestionChangeDelay);
}

function ChangeRightWrong () {
    right.innerHTML = 'Правильно: '+RIGHT+'';
    wrong.innerHTML = 'Неправильно: '+WRONG+'';
}

function NextQuestion () {
    if (CurrentQuestionIndex != questions.length-1) {CurrentQuestionIndex++}
	ChangeHeader()
}

function PreviousQuestion () {
    if (CurrentQuestionIndex != 0) {CurrentQuestionIndex--} 
	ChangeHeader()
}

function SkipFunction () {
    alert("Эта функция будет добавлена. This function will be added.")
}

document.onkeydown = CheckKey;

function CheckKey(event) { 
	// If "leftarrow" key is pressed PreviousQuestion starts
	// If "rightarrow" key is pressed NextQuestion starts

	if (event.keyCode == '37') {PreviousQuestion();}
	if (event.keyCode == '39') {NextQuestion();}
}

function ChangeSign (CurrentQuestionIndex) {
	Sign.src='images/'+CurrentQuestionIndex+'.png';
	Sign.style.display="block"
	toHead.style.marginTop = "10px"
}

function EndOfQuestions () {
    question.innerHTML = "Спасибо!"
    AText.style.display = BText.style.display = CText.style.display = "none" // All text next to checkboxes dissapear
    CheckRight.style.display = "none"
    SkipButton.style.display = "none"
    A.style.display = B.style.display = C.style.display = "none" // All checkboxes dissapear
	A.checked = B.checked = C.checked = false // All checkboxes to unchecked position
}

go.onclick = function () {
    CurrentQuestionIndex = inputButton.value
    ChangeHeader(CurrentQuestionIndex)
    inputButton.value = ""
}

// 0 for Russian
// 1 for English

// let languageNow = 0;

function MEGATRANSLATOR () {

	alert("Эта функция скоро будет добавлена. This function will be added soon.")
	// if (languageNow == 1) {TranslateToEnglish()}
	// else if (languageNow == 0) {TranslateToRussian()};

}

function TranslateToEnglish () {
	HowToLicense.innerHTML = "Getting driver license in Florida";

	Algo0.innerHTML = "Algorithm"
	Algo1.innerHTML = "1. If you don't have / had driver license of another state / country get course online"
	Algo2.innerHTML = "2. Register for written test in DMV. For training use free simulator (russian language only)"
	Algo3.innerHTML = "3. Register and pass road test in DMV"

	Docs0.innerHTML = "Documents"
	Docs1.innerHTML = "List of required documents"
	Docs2.innerHTML = "Price: $50-80 for road test and issuance of a driver's licence"


	Prep0.innerHTML = "Study materials"
	Prep1.innerHTML = "List of DMVs on a map"
}

function TranslateToRussian () {
	HowToLicense.innerHTML = "Как получить водительские права в Флориде?";

	Algo0.innerHTML = "Алгоритм"
	Algo1.innerHTML = "1. Если у Вас нету прав в любой стране кроме США: пройдите <a href='https://www.flhsmv.gov/driver-licenses-id-cards/education-courses/driver-improvement-schools/traffic-law-substance-abuse-education-tlsae-find-approved-listing-tlsae-course-providers/' target='_blank'>обучение</a> онлайн."
	Algo2.innerHTML = "2. Запишитесь на сдачу Written test (теории) в DMV в Вашем county. Для подготовки используйте бесплатный <a href='questions.html' target='_blank'>тренажёр</a>."
	Algo3.innerHTML = "3. Сдайте Road Test (практику) в DMV."


	Docs0.innerHTML = "Документы"



	Prep0.innerHTML = "Материалы для подготовки"
}

// Array with all questions:

const questions = [
    {
		question:"Сколько будет 2+2?",
		answers: [
			{text: '4', correct: true},
			{text: '22', correct: false},
			{text: '5', correct: false}
		]
	},
	{
		question:"1. Ты двигаешься по двухсторонней улице и ищешь место для парковки",
		answers: [
			{text: 'Ты можешь припарковать машину на любой стороне улицы, включая левую сторону, расположив автомобиль против движения потока', correct: false},
			{text: 'Ты должен парковать машину на правой стороне дороги, направив автомобиль по ходу. движения потока', correct: true},
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
		question:"3. Ты двигаешься по дороге, которая имеет две полосы в твоем направлении. Ты находишься в правой полосе. Впереди тебя медленно двигается другая машина. Когда ты перестраиваешься на левую полосу, чтобы ее обогнать, она также перестраивается на левую полосу, блокируя тебя. Ты должен",
		answers: [
			{text: 'Свернуть обратно на правую полосу и обогнать эту машину справа', correct: false},
			{text: 'Подать звуковой сигнал и прижаться поближе к этой машине, пока она не съедет с левой полосы', correct: false},
			{text: 'Замедлить скорость и отодвинуться на безопасное расстояние от этой машины. Наблюдай, что она будет делать дальше', correct: true}
		]
	},

	{
		question:"4. Во время движения по двухполосной дороге, ты входишь в крутой поворот и видишь большую, медленно двигающуюся машину, которая заняла твою полосу и правую обочину. У тебя недостаточно места для того, чтобы снизить скорость позади этой машины. По встречной полосе идет встречное движение. С правой стороны ограждение. Ты должен",
		answers: [
			{text: 'Оставайся на своей полосе и старайся снизить скорость. Подай звуковой сигнал, что бы предупредить других воителей. Старайся прижаться правой стороной машины к ограждению, что бы оно помогло остановиться.', correct: true},
			{text: 'Старайся свернуть налево через полосу встречного движения, и останови машину не левой обочине дороги', correct: false},
			{text: 'Выезжай на полосу встречного движения, обгони медленно двигающуюся машину и после обгона вернись на свою полосу движения', correct: false}
		]
	},

	{
		question:"5. Во время движения ты видишь этот знак",
		answers: [
			{text: 'Если ты опытный водитель, ты можешь игнорировать этот знак, но молодые водители должны снизить скорость на спуске дороги', correct: false},
			{text: 'Ты должен снизить скорость и быть готовым переключиться на пониженную передачу, чтобы контролировать скорость, пока дорога идет на спуск', correct: true},
			{text: 'Ты можешь игнорировать этот знак. Он только для водителей грузовых машин', correct: false}
		]
	},

	{
		question:"6. Во время движения ты должен",
		answers: [
			{text: 'Держи левую руку на руле, а правую - на коробке передач', correct: false},
			{text: 'Аккуратно расположи левую руку на подлокотнике, и держи руль правой рукой', correct: false},
			{text: 'Старайся держать обе руки на руле', correct: true}
		]
	},

	{
		question:"7. Фары должны быть включены",
		answers: [
			{text: 'Отзакаты до рассвета', correct: true},
			{text: 'с8 рт до 8 ат', correct: false},
			{text: 'За 1/2 часа до заката и выключены через 1/2 часа после рассвета', correct: false}
		]
	},

	{
		question:"8. Любой водитель, не достигший 18 лет, который накопил шесть и более штрафных баллов в течении 12 месяцев, автоматически получает какое именно ограничение на один год?",
		answers: [
			{text: 'Ездить за рулём без пассажиров в машине', correct: false},
			{text: 'Ездить за рулём в присутствии другого водителя, которому 21 год и старше', correct: false},
			{text: 'Ездить за рулём только в деловых поездках', correct: true}
		]
	},

	{
		question:"9. Тормоза, которые автоматически останавливают трейлер, если он отрывается от буксирующего транспортного средства, требуются на всех прицепах весом",
		answers: [
			{text: '10.000 паундов и больше', correct: false},
			{text: '5.000 паундов и больше', correct: false},
			{text: '3.000 паундов и больше', correct: true}
		]
	},

	{
		question:"10. Ты едешь за рулём автомобиля с автоматической коробкой передач. Когда ты паркуешься на подъёме дороге, ты должен",
		answers: [
			{text: 'Поставить передачу на РАБК и не затягивать ручной тормоз', correct: false},
			{text: 'Затягивать ручной тормоз и поставить передачу на нейтральную', correct: false},
			{text: 'Сначала затянуть ручной тормоз, до того как поставить на Рагк', correct: true}
		]
	},

	{
		question:"11. Ты двигаешься по крайней правой полосе автомагистрали и подъезжаешь к зоне слияния полос, где машины заезжают на магистраль. Ты должен",
		answers: [
			{text: 'Отрегулировать свою скорость или перестроиться в центральную полосу так, что бы дать возможность машинам, въезжающим на магистраль, безопасно влиться в поток', correct: true},
			{text: 'Включить аварийные огни чтобы дать знать машинам, въезжающим на магистраль, когда будет безопасно влиться в поток', correct: false},
			{text: 'Продолжать движение с той же скоростью и в том же положении на полосе, потому что у тебя главная дорога', correct: false}
		]
	},

	{
		question:"12. Ты движешься по скользкой дороге, и твою машину начинает заносить. Ты должен",
		answers: [
			{text: 'Не нажимать на тормоза, за исключением случаев возможного столкновения с чем- либо. Убрать ногу с педали газа, и вести машину в сторону заноса, что бы выровнять её. Затем уже направляться в нужном направлении', correct: true},
			{text: 'Продолжать нажимать на педаль газа, вести машину в сторону правой обочины', correct: false},
			{text: 'Немедленно начать тормозить, вести машину в нужном направлении', correct: false}
		]
	},

	{
		question:"13. Вы управляете автомобилем, не оборудованным антиблокировочной тормозной системой (АВS). Если тормоза отказывают, когда Вы пытаетесь остановиться. Вы должны",
		answers: [
			{text: 'Перейти в режим парковки, если у Вас автоматическая трансмиссия', correct: false},
			{text: 'Быстро и резко нажимать на педаль тормоза прерывистыми движениями. Перейти на пониженную передачу и медленно затянуть стояночный тормоз', correct: true},
			{text: 'Выжать педаль тормоза в пол и удерживать ее в таком положении. Затем резко затянуть стояночный тормоз', correct: false}
		]
	},

	{
		question:"14. Когда ты остановился у перекрёстка со светофором",
		answers: [
			{text: 'Ты должен остановиться хотя бы за 15 фитов до пешеходного перехода', correct: false},
			{text: 'Ты не должен заблокировать пешеходный переход, и но одной частью твоя машина не должна его загородить', correct: true},
			{text: 'Ты должен остановиться перед пешеходным переходом, затем проехать немного вперёд на пешеходный переход и там ждать зелёного света', correct: false}
		]
	},

	{
		question:"15. Когда ты паркуешь машины на подъёме дороги в бордюром, ты должен направить передние колёса",
		answers: [
			{text: 'В сторону бордюра', correct: false},
			{text: 'Либо в сторону, либо от бордюра', correct: false},
			{text: 'От бордюра', correct: true}
		]
	},

	{
		question:"16. Во время движения по сельской дороге твои правые колёса съехали асфальта. Ты должен крепко держать руль и",
		answers: [
			{text: 'Вести машину направо, в сторону обочины или кювета', correct: false},
			{text: 'Вести машину налево, обратно на дорогу', correct: false},
			{text: 'Вести машину по прямой, аккуратно притормаживая', correct: true}
		]
	},

	{
		question:"17. Ты двигаешься за рулём, и начинается сильный дождь. Ты должен",
		answers: [
			{text: 'Двигаться с такой же скоростью, как движется поток', correct: false},
			{text: 'Замедлить скорость, чтобы избежать гидропланирования', correct: true},
			{text: 'Подъехать поближе к впереди идущей машине', correct: false}
		]
	},

	{
		question:"18. Для безопасности, фары твоей машины должны быть в рабочем состоянии. Какое из следующих утверждений по поводу проверки фар верное?",
		answers: [
			{text: 'На современных автомобилях установлены надёжные фары, и тебе практически никогда не нужно их проверять', correct: false},
			{text: 'Ты должен проверять все свои фары один раз в год, и своевременно заменять перегоревшие лампочки', correct: false},
			{text: 'Ты должен проверять все свои фары часто, и своевременно заменять перегоревшие лампочки', correct: true}
		]
	},

	{
		question:"19. Ты едешь за рулём машины, обородованной ремнями безопасности. Ты должен быть пристёгнут ремнями, за исключением случаев, если",
		answers: [
			{text: 'Ты старше 18 лет', correct: false},
			{text: 'Ты зарегистрирован как самостоятельно застрахованный в Бюро Автомобильного Страхования', correct: false},
			{text: 'Ты имеешь определённые медицинские показания, при которых пристёгивание ремнями безопасности может быть небезопасным', correct: true}
		]
	},

	{
		question:"20. Во время часа пик за тобой близко двигается другая машина. Иногда ее водитель дает тебе звуковой сигнал, если ты не ускоряешься достаточно быстро. Ты должен",
		answers: [
			{text: 'Остаться стоять, когда поток движения поедет вперед. чтобы спровоцировать машину сзади на то, чтобы обогнала тебя', correct: false},
			{text: 'Сделать внезапную остановку, чтобы наказать водителя сзади, надеясь что он отъедет подальше', correct: false},
			{text: 'Избегать резких движений. Ускоряться и тормозить аккуратно, и увеличить дистанцию до впереди идущей машины', correct: true}
		]
	},

	{
		question:"21. Когда ты паркуешь машину с механической коробкой передач на подъеме дороги, ты должен использовать",
		answers: [
			{text: 'Заднюю передачу', correct: false},
			{text: 'Нейтральную передачу', correct: false},
			{text: 'Первую передачу', correct: true}
		]
	},

	{
		question:"22. Ты движешься по двухполосной дороге ночью. Навстречу тебе двигается транспортное средство с одной фарой. Ты должен",
		answers: [
			{text: 'Замедлиться и помигать дальними фарами встречному транспортному средству', correct: false},
			{text: 'Прижаться как можно правее, на случай если приближающееся транспортное средство находиться частично на правой полосе', correct: true},
			{text: 'Помигать дальними фарами встречному транспортному средству, что бы дать водителю знать, что у него горит только одна фара', correct: false}
		]
	},

	{
		question:"23. Когда ты паркуешь машину на подъёме дороги, твои передние колёса должны быть",
		answers: [
			{text: 'Направлены так, что если машина покатится, она покатится на проезжую часть', correct: false},
			{text: 'Направлены так, как направлены колёса у машины позади твоей', correct: false},
			{text: 'Направлены так, что если машина покатится, она покатится в сторону обочины или бордюра', correct: true}
		]
	},

	{
		question:"24. Ты подъезжаешь к перекрестку, где установлен стоп-знак. Ты должен",
		answers: [
			{text: 'Замедлиться почти до полной остановки и посмотреть по сторонам. Если путь свободен, можно продолжать движение без остановки', correct: false},
			{text: 'Замедлиться со обоснованной скорости и посмотреть по сторонам. Если путь свободен, можно проезжать без полной остановки', correct: false},
			{text: 'Полностью остановиться и уступить дорогу всем автомобилям и пешеходам', correct: true}
		]
	},

	{
		question:"25. Ты подъезжаешь к перекрестку, где ты хочешь повернуть направо, и горит зеленый свет. Ты должен",
		answers: [
			{text: 'Помни, что ты не должен уступать дорогу пешеходам при повороте направо на зеленый свет', correct: false},
			{text: 'Обрати внимания на регулирующие знаки, убедись что твой поворот не запрещен', correct: true},
			{text: 'Начать свой поворот без снижения скорости, и снижать ее в середине поворота, если нужно', correct: false}
		]
	},

	{
		question:"26. Во время движения по двухполосной дороге, если ты должен обогнать другую машину",
		answers: [
			{text: 'Ты должен включить поворотник до того, как выехал на встречную полосу, и убедиться, что у других участников дорожного движения было достаточно время чтобы увидеть его до начала твоего манёвра', correct: true},
			{text: 'Ты не должен включать поворотник, потому что каждый участник дорожного движения уже знает, что ты планируешь делать', correct: false},
			{text: 'Ты должен включить поворотник только в ночное время или при плохой видимости на дороге', correct: false}
		]
	},

	{
		question:"27. Любой водитель, которого остановил полицейский офицер и у которого обнаружен уровень алкоголя в дыхании или в крови 0.08 и выше, наравне с арестом получит",
		answers: [
			{text: 'Отмену страховки на автомобиль', correct: false},
			{text: 'Приостановление водительских прав', correct: true},
			{text: 'Штраф $500', correct: false}
		]
	},

	{
		question:"28. Во время движения ты видишь животное, которое стоит или идет на обочине дороги. Ты должен понимать, что",
		answers: [
			{text: 'Животное знает, как перейти дорогу безопасно', correct: false},
			{text: 'Животное может побежать через дорогу перед твоей машиной', correct: true},
			{text: 'Животное убежит, когда ты подъедешь ближе', correct: false}
		]
	},

	{
		question:"29. Если ты попал в аварию, и не был пристёгнут ремнём безопасности",
		answers: [
			{text: 'Подушки безопасности защитят тебя, как если бы ты был пристёгнут', correct: false},
			{text: 'Утебя меньше шансов выжить, нежели чем если бы ты был пристёгнут', correct: true},
			{text: 'У тебя больше шансов выжить, нежели чем если бы ты был пристёгнут', correct: false}
		]
	},

	{
		question:"30. Ты подъезжаешь к ж/д переезду, оборудованному светофором и шлагбаумом. Если светофор начал мигать красным, а шлагбаум еще открыт,",
		answers: [
			{text: 'Ты должен остановиться перед ж/д переездом. Шлагбаум скоро закроется, и это противозаконно проезжать через такой переезд', correct: true},
			{text: 'Ты должен ускориться немного, чтобы успеть проехать переезд до того, как закроется шлагбаум', correct: false},
			{text: 'Ты должен продолжать движение, соблюдая скоростной лимит, если шлагбаум еще не начал закрываться', correct: false}
		]
	},

	{
		question:"31. Ты едешь в магазин за детским креслом для своего двухлетнего ребенка. Ты должен выбрать",
		answers: [
			{text: 'Такое детское кресло, которое подходит твоему ребенку и подходит твоей машине', correct: true},
			{text: 'Такое детское кресло, которое соответствует стандарту 7ВВ 2.0', correct: false},
			{text: 'Самое дорогое детское кресло, которое можешь себе позволить', correct: false}
		]
	},

	{
		question:"32. Если твои водительские права и номера на машину были приостановлены за отсутствие страховки согласно Флоридскому закону о финансовой ответственности, ты должен",
		answers: [
			{text: 'Посетить курс повышения квалификации водителей и предъявить подтверждение приобретения страховки', correct: false},
			{text: 'Оплатить $150 и предъявить подтверждения приобретения страховки', correct: true},
			{text: 'Посетить курс по финансовой ответственности и предъявить подтверждения приобретения страховки', correct: false}
		]
	},

	{
		question:"33. На некоторых перекрестках светофоры имеют сенсоры, определяющие автомобили, и эти светофоры переключатся только тогда,",
		answers: [
			{text: 'Когда машина, направляющаяся на красный свет, остановиться за 20 фитов до стоп- линии', correct: false},
			{text: 'Когда машина, направляющаяся на красный свет, остановится у стоп-линии', correct: true},
			{text: 'Когда машина, направляющаяся на красный свет, начнет пересекать пешеходный переход', correct: false}
		]
	},

	{
		question:"34. Ты остановился перед нерегулируемом ж/д переездом, обозначенным знаком СгоззБиск (Железнодорожный переезд). Когда поезд проехал",
		answers: [
			{text: 'Ты должен начинать движение, пока поезд не отъедет на 500 фитов от переезда', correct: false},
			{text: 'Ты не должен начинать движение, пока ты не убедишься, что другой поезд не подъезжает к переезду', correct: true},
			{text: 'Ты можешь начинать движение сразу, как только другие машины начнут двигаться', correct: false}
		]
	},

	{
		question:"35. Какие из следующих утверждений по поводу алкоголя, за рулем верное?",
		answers: [
			{text: 'Молодые водители менее подвержены влиянию алкоголя, нежели взрослые', correct: false},
			{text: 'Никто не может безопасно вести машину в состоянии алкогольного опьянения, даже не смотря на большой опыт вождения', correct: true},
			{text: 'Если ты очень аккуратный водитель, то ты сможешь вести машину безопасно в состоянии алкогольного опьянения', correct: false}
		]
	},

	{
		question:"36. Ты движешься слишком медленно, если",
		answers: [
			{text: 'Ты блокируешь другие машины, движущиеся с нормальной скоростью', correct: true},
			{text: 'За тобой близко едет другая машина', correct: false},
			{text: 'Ты двигаешься со скоростью, которая ниже, чем установлена скоростным лимитом', correct: false}
		]
	},

	{
		question:"37. Во время движения по магистрали, ты должен помнить, что самая большая опасность на магистрали - это",
		answers: [
			{text: 'Боковые столкновения из-за смены полос', correct: false},
			{text: 'Задние столкновения из-за несоблюдения дистанции', correct: true},
			{text: 'Лобовое столкновения со встречным потоком', correct: false}
		]
	},

	{
		question:"38. Ты должен проверять, чтобы твои внутренние и внешние зеркала были чистыми и правильно отрегулированными",
		answers: [
			{text: 'Каждый раз, собираясь вести машину, до того как ее завести', correct: true},
			{text: 'Тогда, когда тебе кажется, что кто-то ударил зеркало', correct: false},
			{text: 'Раз в неделю', correct: false}
		]
	},

	{
		question:"39. Ты двигаешься за рулём машины и видишь впереди мотоциклиста, который едет по левой части твоей полосы. Кажется, что места на полосе достаточно для того, чтобы ты мог двигаться рядом с мотоциклистом. Согласно закону",
		answers: [
			{text: 'Автомобиль небольшого размера может делить одну полосу с мотоциклистом', correct: false},
			{text: 'Автомобиль может делить одну полосу с мотоциклистом, если мотоциклист даст об этом соответствующий сигнал', correct: false},
			{text: 'Нельзя автомобилю делить одну полосу вместе с мотоциклистом', correct: true}
		]
	},

	{
		question:"40. Когда ты подъезжаешь к нерегулируемому железнодорожному переезду, без светофора и шлагбаума, ты должен",
		answers: [
			{text: 'Продолжать движения с нормальной скоростью через переезд', correct: false},
			{text: 'Снизить скорость, посмотреть по сторонам и быть готовым к остановке', correct: true},
			{text: 'Сделать полную остановку', correct: false}
		]
	},

	{
		question:"41. Ты первый, кто прибыл к месту аварии, в результате которой есть пострадавший. Первое, что ты должен сделать, это",
		answers: [
			{text: 'Вызвать помощь или отправить кого-то за помощью', correct: true},
			{text: 'Оказать первую медицинскую помощь пострадавшему', correct: false},
			{text: 'Регулировать трафик вокруг места аварии', correct: false}
		]
	},

	{
		question:"42. Ты двигаешься за рулём автомобиля в хорошую погоду, при хороших дорожных условиях. Верный способ убедиться в том, что двигаешься на безопасной дистанции до других машин, это",
		answers: [
			{text: 'Посмотреть, когда впереди идущая машина проедет дорожный знак или другой объект на дороге. У тебя должно занять не менее трёх секунд, что бы до него доехать', correct: true},
			{text: 'Рассчитать, сколько корпусов автомобилей расположилось бы между твоей и впереди идущей. Должно быть не менее трёх.', correct: false},
			{text: 'Посмотреть, какую дистанцию держать другие автомобили, и использовать такую же', correct: false}
		]
	},

	{
		question:"43. Ты собираешься ехать за рулем с ребенком, которому до трех лет. Ты должен",
		answers: [
			{text: 'Закрепить ребенка на переднем сиденье в специальном детском кресле', correct: false},
			{text: 'Отключить пассажирские подушки безопасности и закрепить ребенка на переднем сиденье в специальном детском кресле', correct: false},
			{text: 'Закрепить ребенка на заднем сиденье в специальном детском кресле', correct: true}
		]
	},

	{
		question:"44. Ты двигаешься в потоке машин по дороге с двумя и более полосами в каждом направлении. Ты должен",
		answers: [
			{text: 'Двигаться Немного медленнее, чем скоростной лимит, чтобы не получить тикет за превышение скорости', correct: false},
			{text: 'Избегать двигаться в слепой зоне других водителей. Вместо этого ускориться или отъехать назад, чтобы другие водители могли тебя видеть', correct: true},
			{text: 'Двигаться рядом с другими машинами или немного позади их для экономии топлива', correct: false}
		]
	},

	{
		question:"45. Если тебя сзади догоняет спецмашина с включенными мигающими огнями и сиренами, ты должен",
		answers: [
			{text: 'Немедленно остановиться, где ехал, и дать возможность спецмашине тебя объехать', correct: false},
			{text: 'Прижаться к ближайшей обочине дороги и стоять, пока спецмашина не проедет', correct: true},
			{text: 'Ускориться, чтобы уехать с пути спецмашины', correct: false}
		]
	},

	{
		question:"46. Каждый раз, собираясь ехать за рулем, до того как завести припаркованный автомобиль, ты должен убедиться, что он",
		answers: [
			{text: 'стоит на повышенной передаче', correct: false},
			{text: 'стоит в режиме парковочной или нейтральной передаче', correct: true},
			{text: 'стоит на задней передаче', correct: false}
		]
	},

	{
		question:"47. Ты двигаешься по дороге с несколькими полосами движения, и другие машины постоянно перестраиваются впереди тебя в твою полосу. Ты отъезжаешь назад, что бы возобновить безопасную дистанцию. Ты должен",
		answers: [
			{text: 'Продолжать отодвигаться назад всякий раз, когда трафик заставляет, что бы увеличить дистанцию до впереди идущей машины', correct: true},
			{text: 'Аккуратно подъехать к впереди идущей машине, чтобы между вами никто не перестроился', correct: false},
			{text: 'Ускориться в следующий раз, когда другая машина начнёт перестраиваться впереди тебя, чтобы заблокировать ей путь', correct: false}
		]
	},

	{
		question:"48. Ты двигаешься по двухполосной дороге, и сзади идущаямашина хочет тебя обогнать. Ты должен",
		answers: [
			{text: 'Дать сигнал сзади идущему водителю, когда обогнать тебя будет безопасно, включением аварийных огней', correct: false},
			{text: 'Продолжать движение по центру своей полосы', correct: false},
			{text: 'Прижаться к правой стороне своей полосы и дать возможность сзади идущей машине лучшего обзора дороги впереди тебя', correct: true}
		]
	},

	{
		question:"49. Если во время движения у твоей машины лопнуло колесо, ты не должен использовать тормоза, пока",
		answers: [
			{text: 'Ты полностью не съехал с дороги', correct: false},
			{text: 'Твоя скорость не снизиться до 20 миль в час', correct: false},
			{text: 'Ты плавно не снизил скорость, и машина находиться под твоим контролем', correct: true}
		]
	},

	{
		question:"50. Во время движения ночью",
		answers: [
			{text: 'Ты можешь двигаться только с включенными габаритными огнями, вместо фар, если ты двигаешься на низкой скорости', correct: false},
			{text: 'Ты можешь двигаться только с включенными габаритными огнями, если видимость на дороге достаточная', correct: false},
			{text: 'Ты не можешь двигаться только с включенными габаритными огнями, вместо фар. Это противозаконно', correct: true}
		]
	},

	{
		question:"51. Ты двигаешься по скользкой дороге, твоя машина не имеет системы АВ$. Если машину начинает заносить когда ты нажимаешь на тормоза, ты должен",
		answers: [
			{text: 'Продолжать нажимать на педаль тормоза, и вести машину в нужном направлении', correct: false},
			{text: 'Стучать по тормозам сильно и быстро, вести машину в сторону правой обочины', correct: false},
			{text: 'Убрать ногу с педали газа, за исключением возможного столкновения. Веди машину в сторону заноса чтобы выровнять ее. Затем аккуратно тормози', correct: true}
		]
	},

	{
		question:"52. Управляя автомобилем, Вы видите впереди дорожный знак желтого цвета. Желтый цвет означает, что это",
		answers: [
			{text: 'Знак, предупреждающий о ведении строительных работ, или знак Detour (Объезд) в зоне строительных работ', correct: false},
			{text: 'Знак Do Not Enter (Въезд запрещен) или Wrong Way (Проезда нет)', correct: false},
			{text: 'Общий предупреждающий знак или знак, предупреждающий об опасности на дороге', correct: true}
		]
	},

	{
		question:"53. Во время движения у твоей машины лопнуло колесо. После того, как ты снизил скорость и восстановил контроль, ты должен",
		answers: [
			{text: 'Аккуратно затормозил и полностью съехал с дороги', correct: true},
			{text: 'Продолжать движение на пустом колесе до ближайшей сервисной станции', correct: false},
			{text: 'Продолжать движение на пустом колесе до ближайшего съезда с дороги', correct: false}
		]
	},

	{
		question:"54. Дальние фары не должны быть использованы за",
		answers: [
			{text: '300 фитов до встречных машин', correct: false},
			{text: '400 фитов до встречных машин', correct: false},
			{text: '500 фитов до встречных машин', correct: true}
		]
	},

	{
		question:"55. Если одна машина буксирует другую на тросе(на цепочке), то этот трос должен быть",
		answers: [
			{text: 'Оборудован металлическим рефлектором, заметным с обеих сторон', correct: false},
			{text: 'Обозначен белым флажком или кусочном ткани площадью хотя бы квадратных инчей', correct: true},
			{text: 'Покрашен красным', correct: false}
		]
	},

	{
		question:"56. Ты двигаешься за рулем машины, имеющей систему АВS. Если твои тормоза не срабатывают, когда ты пытаешься остановиться, ты должен",
		answers: [
			{text: 'Переключиться на парковочную передачу', correct: false},
			{text: 'Нажми на педаль тормоза и держи ее внизу. Переключись на пониженную передачу и медленно затяни ручной тормоз', correct: true},
			{text: 'Стучи по педали тормоза сильно и быстро, резко затягивая ручной тормоз', correct: false}
		]
	},

	{
		question:"57. Ты двигаешься за рулем и видишь впереди этот знак",
		answers: [
			{text: 'Опытные водители могут войти в поворот не снижая скорость, но молодые водители должны снизит скорость до установленной на знаке', correct: false},
			{text: 'Установленная на знаке скорость - это максимальная скорость, с которой разрешено войти в поворот', correct: true},
			{text: 'При хороших дорожных условиях ты можешь войти в поворот не снижая скорости, но в ночное время либо на мокрой дороге ты должен снизить скорость до установленной на знаке', correct: false}
		]
	},

	{
		question:"58. Мигающий красный светофор на перекрестке обозначает",
		answers: [
			{text: 'Ты должен снизить скорость и продолжать движение с осторожностью', correct: false},
			{text: 'Остановись, и затем проезжай, если безопасно', correct: true},
			{text: 'Остановись и жди, пока свет переключиться на зеленый', correct: false}
		]
	},

	{
		question:"59. Если при движении по сельской местности правые колеса Вашего автомобиля сойдут с дорожного покрытия, Вы должны твердо держать рулевое колесо и",
		answers: [
			{text: 'сильно нажать на педаль тормоза, чтобы остановить автомобиль.', correct: false},
			{text: 'убрать ногу с педали газа. Затем слегка нажимать на педаль тормоза, пока Вы не будете двигаться на маленькой скорости.', correct: true},
			{text: 'удерживать педаль газа на том же уровне и вырулить обратно на дорожное покрытие', correct: false}
		]
	},

	{
		question:"60. Если вам менее 17 лет и вы имеете водительское удостоверение, вас должен сопровождать водитель в возрасте от 21 года, имеющий действующее водительское удостоверение класса Е или выше, если вы хотите управлять транспортным средством в промежуток",
		answers: [
			{text: 'с1.00 до 7.00, если только вы не едите на работу или с нее', correct: false},
			{text: 'с23.00 до 6.00, если только вы не едете на работу или с нее', correct: true},
			{text: 'с 00.00 до 7.00, если только вы не едете на работу или с нее', correct: false}
		]
	},

	{
		question:"61. На перекрёстке со светофором горит желтая стрелка одновременно с зелёным светом. Это обозначает, что",
		answers: [
			{text: 'Машины, которые двигаются в направлении стрелки, должны остановиться, если могут. Стрелка скоро станет красной', correct: true},
			{text: 'В направлении стрелки можно проезжать с осторожностью', correct: false},
			{text: 'В направлении стрелки можно проезжать после остановки', correct: false}
		]
	},

	{
		question:"62. Ты двигаешься по двухполосной дороге, позади большой машины, ты хочешь обогнать. Что. бы убедиться, что впереди неё ты достаточно далеко видишь, ты должен",
		answers: [
			{text: 'Оставаться на безопасном расстоянии позади машины, которую ты хочешь обогнать', correct: true},
			{text: 'Осторожно перестроиться на встречную полосу, что бы глянуть впереди большой машины, затем вернуться обратно в свою полосу', correct: false},
			{text: 'Прижаться поближе к машине, которую ты хочешь обогнать', correct: false}
		]
	},

	{
		question:"63. Ты двигаешься за рулем во время часа пик, находясь в плотном трафике. В машине есть какие-либо материалы для чтения",
		answers: [
			{text: 'Можно читать за рулем, пока стоишь в пробке', correct: false},
			{text: 'Нельзя читать за рулем книги, журналы и прочие материалы', correct: true},
			{text: 'Можно читать за рулем газеты и журналы, если они в электронной версии', correct: false}
		]
	},

	{
		question:"64. При заезде на магистраль, нельзя останавливаться на полосе ускорения, за исключением случаев, когда поток",
		answers: [
			{text: 'Превышает скоростной лимит', correct: false},
			{text: 'Двигается со скоростью менее чем 40 миль в час', correct: false},
			{text: 'Слишком плотный, чтобы влиться безопасно без остановки', correct: true}
		]
	},

	{
		question:"65. Если светофор на перекрёстке не работает, ты должен",
		answers: [
			{text: 'Съехать на обочину и дождаться регулировщика', correct: false},
			{text: 'Остановиться так, как будто это четырёхстопный перекрёсток', correct: true},
			{text: 'Уступить дорогу тем, кто поворачивает налево', correct: false}
		]
	},

	{
		question:"66. Когда ты поворачиваешь направо с четырёх-полосной дороги на другую четырёх-полосную дорогу, твой поворот должен быть сделан",
		answers: [
			{text: 'Из правой полосы в правую полосу', correct: true},
			{text: 'Из левой полосы в левую полосу', correct: false},
			{text: 'Из левой полосы в правую полосу', correct: false}
		]
	},

	{
		question:"67. Вы двигаетесь по муниципальной дороге, имеющей по две полосы в каждом направлении, и приближаетесь к концу квартала. Впереди транспортное средство, движущееся по полосе рядом с Вами, остановилось перед пешеходным переходом, но Вы не видите никаких пешеходов. Вы должны",
		answers: [
			{text: 'продолжить двигаться с максимальной разрешенной скоростью мимо остановившегося транспортного средства.', correct: false},
			{text: 'предположить, что остановившееся транспортное средство ждет, пока можно будет повернуть, и его можно обогнать, не останавливаясь.', correct: false},
			{text: 'предположить, что пешеход может переходить улицу перед остановившимся транспортным средством и Вы не видите его. Вы не должны обгонять остановившийся автомобиль', correct: true}
		]
	},

	{
		question:"68. Двигаясь по автомагистрали с разделительной полосой, ты видишь этот дорожный знак впереди. Он обозначает, что.",
		answers: [
			{text: 'Впереди дорога закрыта на ремонт. Все транспортные средства, идущие в твоем направлении, должны будут ехать в объезд', correct: false},
			{text: 'Далее дорога сужается', correct: false},
			{text: 'Автомагистраль с разделительным барьером закончиться через 350-500 фитов, и далее ты окажешься на дороге с двухсторонним движением. Ты должен держаться правой стороны', correct: true}
		]
	},

	{
		question:"69. Когда водители автомобилей и мотоциклов делят дорогу с пешеходами, на чьей ответственности делать всё возможное для предотвращения столкновений с пешеходами?",
		answers: [
			{text: 'Это ответственность муниципальных планирующих служб, разрабатывающих дизайн дорог, перекрёстков и тротуаров', correct: false},
			{text: 'Эта ответственность водителей автомобилей и мотоциклов, но и пешеходы должны делать всё возможное для предотвращения аварий', correct: true},
			{text: 'Эта ответственность водителей и мотоциклов.', correct: false}
		]
	},

	{
		question:"70. Когда ты ночью подъезжаешь сзади к другой машине, движущейся в том же направлении, ты должен выключить дальние фары на расстоянии",
		answers: [
			{text: '300 фитов до другой машины', correct: true},
			{text: '100 фитов до другой машины', correct: false},
			{text: '200 фитов до другой машины', correct: false}
		]
	},

	{
		question:"71. Если ты едешь за рулем, и звонит сотовый телефон, ты должен",
		answers: [
			{text: 'Ответить на звонок, но предупредить что ты находишься за рулем и не можешь долго разговаривать', correct: false},
			{text: 'Посмотреть, кто звонит, и затем принять решение, ответить или нет за рулем', correct: false},
			{text: 'Не отвечать на звонок, а перезвонить после того, как безопасно припарковаться', correct: true}
		]
	},

	{
		question:"72. Ты остановился на красный свет, и ты первый в очереди на перекрестке. Когда свет меняется на перекрестке, ты должен",
		answers: [
			{text: 'Начинать движение, убедившись что путь свободен. Уступить дорогу пешеходам и автомобилям, находящимся на перекрестке', correct: true},
			{text: 'Дождаться, пока машины на соседней полосе начнут движение, и потом двигаться', correct: false},
			{text: 'Начинать движение. У тебя главная дорога', correct: false}
		]
	},

	{
		question:"73. Когда идет дождь, то самой скользкой дорогой считается",
		answers: [
			{text: 'После нескольких часов дождя', correct: false},
			{text: 'После нескольких дней дождливой погоды', correct: false},
			{text: 'В самом начале дождя, потому что капающее с автомобилей масло еще не смыто водой', correct: true}
		]
	},

	{
		question:"74. Ты двигаешься по крайней правой полосе многополосной дороги, рядом с бордюром. Внезапно автомобиль, двигающийся слева от тебя, начинает перестраиваться прямо в твою полосу, вот-вот заденет твой передний бампер. Ты должен",
		answers: [
			{text: 'Прижаться к правой части своей полосы и затормозить для избежания аварии', correct: true},
			{text: 'Оставаться в середине своей полосы, вести машину прямо. Резко затормози и будь готов к столкновению', correct: false},
			{text: 'Затормозить и стараться перестроиться в левую полосу, позади этой машины', correct: false}
		]
	},

	{
		question:"75. Если другой автомобиль двигается слишком близко к Вам, Вы должны",
		answers: [
			{text: 'не менять скорость и оставаться в середине полосы.', correct: false},
			{text: 'держать свою скорость, при этом слегка нажимать на педаль тормоза, чтобы помигать стоп-сигналами', correct: false},
			{text: 'снизить скорость и держаться правее, позволяя следующему за Вами автомобилю обогнать Вас.', correct: true}
		]
	},

	{
		question:"76. Ты подъезжаешь к перекрёстку и собираешься повернуть направо, горит зелёный свет. Ты должен снизить скорость, включить поворотник и",
		answers: [
			{text: 'Проверить, нет ли велосипедистов справа. Если есть, то уступить им дорогу и сделать поворот позади них', correct: true},
			{text: 'Сделать поворот', correct: false},
			{text: 'Сделать поворот, Если по дороге едет велосипедист, сделать поворот перед ним', correct: false}
		]
	},

	{
		question:"77. Ты едешь по парковке и видишь этот знак. Он обозначает",
		answers: [
			{text: 'Это парковочное место только для автомобилей, перевозящих люде-инвалидов и имеющих специальный пермит', correct: true},
			{text: 'Ты подъезжаешь к пешеходному переходу, используемому людьми-инвалидами', correct: false},
			{text: 'Инвалидам не нужно иметь специального пермита, чтобы припарковаться на этом месте', correct: false}
		]
	},

	{
		question:"78. Когда ты догоняешь велосипедиста сзади, ты должен снизить скорость и",
		answers: [
			{text: 'Двигайся поближе к велосипедисту, пока он даст сигнал, когда его можно будет обогнать', correct: false},
			{text: 'Оставаться как можно правее в правой полосе, не задев велосипедиста', correct: false},
			{text: 'Дождись, когда обогнать велосипедиста будет безопасно, на расстоянии хотя бы трёх фитов до него', correct: true}
		]
	},

	{
		question:"79. Когда ты останавливаешься у светофора или снижаешь скорость в автомобильном потоке, ты должен",
		answers: [
			{text: 'Снижай скорость переключением передач на пониженные, не касаясь педали тормоза', correct: false},
			{text: 'Включай аварийные огни, чтобы предупредить других водителей об остановке', correct: false},
			{text: 'Всегда тормози плавно, если возможно. Твои стоп-сигналы будут предупреждать других водителей о том, что ты снижаешь скорость или останавливаешься', correct: true}
		]
	},

	{
		question:"80. Если ты отказываешься сдать тест на определение в крови, моче или дыхании алкоголя или наркотиков, то.",
		answers: [
			{text: 'Твою страховку на автомобиль отменят', correct: false},
			{text: 'Тебе потребуется отплатить штраф $500', correct: false},
			{text: 'Том водительские права будут приостановлены на один год', correct: true}
		]
	},

	{
		question:"81. Ты остановился у перекрёстка с несколькими полосами движения, в ожидании зелёного света. Когда зелёный свет загорается, рядом стоящая машина быстро ускоряется, предлагая тебе погоняться с ней. Ты должен",
		answers: [
			{text: 'Убери ногу с педали газа и дай понять той машине, что ты не собираешься с ней гоняться', correct: true},
			{text: 'Запиши номер этой машины и позвони в полицию доложить о ней', correct: false},
			{text: 'Ускоряйся как эта машина, но до скорости, разрешённой скоростным лимитом', correct: false}
		]
	},

	{
		question:"82. Если полицейский офицер подозревает, что твоя машина не находиться в технически исправном состоянии, не соответствует флоридским стандартам безопасности, то офицер",
		answers: [
			{text: 'Может остановить твою машину в любое время для проведения инспекции', correct: true},
			{text: 'Может остановить твою машину только в том случае, если ты нарушил правило дорожного движения', correct: false},
			{text: 'Не может инспектировать твою машину', correct: false}
		]
	},

	{
		question:"83. Во время движения ты видишь этот знак. Оно обозначает",
		answers: [
			{text: 'По данному участку дороги возможно движение грузовиков с габаритным грузом', correct: false},
			{text: 'Ты должен включить аварийные огни на данном участке дороги при плохой видимости', correct: false},
			{text: 'Ты не можешь приехать прямо. Ты должен свернуть налево или направо', correct: true}
		]
	},

	{
		question:"84. Ты двигаешься в дневное время в условиях недостаточной видимости, например во время дождя, тумана или при задымлении, ты должен",
		answers: [
			{text: 'Включить ближний свет фар', correct: true},
			{text: 'Включить габаритные огни или ближний свет фар', correct: false},
			{text: 'Включить дальний свет фар', correct: false}
		]
	},

	{
		question:"85. Во время движения по дороге с несколькими полосами, ты видишь этот знак над одной из полос. Он обозначает, что данная полоса зарезервирована для",
		answers: [
			{text: 'Определенных транспортных средств, таких как автобусы или автомобили с большим количеством пассажиров в час пик', correct: true},
			{text: 'Более быстрого трафика', correct: false},
			{text: 'Транспортных средств, перевозящих опасные грузы', correct: false}
		]
	},

	{
		question:"86. Ты признан виновным в аварии, в результате которой пострадавший был доставлен в медицинское учреждение. По закону ты должен",
		answers: [
			{text: 'Оплатить $150 за вывоз скорой помощи', correct: false},
			{text: 'Посетить курс по избежанию аварий на дороге', correct: true},
			{text: 'Пересдать практический экзамен по вождению', correct: false}
		]
	},

	{
		question:"87. Когда ты подъезжаешь к перекрёстку, встречная машина внезапно поворачивает налево перед тобой. Она не успевает завершить манёвр к тому моменту, как ты подъедешь. Ты должен",
		answers: [
			{text: 'Свернуть налево и стараться проехать через встречную полосы на пересекаемую дорогу', correct: false},
			{text: 'Затормозить и прижаться к левой части своей полосы. Направляйся позади поворачивающей машины', correct: true},
			{text: 'Сверни направо и старайся сделать правый поворот на перекрёстке', correct: false}
		]
	},

	{
		question:"88. Если вовремя движения в долгом пути ты проголодался",
		answers: [
			{text: 'Рекомендуется остановиться, чтобы поесть. За рулем есть не разрешено', correct: true},
			{text: 'За рулем разрешено есть продукты, продаваемые в автомобильных ресторанах', correct: false},
			{text: 'За рулем разрешено есть упакованные продукты, такие как чипсы, но не разрешено кушать сендвичи', correct: false}
		]
	},

	{
		question:"89. Ты двигаешься по дороге и подъезжаешь к зоне, где ведутся дорожные работы",
		answers: [
			{text: 'Ты должен снизить скорость до 30 миль в час', correct: false},
			{text: 'Ты должен снизить скорость на 20 миль в час ниже установленной', correct: false},
			{text: 'Необходимая скорость для зоны дорожных работ будет установлена на одном из знаков, регулирующих скоростной лимит в зоне дорожных работ', correct: true}
		]
	},

	{
		question:"90. Твоя машина сломалась во время движения, поломка заставляет тебя остановиться. Ты должна постараться остановить машину полностью за пределами дороги в таком месте, чтобы ее было видно за",
		answers: [
			{text: '100 фитов спереди и за 150 фитов сзади', correct: false},
			{text: '200 фитов с каждой стороны', correct: true},
			{text: '150 фитов с каждой стороны', correct: false}
		]
	},

	{
		question:"91. Ты двигаешься в час пик в дневное время, и кто-то из соседней машины говорит тебе что твои стоп сигналы не работают. Ты должен двигаться до сервисной станции, тормозя при этом очень аккуратно, и",
		answers: [
			{text: 'Двигаться с открытым окном и использовать сигналы рукой, когда нажимаешь на педаль тормоза', correct: true},
			{text: 'Махать красным флажком, когда нажимаешь на педаль тормоза', correct: false},
			{text: 'Включаешь аварийные огни, когда нажимаешь на педаль тормоза', correct: false}
		]
	},

	{
		question:"92. Во время движения ты видишь животное, стоящее рядом с проезжей частью. Ты должен",
		answers: [
			{text: 'Снизить скорость и быть готовым уступить дорогу животному', correct: true},
			{text: 'Ускориться, чтобы успеть обогнать животное, пока оно не вышло на дорогу', correct: false},
			{text: 'Подать звуковой сигнал животному, чтобы оно испугалось и убежало с дороги', correct: false}
		]
	},

	{
		question:"93. Ты двигаешься по дороге с несколькими полосами движения. Впереди тебя по правой стороне дороги двигается велосипедист, который подает сигнал о перестроении либо повороте налево. Ты должен",
		answers: [
			{text: 'Подать звуковой сигнал чтобы предупредить велосипедиста о том, что ты его планируешь обогнать, и затем обогнать его с осторожностью', correct: false},
			{text: 'Ускориться, чтобы обогнать велосипедиста, и дать ему возможность перестроиться позади тебя', correct: false},
			{text: 'Замедлить скорость, если это безопасно, и дать возможность велосипедисту перестроиться впереди тебя. Велосипедисты имеют право использования всей левой полосы при повороте налево', correct: true}
		]
	},

	{
		question:"94. Ночью, если ты покидаешь ярко освещённое место, ты должен",
		answers: [
			{text: 'Двигаться с включенным дальним светом фар, независимо от потока машин', correct: false},
			{text: 'Двигаться медленно, пока глаза не привыкнут к темноте', correct: true},
			{text: 'Двигаться со скоростью потока, независимо от дорожных условий', correct: false}
		]
	},

	{
		question:"95. Когда ты подъезжаешь к перекрестку, где горит зеленый свет, ты должен",
		answers: [
			{text: 'Быть готовым ускориться, если свет переключиться на желтый', correct: false},
			{text: 'Снизить скорость на несколько миль в час, на случай если будет нужна остановиться', correct: false},
			{text: 'Подъезжать к перекрестку с такой скоростью, которая позволить тебе остановиться, если свет переключится', correct: true}
		]
	},

	{
		question:"96. Ты двигаешься по городской дороге. Большой грузовик остановился на дороге впереди тебя и начал заезжать задним ходом во двор рядом с дорогой. Ты должен",
		answers: [
			{text: 'Помигать фарами водителю грузовика, чтобы предупредить его о том, что ты хочешь его обогнать без остановки', correct: false},
			{text: 'Продолжить движение без остановки и обогнать грузовик. У тебя главная дорога', correct: false},
			{text: 'Остаться подальше от грузовика и дать ему возможность закончить маневр. Грузовик может заблокировать большую часть дороги, двигаясь задним ходом', correct: true}
		]
	},

	{
		question:"97. Ты двигаешься по двух полосной дороге, и видишь как на встречу едет мотоцикл, который направляется в твою полосу, приближается опасно близко. Ты должен",
		answers: [
			{text: 'Оставайся в своей полосе, тормози как можно сильнее, и приготовься к столкновению', correct: false},
			{text: 'Перестройся на середину дороги и дождись последнего момента, чтобы решить, в какую сторону свернуть', correct: false},
			{text: 'Подай звуковой сигнал, затормози и веди автомобиль в правую обочину или в кювет', correct: true}
		]
	},

	{
		question:"98. Ты двигаешься по дороге, имеющую велосипедную дорожку, и ты хочешь её пересечь для того, что бы перестроиться в полосу для поворота направо. Ты должен",
		answers: [
			{text: 'Замедлить скорость, включить поворотник и уступить дорогу велосипедистам на велодорожке', correct: true},
			{text: 'Включить поворотник и снизить скорость. Дать звуковой сигнал велосипедистам на велодорожке', correct: false},
			{text: 'Включить поворотник и пересечь велодорожку. Ускориться, если нужно, перед велосипедистом', correct: false}
		]
	},

	{
		question:"99. Нельзя устраивать гонки на дорогах общего пользования. Это опасно. Если тебя признали виновным в гонках на автомагистрали,",
		answers: [
			{text: 'Твое водительское удостоверение будет аннулировано', correct: true},
			{text: 'Твое право на управление транспортным средствам будет ограничено только для целей работы', correct: false},
			{text: 'Тебе будет необходимо пройти курс повышения квалификации водителей', correct: false}
		]
	},

	{
		question:"100. Если за тобой слишком медленно сзади едет машина, ты должен",
		answers: [
			{text: 'Продолжать движение с той же скоростью в середине своей полосы', correct: false},
			{text: 'Ускориться, чтобы увеличить дистанцию до сзади идущей машины', correct: false},
			{text: 'Замедлить скорость и принять правее, позволив сзади идущей машине тебя обогнать', correct: true}
		]
	},

	{
		question:"101. Ты двигаешься за рулем, и внезапно в твоём автомобиле лопнуло колесо. Ты должен",
		answers: [
			{text: 'Быстро нажми на педаль тормоза, чтобы остановить машину как можно быстрее', correct: false},
			{text: 'Не нажимай на педаль тормоза. Снижай скорость плавно и сконцентрируйся на управлении', correct: true},
			{text: 'Начни стучать по педали тормоза и веди машину так, чтобы контролировать от заноса', correct: false}
		]
	},

	{
		question:"102. Ты двигаешься за рулём автомобиля. На заднем сиденье в детском кресле находится ребёнок, который начинает плакать",
		answers: [
			{text: 'Ты можешь одной рукой вести машину, а второй рукой дотянуться до ребёнка чтобы успокоить его', correct: false},
			{text: 'Ты можешь обернуться и посмотреть на ребёнка, чтобы он увидел тебя и успокоился', correct: false},
			{text: 'Нельзя отвлекаться от дороги более чем на несколько секунд. Ты должен припарковать машину и уделить ребёнку внимание', correct: true}
		]
	},

	{
		question:"103. Если во время движения ты видишь этот знак, то это обозначает",
		answers: [
			{text: 'Дорога впереди разбита, и тебе придется объезжать ямы на асфальте', correct: false},
			{text: 'Дорога скользкая, если мокро, и ты должен снизить скорость во время дождя, чтобы избежать скольжения', correct: false},
			{text: 'Дорога впереди извилистая, ты должен снизить скорость', correct: true}
		]
	},

	{
		question:"104. У вас большой пик-ап трак поздней модели, имеющий задние сиденья. Вес пик-ап трака 6,500 паундов. Закон Флориды о ремнях безопасности",
		answers: [
			{text: 'Не требует передним пассажирам пристегиваться ремнями безопасности в машинах такого размера', correct: false},
			{text: 'Требует, чтобы все передние пассажиры пристегивались ремнями, а задние пассажиры старше пяти лет могут не пристегиваться', correct: false},
			{text: 'Требует, чтобы водитель и передние пассажиры пристегивались ремнями, и все пассажиры до 18 лет должны быть пристегнуты ремнями или детскими удерживающими устройствами, даже если они находятся на заднем сиденье', correct: true}
		]
	},

	{
		question:"105. Ты двигаешься по двухполосной дороге, где трафик идет в обоих направлениях. Впереди, на левой стороне дороги ты видишь знак в в такой форме",
		answers: [
			{text: 'Обгон запрещен. Ты въезжаешь в зоне, где нельзя обгонять', correct: true},
			{text: 'Велосипедная дорожка. Ты должен уступить дорогу велосипедистам', correct: false},
			{text: 'Предупреждение о том, что впереди поворот направо', correct: false}
		]
	},

	{
		question:"106. Когда ты делаешь трёх-поинтовый разворот, первое что необходимо сделать, это",
		answers: [
			{text: 'Переместиться как можно правее, проверить трафик и включить левый поворотник', correct: true},
			{text: 'Переместиться к правому краю дороги, затем резко повернуть налево', correct: false},
			{text: 'Переместиться как можно левее, затем резко повернуть направо', correct: false}
		]
	},

	{
		question:"107. Ты двигаешься по сельской дороге и видишь человека, который ведет животное по обочине. Ты должен",
		answers: [
			{text: 'Проезжать с особой осторожностью, не создавая громкого шума, чтобы не испугать животное', correct: true},
			{text: 'Ускориться, чтобы обогнать их побыстрее', correct: false},
			{text: 'Замедлить скорость до скорости, которая чуть выше чем у животных, и медленно его обогнать', correct: false}
		]
	},

	{
		question:"108. Когда ты двигаешься задним ходом, ты должен",
		answers: [
			{text: 'Двигаться быстро. Машиной проще управлять, если она едет быстро', correct: false},
			{text: 'Двигаться медленно. Машиной сложнее управлять при движении задним ходом', correct: true},
			{text: 'Двигаться быстрее, нежели ты ехал бы передним ходом в этой местности', correct: false}
		]
	},

	{
		question:"109. Во время движения по дороге с несколькими полосами движения, ты видишь этот знак. Он обозначает",
		answers: [
			{text: 'Велосипедная дорожка примыкает справа. Двигайся с особой осторожностью, обгоняя велосипедистов', correct: false},
			{text: 'Асфальтированная обочина впереди заканчивается', correct: false},
			{text: 'Другая полоса движения примыкает справа. Уступай дорогу машинам, вливающимся в твою полосу', correct: true}
		]
	},

	{
		question:"110. Во время движения ты видишь круглый желтый знак впереди. Он обозначает",
		answers: [
			{text: 'Ты подъезжаешь к перекрестку двух дорог, не регулируемому знаками и светофорами, иу тебя главная дорога', correct: false},
			{text: 'Ты подъезжаешь к железнодорожному переезду. Ты должен снизить скорость, посмотреть по сторонам и быть готовым к остановке', correct: true},
			{text: 'Ты двигаешься по дороге, на которой ведется доставка почты, ты должен уступать дорогу почтовой машине', correct: false}
		]
	},

	{
		question:"111. Ты двигаешься по крайней правой полосе дороги, имеющей четыре полосы в каждом направлении. Сзади тебя догоняет машина, которая хочет тебя обогнать, но все полосы заняты трафиком. Сзади идущая машина перестраивается на обочину дороги и пытается обогнать тебя справа. Ты должен",
		answers: [
			{text: 'Остановиться в своей полосе и дать возможность этой машине обогнать тебя по обочине', correct: true},
			{text: 'Записать номер этой машины и позвонить в полицию чтобы доложить о ней', correct: false},
			{text: 'Перестроиться на правую обочину перед этой машиной, чтобы заблокировать ее', correct: false}
		]
	},

	{
		question:"112. Водитель несет ответственность за выбрасывание мусора из их машин. Что считается мусором?",
		answers: [
			{text: 'Только такой мусор, который весит более 20 паундов', correct: false},
			{text: 'Любые сигареты, отходы, пакеты', correct: true},
			{text: 'Отходы и пакеты. Но сигареты не считаются мусором', correct: false}
		]
	},

	{
		question:"113. Это верное утверждение, что алкоголь",
		answers: [
			{text: 'Замедляет рефлексы, ухудшает способность чётко видеть и делает тебя менее внимательны', correct: true},
			{text: 'Не влияет на твою способность управлять машиной', correct: false},
			{text: 'Ускоряет твою реакцию и делает тебя более внимательным к тому, что происходит вокруг', correct: false}
		]
	},

	{
		question:"114. Пунктирная желтая разметка на дороге обозначает",
		answers: [
			{text: 'Поворачивать запрещено', correct: false},
			{text: 'Обгон по левой полосе разрешен', correct: true},
			{text: 'Дорога впереди сужается', correct: false}
		]
	},

	{
		question:"115. Ты двигаешься слишком медленно, если",
		answers: [
			{text: 'Ты двигаешься со скоростью менее чем 40 миль в час по двухполосной дороге', correct: false},
			{text: 'Ты блокируешь другие машины, которые двигаются с нормальной скоростью', correct: true},
			{text: 'Ты двигаешься со скоростью, которая ниже чем установлено скоростным лимитом', correct: false}
		]
	},

	{
		question:"116. Ты двигаешься по скользкой дороге и остановился у перекрестка. Когда ты начинаешь движение, твою машину начинает заносить в сторону. Ты должен",
		answers: [
			{text: 'Посильнее нажать на педаль газа, чтобы силой мотора выровнять машину. Затем веди ее в нужно направлении', correct: false},
			{text: 'Продолжать нажимать на педаль газа и вести машину в сторону правой обочины', correct: false},
			{text: 'Убрать ногу с педали газа, вести машину в направлении заноса. Не использовать тормоза, за исключением случаев возможного столкновения', correct: true}
		]
	},

	{
		question:"117. Водители велосипедов и мопедов на дороге имеют такие же права и обязанности, как",
		answers: [
			{text: 'Пешеходы', correct: false},
			{text: 'Водители автомобилей', correct: true},
			{text: 'Скейтбордисты', correct: false}
		]
	},

	{
		question:"118. Если ты собираешься ехать по магистрали",
		answers: [
			{text: 'Тебе нужно планировать маршрут заранее. Знаки и указатели на дороге подскажут где свернть', correct: false},
			{text: 'Тебе не нужно планировать маршрут заранее, если у тебя есть навигатор, который подскажет где свернуть', correct: false},
			{text: 'Ты должен спланировать свой маршрут заранее. Ты должен точно знать, где будешь заезжать на магистрали и где съезжать', correct: true}
		]
	},

	{
		question:"119. Если ты признан виновным в ДТП, в результате которого пострадавший был доставлен в больницу, то по закону ты должен",
		answers: [
			{text: 'Посетить курс по избежанию аварий на дороге', correct: true},
			{text: 'Пересдать практический экзамен по вождению', correct: false},
			{text: 'Пересдать теоретический экзамен на права класса Е', correct: false}
		]
	},

	{
		question:"120. Ты едешь за рулём и въезжаешь в жилую зону. Стандартный скоростной лимит в жилой зоне",
		answers: [
			{text: '40 миль в час', correct: false},
			{text: '30 миль в час', correct: true},
			{text: '45 миль в час', correct: false}
		]
	},

	{
		question:"121. Ты двигаешься по сухой дороге, и начинается дождь. Ты должен",
		answers: [
			{text: 'Двигаться согласно скорости потока', correct: false},
			{text: 'Двигаться согласно скоростному лимиту', correct: false},
			{text: 'Замедлить скорость и использовать дистанцию до других машин хотя бы в два раза больше обычной', correct: true}
		]
	},

	{
		question:"122. Во время движения ты внезапно вспомнил то, что хотел позвонить своему другу",
		answers: [
			{text: 'Вместо звонка, отправь другу текстовое сообщение во время движения', correct: false},
			{text: 'Вместо звонка, запиши напоминание на телефоне о том, чтобы позвонить другу позже', correct: false},
			{text: 'Во время движения за рулем звонить нельзя, если это не экстренный случай. Вместо этого, безопасно припаркуйся чтобы позвонить', correct: true}
		]
	},

	{
		question:"123. Две машины подъехали с противоположных сторон к нерегулируемому перекрёстку без знаков и светофора. Одна машина поворачивает налево, вторая двигается прямо. Водитель поворачивающей машины",
		answers: [
			{text: 'Должен дать сигнал другому водителю о том, чтобы проехать первому', correct: false},
			{text: 'Имеет преимущество в движении', correct: false},
			{text: 'Должен уступить дорогу водителю, который двигается прямо', correct: true}
		]
	},

	{
		question:"124. Когда ты готовишься перестроиться на дороге или повернуть на перекрестке, ты должен поверить слепую зону",
		answers: [
			{text: 'Посмотрев через переднее крыло автомобиля в том направлении, в котором планируешь двигаться', correct: false},
			{text: 'Глянув во внутреннее зеркало заднего вида', correct: false},
			{text: 'Повернув головой через плечо, посмотреть назад, в ту сторону, в которую планируешь двигаться', correct: true}
		]
	},

	{
		question:"125. Заезжая на магистраль с полосы ускорения, ты должен",
		answers: [
			{text: 'Ускориться как можно быстрее и въехать на магистраль', correct: false},
			{text: 'Уступить дорогу всем автомобилям, которые находятся на магистрали', correct: true},
			{text: 'Въехать на правую полосу магистрали первым, так как у тебя главная дорога', correct: false}
		]
	},

	{
		question:"126. Когда габаритный груз выступает сзади твоей машины на четыре и более фита в дневное время, выступающие концы груза должны быть обозначены",
		answers: [
			{text: 'Белыми флажками', correct: false},
			{text: 'Красными флажками', correct: true},
			{text: 'Красными фонарями', correct: false}
		]
	},

	{
		question:"127. Во время движения ты видишь такую разметку на асфальте в твоей полосе. Она обозначает",
		answers: [
			{text: 'Ты двигаешься по дороге с к ограниченным доступом, где не допускается к движению автомобили, перевозящие опасные материалы', correct: false},
			{text: 'Ты подъезжаешь к железнодорожному переезду. Замедли скорость, посмотри по сторонам и будь готов к остановке', correct: true},
			{text: 'Ты двигаешься по дороге, где осуществляется доставка почты, и ты должен уступать', correct: false}
		]
	},

	{
		question:"128. Если у тебя никогда не было водительских прав ни в одном штате, ни в одной стране, то тебе требуется пройти следующий курс перед получением водительских прав штата Флорида",
		answers: [
			{text: 'Курс по основам механики и ремонта автомобиля', correct: false},
			{text: 'Стандартный курс по оказанию первой медицинской помощи', correct: false},
			{text: 'Образовательный курс по правилам дорожного движения и влияния алкоголя и наркотиков', correct: true}
		]
	},

	{
		question:"129. обозначает",
		answers: [
			{text: 'Впереди повреждения дороги. Тебе придется объезжать ямы и другие повреждения дорожного покрытия', correct: false},
			{text: 'Сильные порывы ветра возможны на данном участке дороги, доставляющие проблемы с удержанием машины в своей полосе', correct: false},
			{text: 'Дорожное покрытие скользкое, когда мокро. Во время осадков необходимо снизить скорость на поворотах, ускоряться и тормозить плавно', correct: true}
		]
	},

	{
		question:"130. Если ты скрылся с места ДТП, произошедшего по твоей вине, в результате которого были причинены телесные повреждения или смерить потерпевшего",
		answers: [
			{text: 'Оттебя потребуют оплатить счёт из госпиталя', correct: false},
			{text: 'Штат аннулирует твою страховку', correct: false},
			{text: 'Твоё водительское удостоверение будет аннулировано', correct: true}
		]
	},

	{
		question:"131. Ты двигаешься по городской дороге с двумя полосами в каждом направлении и подъезжаешь к концу блока. Впереди по соседней полосе машина остановилась у пешеходного перехода, но ты не видишь ни одного пешехода. Ты должен",
		answers: [
			{text: 'Замедлить скорость о обогнать остановившуюся машину', correct: false},
			{text: 'Понимать, что пешеход возможно переходит дорогу и его не видно за остановившейся машиной, и ты не должен обогнать её', correct: true},
			{text: 'Продолжить движение согласно скоростному лимиту и обогнать остановившуюся машину', correct: false}
		]
	},

	{
		question:"132. У тебя пикап трак, который весит 4,000 паундов, когда он был новый. Ты решил его модифицировать чтобы поднять его высоту. Когда ты закончил",
		answers: [
			{text: 'Нижняя часть твоего бампера не должна быть выше чем 28 инчей над поверхностью дороги', correct: true},
			{text: 'Нижняя часть твоего бампера может быть до высоты 32 инча над поверхностью дороги', correct: false},
			{text: 'Твой модифицированный трак будет исключением из Флоридских правил по регулированию высоты бампера', correct: false}
		]
	},

	{
		question:"133. Двойная сплошная белая разметка между полосами движения обозначает",
		answers: [
			{text: 'Ты находишься на односторонней улице', correct: false},
			{text: 'Эта полоса используется встречным движением для поворота налево', correct: false},
			{text: 'Перестраиваться запрещено', correct: true}
		]
	},

	{
		question:"134. Ты двигаешься во время сильного дождя или тумана. Видимость на дороге настолько плохая, что ты решил остановиться. Ты должен",
		answers: [
			{text: 'Продолжить движение на низкой скорости для ближайшей парковки', correct: false},
			{text: 'Полностью съехать с дороги и включить аварийные огни', correct: true},
			{text: 'Припарковаться на асфальтированной обочине дороги и включить ближние фары', correct: false}
		]
	},

	{
		question:"135. У тебя пикап трак, и ты хочешь перевести в его кузове кучу мусора. Ты должен",
		answers: [
			{text: 'Использовать плотное покрывало, накрыть и упаковать мусор так, чтобы ничего не выпадало на дорогу', correct: true},
			{text: 'Приобрести дополнительную страховку, покрывающую рискивыпадения мусора на дорогу', correct: false},
			{text: 'Приобрести специальное разрешение на перевозку мусора в местном полицейском участке', correct: false}
		]
	},

	{
		question:"136. Во время движения твой музыкальный плейер закончил проигрывать СD диск. Чтобы не отвлекаться на плейер",
		answers: [
			{text: 'Дождись, пока поблизости не будет други машин, и тогда поменяй СD диск', correct: false},
			{text: 'Ты должен убирать глаза т дороги не более чем на 7 или 8 секунд, ока меняешь диск', correct: false},
			{text: 'Нельзя менять СD диск во время движения. Дождись пока остановишь машину', correct: true}
		]
	},

	{
		question:"137. Когда твоя машина правильно припаркована на парковочном месте",
		answers: [
			{text: 'Ни одна часть машины не будет выступать на полосу движения', correct: true},
			{text: 'Твоя машина может выступать на полосу движения, но не более чем на один фит', correct: false},
			{text: 'Твоя машина может выступать на полосу движения, если это требуется по габаритам машины', correct: false}
		]
	},

	{
		question:"138. Ты двигаешься по магистали во время плохой погода, и ты не чувствуешь себя безопасно на скорости, установленной скоростным лимитом. Ты должен",
		answers: [
			{text: 'Продолжай движение согласно скоростному лимиту', correct: false},
			{text: 'Продолжай движение согласно потоку автомобилей', correct: false},
			{text: 'замедлиться до скорости, позволяющей тебе иметь полный контроль над машинами', correct: true}
		]
	},

	{
		question:"139. Если полицейский офицер остановил твою машину за нарушение правила дорожного движения и обнаружил, что на переднем пассажирском сиденье находится пассажир 18 лет или старше, не пристегнутый ремнем безопасности, то штраф за непристегнутый ремень будет выписан",
		answers: [
			{text: 'Переднему пассажиру', correct: true},
			{text: 'Водителю', correct: false},
			{text: 'Обоим - водителю и пассажиру', correct: false}
		]
	},

	{
		question:"140. Если небольшой огонь загорелся в твоей машине во время движения, ты должен немедленно остановиться. Если у тебя есть огнетушитель, ты должен постараться затушить огонь. Но если огонь становится сильнее, ты должен",
		answers: [
			{text: 'Задержать дыхание, что бы не получить отравление и пытаться дальше тушить огонь', correct: false},
			{text: 'Убираться из машины', correct: true},
			{text: 'Попробовать затушить огонь водой, особенно если горит бензин или электрика', correct: false}
		]
	},

	{
		question:"141. Ты двигаешься по дороге, где после дождя остались лужи глубиной несколько инчей. Ты должен",
		answers: [
			{text: 'Проверь свои тормоза, аккуратно нажимая на них, после проезда по лужам', correct: true},
			{text: 'Двигаться как обычно. Тебе не нужно делать ничего особенного после проезда по лужам', correct: false},
			{text: 'Припарковать машину и подождать, пока высохнут тормоза', correct: false}
		]
	},

	{
		question:"142. У тебя большой пикап трак поздней модели, имеющий задние сидения. Масса пикап трака 6,500 паундов. Закон о ремнях безопасности",
		answers: [
			{text: 'Не требует передним пассажирам пристегиваться в автомобили такого размера', correct: false},
			{text: 'Требует водителю и передним пассажирам пристегнуться, а всем пассажирам до 18 лет пристегнуться даже на заднем сиденье', correct: true},
			{text: 'Не требуется водителю автомобиля такого размера пристегиваться ремнями безопасности', correct: false}
		]
	},

	{
		question:"143. Если ты готовишься к буксировке небольшого трейлера за своей машиной, ты должен убедиться что твой трейлер имеет",
		answers: [
			{text: 'Аварийный набор светоотражающих треугольников и инструментов', correct: false},
			{text: 'Хотя бы один стоп-сигнал, если трейлер выше машины и закрывает её стоп-сигналы', correct: true},
			{text: 'Запасное колесо и набор инструментов для её смены', correct: false}
		]
	}

]