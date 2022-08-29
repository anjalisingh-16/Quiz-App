const quiz = [
    {
        question: "Q1:What is the full form of XML?",
        a: "Example Markup Language",
        b: "Extensible Markup Language",
        c: "X Markup Language",
        d: "Extra Modern Link",
        ans: "ans2"
    },
    {
        question: "Q2:What is the full form of JPG?",
        a: "Joint Photographic Exports Group",
        b: "Joint Pixel Experts Group",
        c: "Joint Photographic Experts Group",
        d: "Joint Pixel Exports",
        ans: "ans3"
    },
    {
        question: "Q3:What is the full form of PNG?",
        a: "Printable New  Graphic",
        b: "Printable New Graphical",
        c: "Port Natural Graphics",
        d: "Portable Network Graphics",
        ans: "ans4"
    },
    {
        question: "Q4:What is the full form of GIF?",
        a: "Graphics Interchange Format",
        b: "Graphics Interchange File",
        c: "Global Interchange Format",
        d: "Graphics Input Format",
        ans: "ans1"
    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore')

let questncount = 0;
let score = 0;
const loadQuestion = () => {
    let questnlist = quiz[questncount];
    question.innerHTML = questnlist.question;
    option1.innerHTML = questnlist.a;
    option2.innerHTML = questnlist.b;
    option3.innerHTML = questnlist.c;
    option4.innerHTML = questnlist.d;

}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curElem) => {
        if (curElem.checked) {
            answer = curElem.id;
        }

    });
    return answer;
}

const deselectAll = () => {
    answers.forEach((curEle) => curEle.checked = false);


}
submit.addEventListener('click', () => {
    let checkAnswer = getCheckAnswer();
    console.log(checkAnswer);
    if (checkAnswer == quiz[questncount].ans) {
        score++;
    }
    questncount++;
    deselectAll();
    if (questncount < quiz.length) {
        loadQuestion();
    } else {
        showscore.classList.remove('showarea');
        showscore.innerHTML = `
    <h3>You scored ${score} /${quiz.length}<img src="victory.png"></h3>
    <button class="btn" onclick="location.reload()">Restart</button>
    `;
    }
});