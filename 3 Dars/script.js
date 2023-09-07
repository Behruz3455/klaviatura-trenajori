//bot token
let telegram_bot_id = "6084042694:AAHBwmkds5IWXdbpoSXDq8E5CLbGUh2WfUM"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
let chat_id = 1862692289; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
let u_name, age, email, address, phone;
let ready = function() {
    u_name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;
    phone = document.getElementById("phone").value;
    message = "Ismi: " + u_name + "\nage: " + age +"\nemail: " + email + "\naddress: " + address + "\nphone:" + phone;
};
function sendtelegram() {
    ready();
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        window.location.href = 'ok.html'
    });
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
    return false;
};