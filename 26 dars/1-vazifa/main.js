let rounds = document.querySelectorAll(".round");
let i = 0;

rounds.forEach(round => {
    round.addEventListener("mouseover", () => {
        round.style.borderRadius = "50%";
        round.style.background = "yellow";
    });
    round.addEventListener("click", () => {
        round.style.borderRadius = "10%";
        round.style.background = "red";
    });
    round.addEventListener("dblclick", () => {
        round.style.transform = "rotate(150deg)";
        round.style.borderRadius = "10%";
        round.style.background = "gray";
    });
    round.addEventListener("mouseout", () => {
        round.style.borderRadius = "0";
        round.style.background = "blue";
    });
    round.addEventListener("mouseout", () => {
        i++;
        round.style.borderRadius = "0";
        round.style.background = `url(https://picsum.photos/id/${i}1/200/200) no-repeat center center / cover`;
    });
});