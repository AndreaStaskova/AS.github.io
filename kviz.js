/*
pole otázek
možná změnit název key odpoved a nějak vyznačit, která je správná?
*/
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

document.getElementById("start").addEventListener(click, play())
let 

function play() {

}
let quiz = document.createElement("div");
quiz.className = "kviz"
//na začátku bude tlačítko start, pak se tepr objeví div kviz
//text otázka s počítadlem postupu 1/5

//otázky jsou postupně za sebou jak jsou v poli
//možné odpovědi jako list, jsou řadit náhodně?

//obrázek

//možnosti - tlačítka

//vyhodnocení
