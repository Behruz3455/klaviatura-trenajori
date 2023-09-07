if(localStorage.getItem('num')){
    let num = localStorage.getItem('num');
    num++;
    localStorage.setItem('num', num);
}else{
    localStorage.setItem('num', 0);
}
if(localStorage.getItem)

// let squares = document.querySelectorAll(".square");
// let i = 0;

// squares.forEach(square => {
//     square.addEventListener("click", () => {
//         square.style.background = rgb();
//         square.innerHTML= rgb();
//     });
// });
// squares.forEach(square => {
//     square.addEventListener("dblclick", () => {
//         square.style.background = "yellow";
//     });
// });
// squares.forEach(square => {
//     square.addEventListener("mouseover", () => {
//         square.style.background = "greenyellow";
//     });
// });

// function rgb(){
//     let r = Math.floor(Math.random()*256);
//     let g = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);
//     return `rgb(${r},${g},${b})`;
// }

// // console.log(rgb());

// function rgb(){
//     let r = Math.floor(Math.random()*256);
//     let g = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);
//     return `rgb(${r},${g},${b})`;
// }

function site(){
    window.open('https://getbootstrap.com/', '_blank');
}

function sites(){
    window.open('https://alicoder.uz/', '_blank');
}

setTimeout(site, 3000);
setTimeout(sites, 5000);