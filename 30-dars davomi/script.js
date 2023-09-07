let letter = document.getElementById('letter');
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let i = 0;

function writeLetter(){
    let rand = Math.floor(Math.random()*letters.length);
    letter.innerHTML = letters[rand];
}
writeLetter();

window.addEventListener("keypress", (e) => {
    if(e.key == letter.innerHTML){
        i++;
        document.querySelector('p').innerHTML = i;
    }else{
        i--;
        document.querySelector('p').innerHTML = i;
        playB();

    }
    writeLetter();
});

let playB = () => new Audio('audio/B.mp3').play(); 