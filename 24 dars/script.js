let btns = document.querySelectorAll('.btns button');
let imgs = document.querySelectorAll('.imgs img');

console.log(btns);
console.log(imgs);

btns.forEach(button =>{
    button.addEventListener('click', () =>{
        // alert(button.innerHTML);
        imgs.forEach(img=>{
            if(button.innerHTML == img.getAttribute('siteFilter')){
                img.parentElement.classList.remove('d-none');
            }
            else if(button.innerHTML == "All"){
                img.parentElement.classList.remove("d-none")
            }
            else{
                img.parentElement.classList.add('d-none');
            }
        })
    })
})