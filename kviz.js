
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
let evaluationHeading = document.createElement("h2");
let allEvaluated = document.createElement("ol");
let numOfQuestions;
let orderOfQuestion;
let correctAnswList = [];
let userAnsweredList = [];
let countCorrectAnsw = 0;
let index = 0;
let oneOption;
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

/** This function is to remove startButton and prepare HTML for displayQuestion function */
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
    pictureDiv.className = "foto";
    optionDiv.appendChild(pictureDiv);
    picture.id = "obrazek";
    pictureDiv.appendChild(picture);
    options.id = "odpovedi";
    optionDiv.appendChild(options);
  
    displayQuestion(index);     
}
 
/** This one loops through the array of object (questionAnswer) and displays one question at time, adding eventListener to display nextQuestion */
function displayQuestion(ind) {
    let oneQuestion = questionAnswer[ind];
    let optionsForOne = oneQuestion.options;
    let correct = oneQuestion.correct;
    correctAnswList.push(correct);
    orderOfQuestion = ind + 1;
    numOfQuestions = questionAnswer.length;

    optionsForOne.forEach(element => {
        question.innerHTML = oneQuestion.question;
        picture.src = oneQuestion.photo;
        order.innerHTML = "Otázka " + orderOfQuestion + "/" + numOfQuestions;

        oneOption = document.createElement("li");
        oneOption.id = "odpovedi li";
        oneOption.innerHTML = element;
        options.appendChild(oneOption);
        oneOption.addEventListener("click", nextQuestion);       
    });      
}

/** This one checks for correct answers and displays next question by changing index, until the end of the array */    
function nextQuestion(event) {
    let answered = event.target.innerHTML;
    if (answered == correctAnswList[index]) {
        countCorrectAnsw++;
    };
    
    if (index < (questionAnswer.length - 1)) {
        userAnsweredList.push(answered);        
        index++;  
        options.innerHTML = " ";  
        displayQuestion(index);   
    } else {
        userAnsweredList.push(answered);
        displayEvaluation();
    }     
}

/**This removes quiz content and displays user answers with correct answers in a list. Also calculates the success rate */
function displayEvaluation() {
    content.removeChild(quiz);
    evaluation.className = "vysledek";
    content.appendChild(evaluation);
    evaluation.style.display = "block";
    evaluation.appendChild(evaluationHeading);
    evaluationHeading.innerHTML = "Tvoje hodnocení";
    allEvaluated.id = "hodnoceni";
    evaluation.appendChild(allEvaluated);
    
    for (i = 0; i < (questionAnswer.length); i++) {
        let questionEvaluatedOrder = document.createElement("li");
        allEvaluated.appendChild(questionEvaluatedOrder);
        let questionEvaluated = document.createElement("h3");
        questionEvaluatedOrder.appendChild(questionEvaluated);
        questionEvaluated.innerHTML = questionAnswer[i].question;
        let evaluationText = document.createElement("dd");
        allEvaluated.appendChild(evaluationText);
        if (correctAnswList[i] == userAnsweredList[i]) {
            evaluationText.innerText = "Tvoje odpověď byla " + userAnsweredList[i] + ". \nTo je správně.";
        } else {
            evaluationText.innerText = "Tvoje odpověď byla " + userAnsweredList[i] + ". \nSprávná odpověď je " + correctAnswList[i] + ".";
        }
    }

    let successRate = countCorrectAnsw / correctAnswList.length * 100;
    let summary = document.createElement("h2");
    evaluation.appendChild(summary);
    summary.innerHTML = "Máš správně " + countCorrectAnsw + " z " + correctAnswList.length + " otázek. Tvoje úspěšnost je " + successRate +" %";
}