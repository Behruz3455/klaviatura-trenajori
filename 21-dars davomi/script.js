// let bigImg = document.querySelector(".bigImg img");
// let smallImg = document.querySelectorAll(".mycard img");
// let title = document.querySelector(".bigImg p");

// // console.log(smallImg);
// smallImg.forEach((img) => {
//   img.addEventListener("click", () => {
//     bigImg.setAttribute("src", img.src);
//     title.innerHTML = img.parentElement.children[1].children[0].innerHTML
//     playOn(img.getAttribute(' data-audio '));
//   });
// });

// let playOn = (audio) => new Audio(audio).play();

let bigImg = document.querySelector(".bigImg img");
let smallImg = document.querySelectorAll(".mycard img");
let title = document.querySelector(".bigImg p");

// console.log(smallImg);
smallImg.forEach((img) => {
  img.addEventListener("click", () => {
    bigImg.setAttribute("src", img.src);
    title.innerHTML = img.parentElement.children[1].children[0].innerHTML
    playOn(img.getAttribute("data-audio"));
  });
});


let playOn = (audio) => new Audio(audio).play();