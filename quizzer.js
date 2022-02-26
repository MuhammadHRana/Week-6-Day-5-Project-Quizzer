// const iconElement = document.querySelector(".weather-icon");
// const tempElement = document.querySelector(".temperature-value p");
// const tempElementMax = document.querySelector(".temperature-value-max p");
// const tempElementMin = document.querySelector(".temperature-value-min p");
// const descElement = document.querySelector(".temperature-description p");
// const locationElement = document.querySelector(".location p");
// const notificationElement = document.querySelector(".notification");

// var questions = document.querySelector("#questions");
// var answers = document.querySelector("#answers");





// var readline = require('readline-sync');

// function storing(questions) {
//     done = true
//     while (done === true) {
//         input_q = readline.question("What questions would you like to add? ")
//         // questions.appendChild(input_q)
//         if (input_q === 'done') {
//             done = false
//         }
//         questions.innerHTML = input_q
//     }
// }

let questionElement = document.querySelector('#questionForm')
let answerElement = document.querySelector('#answers')
let questionDictionary = document.querySelector('#question_dictionary')

function createEvents(el) {
    el.addEventListener('mouseenter', (e) => {
        e.target.classList.add('active')
    })
    el.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('active')
    })
}

let questions_list = new Object();
let increment = 0



function q_adder( question_answer, increment) {
    questions_list[increment] = question_answer
    return questions_list
}

let input_answering;
let form_answer;

function checker( questions_list, increment) {
    input_answering = document.querySelector(`#answering_${increment}`);
    form_answer = document.querySelector(`#answerForm_${increment}`);
    changer = document.querySelector(`.questionSingle_${increment}`)

    form_answer.addEventListener('submit', (e) => {
        e.preventDefault();
        if ((input_answering.value).toLowerCase() === (questions_list[increment]).toLowerCase()) {
            e.preventDefault();
            changer.classList.add('correct');
            alert('Your answer is correct! ')
        }
        else {
            e.preventDefault();
            changer.classList.add('wrong');
            alert('Incorrect answer! ')
        }
    })
}

let input_a = document.querySelector('#answerInput');
let input_q = document.querySelector('#questionInput');
let q_dict = document.querySelector('#question_dictionary');
let form = document.querySelector('#questionForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    increment += 1;

    let div_q = document.createElement(`main`)
    div_q.classList.add('container',`questionSingle_${increment}`)
    div_q.innerText = `Question #${increment}: `
    div_q.innerHTML += "<br>"
    div_q.innerHTML += "<br>"
    div_q.innerHTML += `${input_q.value}`
    div_q.innerHTML += "<br>"
    div_q.innerHTML += "<br>"
    div_q.innerHTML += `<div class="container-fluid" id= "response_${increment}"><form action="" id="answerForm_${increment}"> <input type='text' placeholder= 'Type in your answer. ' class='form-control' id='answering_${increment}'> </form></div>`
    div_q.innerHTML += "<br>"
    createEvents(div_q);
    questionElement.appendChild(div_q);

    q_adder(input_a.value, increment)
    checker(questions_list, increment)
    
    input_q.value = '';
    input_a.value = '';

})

