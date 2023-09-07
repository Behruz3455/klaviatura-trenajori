// let text = document.querySelector("h1");

// console.log(text);

// text.addEventListener("click", () => {
//     text.innerHTML = "Abdulloh";
//     text.style.backgroundColor = "yellow";
//     text.style.fontSize = "100px";
//     playOn();
// });

// let input = document.getElementById("input");

// input.addEventListener('input', () =>{
//     text.innerHTML = input.value;
// });

// text.addEventListener("dblclick", () => {
//     text.innerHTML = "Mehriddin";
//     text.style.color = "purple";
//     playoff();  
// });


// text.addEventListener("mouseover", () =>{
//     text.innerHTML = "Islom";

// });
// text.addEventListener("mouseout", () =>{
//     text.innerHTML = "Aziz";
// });

// let playOn = () => new Audio("audio/on.mp3").play();
// let playoff = () => new Audio("audio/off.mp3").play();

let texts = document.querySelectorAll("p");

texts.forEach((text) => {
    text.addEventListener('click', () => {
        text.classList.add ("rang");
        // text.classList.toggle ("rang");
        // text.classList.remove ("rang");
    });
});

// let btn = document.querySelector("button");

// btn.addEventListener("click", () =>{
//     document.body.classList.toggle("tun");
//     if(btn.innerHTML == "Tun"){
//         btn.innerHTML = "Kun";
//     }else{
//         btn.innerHTML = "Tun";
//     }
// });
