let bradius = document.getElementById('bradius');
let background = document.getElementById('background');
let width = document.getElementById('width');
let height = document.getElementById('height');
let result = document.querySelector('.result');

function shape (){
    result.style.borderRadius = bradius.value;
    result.style.background = background.value;
    result.style.width = width.value;
    result.style.height = height.value;
}