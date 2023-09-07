// function tortburchak(eni, boyi){
//     let perim = (eni+boyi)*2;
//     let yuzasi = eni*boyi;

//     document.write('Perimetri:' + perim + ' Yuzasi: ' + yuzasi + '<br>');
// }

// tortburchak(3,5);
// tortburchak(13,18);

// () - funksiya, method
// [] - array
// {} - object

// class person {
//     name = "Abdulloh";
//     age = "14";
//     address = "yunusobod";
// }

// let user = new person;

// user.name = 'Behruz';
// console.log(user);
// document.write(user.name);

//ARRAY

// let people = ['Azamat','Mehriidin','Behruz','Komil','Aziz','Dilnoza',];

//1-usul
// for(let i = 0; i < people.length; i++){
//     document.write(people[i].toLocaleUpperCase() + "<br>");
// }   
//2-usul
// for(let person of people){
//     document.write(person.toLocaleUpperCase() + "<br>");
// }   
//3-usul
// people.forEach(name =>{
//     document.write(name.toLocaleUpperCase() + "<br>");
// });

// let numbers = [1,2,3,4,5,6,7];

// numbers.forEach(num =>{
//     document.write(num * 3 + "<br>");
// });

//////////////////////////////////////////////////

let mybtn = document.querySelector(".mybtn");
let myid = document.getElementById("myid");

mybtn.addEventListener("click", function () {
    // myid.value = "Salom!";
    // alert("Salom");
    window.location = "https://api.isft.uz/api/v1/admission/exam/students/acceptation/"+ myid.value;
  });


