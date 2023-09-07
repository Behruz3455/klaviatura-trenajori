// let ism = 'aziz';

// switch (ism) {
//     case 'Mehriddin':
//     case 'aziz':
//         alert('Togri');
//         break;
//         default:
//         alert('xato');
//         break;
// }

// let num = [1,2,2,3,4,5,6,7,8,9,10,11,22,33,44,55,66,77,88,99];

// num.pop()      // oxiridan ochiradi
// num.push(7)    // oxiridan qoshadi
// num.shift()    // boshidan ochiradi
// num.unshift(7) // boshidan qoshadi

// console.log(num);

let question = +prompt ('Nechta savol beray?');
let togri = 0 ;

for(let i =1; i<=question; i++){
    num1 = Math.floor (1+Math.random()*10);
    num2 = Math.floor (1+Math.random()*10);
    answer =+prompt(`${i}-savol: ${num1} *  ${num2} = ?`);

    if(num1 * num2 == answer){
        document.write(`<p class="true">${i}-savol: ${num1} *  ${num2} = ${answer} (Togri)</p>`);
        togri++;
    }
    else{
        document.write(`<p class="false">${i}-savol: ${num1} *  ${num2} = ${answer} (xato! (${num1*num2}))</p>`);
    }
}
    document.write(`<h2>${question} ta savoldan ${togri} ta togri va ${question-togri} ta notogri bajardingiz! </h2>`); 

    
