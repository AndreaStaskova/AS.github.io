/*
pole otázek
možná změnit název key odpoved a nějak vyznačit, která je správná?
*/
let content = document.querySelector(".obsah");
let button = document.getElementById("startButton");
let questionAnswer = [
    {
        question: "Jak se jmenuje postava vpravo?",
        options: ["Křemílek", "Vochomůrka", "Racochejl", "Pizizubka"],
        correct: "Křemílek", 
        photo: "photos/postava.jpg"
    },
    {
        question: "Jak se jmenuje květina na obrázku?",
        options: ["Blatouch", "Podléška", "Hluchavka", "Plicník"], 
        correct: "Hluchavka", 
        photo: "photos/kytka.jpg"
    },
    {
        question: "Co je na obrázku za auto?",
        options: ["Monteverdi Hai", "DeTomaso Pantera", "DeLorean", "Toyota Celica"],
        correct: "DeTomaso Pantera", 
        photo: "photos/auto.jpg"
    },
    {
        question: "Co ucpalo hadici v dílu Krtek zahradníkem?",
        options: ["Žába", "Míč", "Rybička", "Robot"],
        correct: "Žába", 
        photo: "photos/hadice.jpg"
    },
    {
        question: "Jak se jmenuje výrobce traktoru na obrázku?",
        options: ["Massey Ferguson", "Zetor", "Steyr", "John Deere"],
        correct: "John Deere",
        photo: "photos/traktor.jpg"
    }
];
let index = 0;
let answer;

let quiz = document.createElement("div");
quiz.className = "kviz";

let order = document.createElement("div");
order.id = "poradi";

let question = document.createElement("h2");
question.id = "otazka";

let optionDiv = document.createElement("div");
optionDiv.id = "moznosti";

let options = document.createElement("ul");
options.id = "odpovedi";

let pictureDiv = document.createElement("div");
pictureDiv.className = "foto";

let picture = document.createElement("img");
picture.id = "obrazek";

button.addEventListener("click", startPlay);

function startPlay() {
    content.removeChild(button);
    content.appendChild(quiz);
        
    prepareQuestion();         
}

function prepareQuestion() {
    quiz.appendChild(order);
    
    quiz.appendChild(question);

    quiz.appendChild(optionDiv);

    optionDiv.appendChild(options);

    quiz.appendChild(pictureDiv);

    pictureDiv.appendChild(picture);
    
    displayQuestion(index);
}
    
function displayQuestion(index) {
    let oneQuestion = questionAnswer[index];
    let optionsForOne = oneQuestion.options;
    //console.log(optionsForOne);

    optionsForOne.forEach(element => {
        
        answer = document.createElement("li");
        answer.id = "odpovedi li";
        answer.innerHTML = element;
        options.appendChild(answer);
        question.innerHTML = oneQuestion.question;
        picture.src = oneQuestion.photo;
        
    });

    options.addEventListener("click", nextQuestion);    
}

/*
if (answered == oneQuestion.correct) {
    console.log("Congrats"); 
    index++;               
} else {
    index++;
};
*/
    
function nextQuestion(event) {
    let answered = event.target.innerHTML;
    console.log(answered);
    options.innerHTML = " "
    index++;       
    
    displayQuestion(index);    
}
//text otázka s počítadlem postupu 1/5

//otázky jsou postupně za sebou jak jsou v poli
//možné odpovědi jako list, jsou řadit náhodně?

//obrázek

//možnosti - tlačítka

//vyhodnocení
