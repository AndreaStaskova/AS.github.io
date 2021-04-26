/*
pole otázek
možná změnit název key odpoved a nějak vyznačit, která je správná?
*/
let content = document.querySelector(".obsah")
let button = document.getElementById("startButton")
let questionAnswer = [
    {
        question: "Jak se jmenuje postava vpravo?",
        answer1: "Křemílek", //this
        answer2: "Vochomůrka",
        answer3: "Racochejl",
        answer4: "Pizizubka",
        photo: "photos/postava.jpg"
    },
    {
        question: "Jak se jmenuje květina na obrázku?",
        answer1: "Blatouch",
        answer2: "Podléška",
        answer3: "Hluchavka", //this
        answer4: "Plicník",
        photo: "photos/kytka.jpg"
    },
    {
        question: "Co je na obrázku za auto?",
        answer1: "Monteverdi Hai",
        answer2: "DeTomaso Pantera", //this
        answer3: "DeLorean",
        answer4: "Toyota Celica",
        photo: "photos/auto.jpg"
    },
    {
        question: "Co ucpalo hadici v dílu Krtek zahradníkem?",
        answer1: "Žába", //this
        answer2: "Míč",
        answer3: "Rybička",
        answer4: "Robot",
        photo: "photos/hadice.jpg"
    },
    {
        question: "Jak se jmenuje výrobce traktoru na obrázku?",
        answer1: "Massey Ferguson",
        answer2: "Zetor",
        answer3: "Steyr",
        answer4: "John Deere", //this
        photo: "photos/traktor.jpg"
    }
];

button.addEventListener("click", play);
 

function play() {
    let quiz = document.createElement("div");
    quiz.className = "kviz";
    content.appendChild(quiz);
    content.removeChild(button);

    let order = document.createElement("div");
    order.id = "poradi";
    quiz.appendChild(order)

    let question = document.createElement("h2");
    question.id = "otazka";
    quiz.appendChild(question);

    let option = document.createElement("li");
    option.id = "odpovedi";
    quiz.appendChild(option);

    let pictureDiv = document.createElement("div");
    pictureDiv.className = "foto";
    quiz.appendChild(pictureDiv);

    let picture = document.createElement("img");
    picture.id = "obrazek";
    pictureDiv.appendChild(picture);
    // možná ještě do divu s className foto?

    for (let i = 0; i < questionAnswer.length; i++) {
        let oneQuestion = questionAnswer[i];
        let options = [oneQuestion.answer1, oneQuestion.answer2, oneQuestion.answer3, oneQuestion.answer4];
        /*
        options.forEach(element => {
           
            let option = document.createElement("li");
            option.id = "odpovedi li";
            option.innerHTML = element;
            quiz.appendChild(option);
        });
         */
    
        question.innerHTML = oneQuestion.question;
        picture.src = oneQuestion.photo;
        option.innerHTML = oneQuestion.answer1, oneQuestion.answer2, oneQuestion.answer3, oneQuestion.answer4
    }
}





//text otázka s počítadlem postupu 1/5

//otázky jsou postupně za sebou jak jsou v poli
//možné odpovědi jako list, jsou řadit náhodně?

//obrázek

//možnosti - tlačítka

//vyhodnocení
