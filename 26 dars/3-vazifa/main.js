// Promt sorayapti loginingizni yozing
// Agar login admin bo'lsa  unda parol so'raydi
// Agar parol 12345 bo'lsa xush kelibsiz admin ||  bo'lmasa parol xato
// Agar admin bo'lmasa kirish ta'qiqlanadi! degan yozuv chiqsin

// function sum(num1, num2, num3){
//     document.write(${num1} + ${num2} + ${num3} = ${num1+num2+num3}  <br>)
// }

// sum(10,5,2);
// sum(12323,46546545,4457545);


let login = prompt("Login kiriting");

if (login === "admin") {
  let password = prompt("Parolni kiriting");
  
  if (password === "12345") {
    alert("Xush kelibsiz, admin!");
  } else {
    alert("Parol xato");
  }
} else {
  alert("Kirish ta'qiqlanadi!");
}

// let question = confirm("Saytimiz sizga yoqdomi?");
// if(question){
//     alert("Rahmat");
// } else {
//     alert("Nega unda saytimizdasiz?");
// }

// let ism = prompt('Ismingizni yozing')
// let num = +prompt('Nechta chiqsin?')


// for (let i = 1; i <= num; i++) {
//     document.write( ism + " ");
// }


// let login = prompt("Login  Kiriting");
// if (login == 'admin'  login == 'login'  login == 'behruz'){
//     alert("Salom admin");
// } else{
//     alert("xato");
// }