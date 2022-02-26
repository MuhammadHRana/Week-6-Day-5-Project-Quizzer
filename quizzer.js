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

    // el.addEventListener('click', () => {
    //     if (el.classList.contains('active')) {
    //         el.classList.toggle('disabled');
    //         el.style.textDecoration = 'line-through';
    //     }
    //     if (el.classList.contains('disabled')) {
    //         el.classList.toggle('active');
    //         el.style.textDecoration = 'default';
    //     }
    // })
}





//////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////


// const questionContainerElement = document.getElementById('question-container')
// const questionElement = document.getElementById('question');
// const answerButtonsElement = document.getElementById('answer-buttons');
// let shuffledQuestions, currentQuestionIndex;

// function showQuestion(question) {
//     questionElement.innerText = question.question;

//     question.answers.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerText = answer.text;
//         button.classList.add('btn');

//         if (answer.correct) {
//             button.dataset.correct = answer.correct;
//         }

//         button.addEventListener('click', selectAnswer);
//         answerButtonsElement.appendChild(button);
//     });
// }

// function selectAnswer(e) {
//     const selectedButton = e.target;
//     const correct = selectedButton.dataset.correct;

//     setStatusClass(document.body, correct);

//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct);
//     });

    //Check if out of questions
//     if (shuffledQuestions.length > currentQuestionIndex + 1) {
//         nextButton.classList.remove('hide');
//     }
//     else {
//         startButton.innerText = 'Restart';
//         startButton.classList.remove('hide');
//     }

// }

// function setStatusClass(element, correct) {
//     clearStatusClass(element);
//     if (correct) {
//         element.classList.add('correct');
//     }
//     else {
//         element.classList.add('wrong');
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove('correct');
//     element.classList.remove('wrong');
// }


// let questions_list = [];
let questions_list = new Object();
let increment = 0

// function q_adder( question_answer, increment) {
//     lister = {
//         key: increment, value: question_answer.value
//     }
//     questions_list.push(lister)
//     return questions_list
// }

function q_adder( question_answer, increment) {
    questions_list[increment] = question_answer
    return questions_list
}
// function q_adder(question_input, question_answer, increment) {
//     questions_list.push([
//         {
//             '#': increment,
//             question: (question_input.toString()).toLowerCase(),
//             answers: [
//                 { text: (question_answer.toString()).toLowerCase()}
//             ]
//         }
//     ])
//     return questions_list
// }

// function answer_checker(increment) {
//     let input_answering = document.querySelector(`#answering ${increment}`);
//     let form_answer = document.querySelector('.answerForm');
//     form_answer.addEventListener('submit', (e) => {
//         e.preventDefault();
//         if ((document.querySelector(input_answering)).toLowerCase() === Object.values(questions_list[increment])) {
//             element.classList.add('correct');
//         }
//         else {
//             element.classList.add('wrong');
//         }
//     })
// }







// function addPair(myKey, myValue) {
//     questions_list[myKey] = myValue;
// };

// function giveValue(myKey) {
//     return dict[myKey];
// };

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
    // answer_checker(increment)
    // q_adder(input_q, input_a)
    // let qs_dict = document.createElement('qs_dict')
    // qs_dict.classList.add('questionDicter')
    // questionDictionaryResponse = q_adder(input_q, input_a)
    // qs_dict.innerHTML = questionDictionaryResponse
    // qs_dict.innerHTML += "<br>"
    // questionDictionary.appendChild(qs_dict);
    // questionDictionaryResponse.innerText = q_adder(input_q, input_a)
    // questionDictionary.appendChild(questionDictionaryResponse)

})



// function setStatusClass(element, correct) {
//     clearStatusClass(element);
//     if (correct) {
//         element.classList.add('correct');
//     }
//     else {
//         element.classList.add('wrong');
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove('correct');
//     element.classList.remove('wrong');
// }









//     input_a.value = '';
    // q_adder(input_q, input_a)
    // let qs_dict = document.createElement('qs_dict')
    // qs_dict.classList.add('questionDicter')
    // questionDictionaryResponse = q_adder(input_q, input_a)
    // qs_dict.innerHTML = questionDictionaryResponse
    // qs_dict.innerHTML += "<br>"
    // questionDictionary.appendChild(qs_dict);
    // questionDictionaryResponse.innerText = q_adder(input_q, input_a)
    // questionDictionary.appendChild(questionDictionaryResponse)

// 




// let div_a = document.createElement('div')
    // div_a.classList.add('answerSingle')
    // div_a.innerText = input_a.value
    // div_a.innerHTML += "<br>"
    // div_a.innerHTML += "<input type='text' placeholder= 'Type in your answer. '>"
    // div_a.innerHTML += "<br>"
    // createEvents(div_a);
    // answerElement.appendChild(div_a);
    // input_a.value = '';
