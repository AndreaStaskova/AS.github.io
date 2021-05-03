/*
pole otázek
možná změnit název key odpoved a nějak vyznačit, která je správná?
*/
let content = document.querySelector(".obsah");
let button = document.getElementById("startButton");
let quiz = document.createElement("div");
let order = document.createElement("div");
let question = document.createElement("h2");
let optionDiv = document.createElement("div");
let options = document.createElement("ul");
let pictureDiv = document.createElement("div");
let picture = document.createElement("img");
let evaluation = document.createElement("div");
let countQuestions;
let questionNr;
let listCorrectAnsw = [];
let listUserAnswered = [];
let countCorrectAnsw = 0;
let index;
let answer;
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

button.addEventListener("click", startPlay);

/** This function is to prepare HTML for displayQuestion function */
function startPlay() {
    content.removeChild(button);

    quiz.className = "kviz";
    content.appendChild(quiz);
    order.id = "poradi";
    quiz.appendChild(order);
    question.id = "otazka";
    quiz.appendChild(question);
    optionDiv.id = "moznosti";
    quiz.appendChild(optionDiv);
    options.id = "odpovedi";
    optionDiv.appendChild(options);
    pictureDiv.className = "foto";
    quiz.appendChild(pictureDiv);
    picture.id = "obrazek";
    pictureDiv.appendChild(picture);

    index = 0;    
    displayQuestion(index);     
}
 
/** This one loops through the array of object (questionAnswer) and displays one question at time, adding eventlistener to display next question */
function displayQuestion(ind) {
    let oneQuestion = questionAnswer[ind];
    let optionsForOne = oneQuestion.options;
    let correct = oneQuestion.correct;
    listCorrectAnsw.push(correct);
    questionNr = ind + 1;
    countQuestions = questionAnswer.length;

    optionsForOne.forEach(element => {
        
        answer = document.createElement("li");
        answer.id = "odpovedi li";
        answer.innerHTML = element;
        options.appendChild(answer);
        question.innerHTML = oneQuestion.question;
        picture.src = oneQuestion.photo;
        order.innerHTML = "Otázka " + questionNr + "/" + countQuestions
    });

    options.addEventListener("click", nextQuestion);    
}

/** This one checks for answers and displays next question by changing index, until the end of the array */    
function nextQuestion(event) {
    let answered = event.target.innerHTML;
    if (index < (questionAnswer.length - 1)) {
        listUserAnswered.push(answered);
    
        if (answered == listCorrectAnsw[index]) {
            countCorrectAnsw++;
        };
        
        index++;  
        options.innerHTML = " ";  
        displayQuestion(index);   
    } else {
        listUserAnswered.push(answered);
        displayEvaluation();
    }     
}

function displayEvaluation() {
    content.removeChild(quiz);
    evaluation.className = "vysledek";
    content.appendChild(evaluation);
    let evaluationHeading = document.createElement("h2");
    evaluation.appendChild(evaluationHeading);
    evaluation.style.display = "block";
    evaluationHeading.innerHTML = "Tvoje hodnocení";
    
    let allEvaluated = document.createElement("ol");
    //allEvaluated.type = "1"
    evaluation.appendChild(allEvaluated);
    

    for (i = 0; i < (questionAnswer.length); i++) {
        let questionEvaluatedOrder = document.createElement("dt");
        allEvaluated.appendChild(questionEvaluatedOrder);
        let questionEvaluated = document.createElement("h3");
        
        questionEvaluatedOrder.appendChild(questionEvaluated);
        questionEvaluated.innerHTML = questionAnswer[i].question;
        if (listCorrectAnsw[i] == listUserAnswered[i]) {
            let evaluationText = document.createElement("dd");
            allEvaluated.appendChild(evaluationText);
            evaluationText.innerText = "Tvoje odpověď byla " + listUserAnswered[i] + ". \nTo je správně";
        } else {
            let evaluationText = document.createElement("dd");
            allEvaluated.appendChild(evaluationText);
            evaluationText.innerText = "Tvoje odpověď byla " + listUserAnswered[i] + ". \nSprávná odpověď byla " + listCorrectAnsw[i];
        }
    }

    let successRate = countCorrectAnsw / listCorrectAnsw.length * 100;
    let summary = document.createElement("h2");
    evaluation.appendChild(summary);
    summary.innerHTML = "Máš správně " + countCorrectAnsw + " otázky z " + listCorrectAnsw.length + ". Tvoje úspěšnost je " + successRate +" %";
}

//obrázek vlevo vedle otázky

//vyhodnocení
//číslování otázek <ol> vs <dl>
//přidat shrnující text úspěšnosti

//refactor