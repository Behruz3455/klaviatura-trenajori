let telegram_bot_id = "6084042694:AAHBwmkds5IWXdbpoSXDq8E5CLbGUh2WfUM"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
let chat_id = 1862692289; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
let email, text;
function sendtelegram() {
    email = document.getElementById("email").value;
    text = document.getElementById("text").value;
    message = "email: " + email + "\ntext: " + text ;
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
        
    });
    document.getElementById("email").value = "";
    document.getElementById("text").value = "";
    return false;
};