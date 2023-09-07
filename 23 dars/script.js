let name = document.getElementById('name');
let second = document.getElementById('second');
let start_btn = document.getElementById('start_btn');
let time = document.getElementById('time');
let true_answer = document.getElementById('true_answer');
let false_answer = document.getElementById('false_answer');
let question_btn = document.getElementById('question_btn');
let answer_input = document.getElementById('answer_input');
let nameEditbtn = document.querySelector('.nameEditbtn');

let Sitetime;
let answer_true = 0;
let answer_false = 0;

if (localStorage.getItem('KopaytirishName')) {
    name.value = localStorage.getItem('KopaytirishName');
    name.setAttribute('disabled', 'disabled');
    nameEditbtn.classList.remove('d-none');
} else {
    nameEditbtn.classList.add('d-none');
    name.removeAttribute('disabled', 'disabled');
}

//nameEditbtn
nameEditbtn.addEventListener('click', () => {
    name.removeAttribute('disabled', 'disabled');
    name.value = '';
    name.focus();
})

start_btn.addEventListener('click', () => {
    let userName = name.value;
    let userSecond = second.value;
    time.innerHTML = userSecond;
    localStorage.setItem('KopaytirishName', userName);
    localStorage.setItem('KopaytirishSecond', userSecond);
    Sitetime = localStorage.getItem('KopaytirishSecond');
    answer_input.removeAttribute("disabled");
    answer_input.value = "";
    answer_input.focus();
    document.querySelector('.sitebtn').setAttribute('disabled', 'disabled')
    kopaytirish();
    sendtelegram(`${userName} ${userSecond} Sekund vaqtni tanladi`);
});


function kopaytirish() {
    let num1 = Math.floor(1 + Math.random() * 10);
    let num2 = Math.floor(1 + Math.random() * 10);
    localStorage.setItem('KopaytirishNum1', num1);
    localStorage.setItem('KopaytirishNum2', num2);

    question_btn.innerHTML = `${num1} * ${num2} = ?`;
    // answer_input.value = num1 * num2;
}

answer_input.addEventListener("keypress", mykeypress);

function mykeypress(event) {
    if (event.key === "Enter") {
        let localNum1 = localStorage.getItem('KopaytirishNum1');
        let localNum2 = localStorage.getItem('KopaytirishNum2');
        if (localNum1 * localNum2 == answer_input.value) {
            answer_true++;
            true_answer.innerHTML = answer_true;
            if (answer_true == 1) {
                let localTime = localStorage.getItem('KopaytirishSecond');//20 
                setInterval(timeFunction, 1000);
                setTimeout(StopMykeypress, 1000 * localTime);
            }
            playOn();
        }
        else {
            answer_false++;
            false_answer.innerHTML = answer_false;
            playoff();
        }
        kopaytirish();
        answer_input.value = '';
    }
}
//Time
function timeFunction() {
    if (Sitetime > 0) {
        --Sitetime;
    }
    time.innerHTML = Sitetime;
}



// play audio
let playOn = () => new Audio("audio/on.mp3").play();
let playoff = () => new Audio("audio/off.mp3").play();

//StopMykeypress
function StopMykeypress() {
    answer_input.removeEventListener("keypress", mykeypress);
    answer_input.setAttribute('disabled', 'disabled');
    answer_input.placeholder = 'Vaqt Tugadi';
    let userName = localStorage.getItem('KopaytirishName');
    let userSecond = localStorage.getItem('KopaytirishSecond');
    sendtelegram(`${userName} ko'paytmada ${userSecond} sekund davomida ${answer_true} ta to'g'ri va ${answer_false} ta xato bajardi`);
    document.querySelector('.Nosvoy').innerHTML = `${userName} ${userSecond} sekund davomida ${answer_true} ta to'g'ri va ${answer_false} ta xato bajardi`;
}
// sendtelegram
function sendtelegram(message) { let telegram_bot_id = "6084042694:AAHBwmkds5IWXdbpoSXDq8E5CLbGUh2WfUM"; let chat_id = 1862692289; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };

