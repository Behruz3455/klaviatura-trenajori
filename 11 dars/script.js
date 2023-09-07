// let num = prompt('20 raqamidan kichik son kiriting');

// if(num>=20){
//     document.write('Judta katta');
// }else{
//     document.write('Rahmat');
// }

// Ixtiyoriy A sonini juft yoki toqligini aniqlang. 
// Agar A soni juft bo'lsa console da "A soni juft" degan ask holda 
// "A soni toq" habar chiqaring

// let num = prompt("son kiriting");

// if(num % 2 == 0){
//     alert("juft");
// }
// else{
//     alert("Toq");
// }

// let num = prompt("son kiriting");

// if(num % 3 == 0){
//     alert("3ga bolinadi");
// }
// else{
//     alert("3ga bolinmaydi");
// }


// let num = +prompt("son kiriting");

// if (isNaN(num) && num % 3 == 0 ){
//     alert("3 ga bolinadi");
// }
// else if(isNaN(num) && num % 3 != 1 ){
//     alert("3 ga bolinmaydi");
// }
// else{
//     alert("xato")
// }

// let num = +prompt("son kiriting");
// if (!isNaN(num)) {
//   if (num % 3 == 0) {
//     alert("3 ga bo'linadi");
//   } else {
//     alert(" 3 ga bo'linmaydi");
//   }
// } else {
//   alert("son emas");
// }

// let num1 = +prompt('1-sonni kiriting');
// let num2 = +prompt('2-sonni kiriting');

// let number1 =  Math.abs(num1 - 5);
// let number2 =  Math.abs(num2 - 5);

// if (number1 < number2){
//   alert(num1);
// }
// else if ( number1 ==number2){
//   alert("masofasi teng");
// }
// else{
//   alert(num2)
// }

for(let i = 1; i<=115; i++){
    document.write( " Behruz <br>");      
} 


// function sum(num1, num2, num3){
//     document.write( `${num1}+ ${num2} +${num3} = ${num1+num2+num3} <br>`);
// }
// function




function addTwoNumbers(a, b) {
  return a + b;
}

addTwoNumbers(7 + 8);



function mediumNumber(a, b, c) {
  return (a + b + c) / 3;
}

mediumNumber (3+ 4+ 6 );


function maxNumber(a, b) {
  return Math.max(a, b);
}

mediumNumber (4,5);



function maxNumbers(a, b, c) {
  return Math.max(a, b, c);
}

maxNumbers(3,5,6);


function number(a) {
  if (a % 2 === 0) {
    return "Juft son";
  } else {
    return "Toq son";
  }
}
number ( 7 % 2 === 0);


