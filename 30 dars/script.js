window.addEventListener('keypress', (e) => {
    if (e.key == 'b' || e.key == 'B') {
        playB();
    }
    if (e.key == 'c' || e.key == 'C') {
        playC();
    }
    if (e.key == 'd' || e.key == 'D' ) {
        playD();
    }
    if (e.key == 'e' || e.key == 'E') {
        playE();
    }
    if (e.key == 'f' || e.key == 'F') {
        playF();
    }
    console.log(e);
});

let playB = () => new Audio('audio/B.mp3').play(); 
let playC = () => new Audio('audio/C.mp3').play(); 
let playD = () => new Audio('audio/D.mp3').play(); 
let playE = () => new Audio('audio/E.mp3').play(); 
let playF = () => new Audio('audio/F.mp3').play(); 
