
let email = document.getElementById("email");
let password = document.getElementById("password");
let Check = document.getElementById("Check");
let icon = document.querySelector(".bi");

Check.addEventListener("click", () => {
  if (password.type == "text") {
    password.type = "password";
    icon.classList.add("bi-eye");
    icon.classList.remove("bi-eye-slash");
} else {
    password.type = "text";
    icon.classList.remove("bi-eye");
    icon.classList.add("bi-eye-slash");
  }
  location ="https://14-darsss.netlify.app/"
});
function login(){
  if (email.value == "admin@admin.com" && password.value == "1234567"){
    window.location = "ok.html"
  }else{
    alert("login yoki parol xato ");
  }
}