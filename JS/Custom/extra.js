

// Burger iconuna tkladigda navbar acilir
const menyuDiv = document.querySelector(".menyu-div");
const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menyuDiv.classList.toggle("active");
});

// achilan navbarda her hansi bir linke tikladiqda navbar baglanir
const navItem = document.querySelectorAll(".nav-item");
const logo = document.querySelectorAll(".logo");
navItem.forEach(function(e){
    e.addEventListener("click", () => {
        burger.classList.remove("active");
        menyuDiv.classList.remove("active");
    });
});



// səhifəni aşağı çəkdikdə menyu çubuğu yuxarı çəkilərək yerində qaır. (böyük ekranlarda)
window.addEventListener("scroll", function(){
    let mainNavbar = document.querySelector("#mainNavbar");
    mainNavbar.classList.toggle("navBarScroll", window.scrollY > 0);
});


// HTML, CSS and JavaScript in renglərinin avtomatik dəişilməsi
const colorStyle = document.querySelector("#colorStyle");
const color_array = [
    "darkred", "green", "blue", "orange", "#fcba03", "#fc1803", "#b1fc03", "#56fc03", "#829fa1","#5fadb3", "#766bb5", "#905c9c", "#bd828b", "#203633", "#a99db0", "#b0a69d", "#66605b", "#cf7932", "#d2e077", "#3a4205", "#250542", "#9269d1", "#948646", "#944646", "#f29191", "#452211", "#451111", "#d3e7f2", "#89959c", "#395361", "#d8daed", "#0066ff", "#cc6600", "#333300", "#993399"
];
window.onload = function(){
    setInterval(function(){
        let randomColor = Math.floor(Math.random() * color_array.length + 1);
        let txtColor = color_array[randomColor];
        colorStyle.style.color = txtColor;
    }, 2000);
}


function formFunctions(){
    'Use Strict'
    let myName = document.querySelector("#name");
    let myLastName = document.querySelector("#lastName");
    let myEmail = document.querySelector("#email");
    let myPhone = document.querySelector("#phone");
    let myMessage = document.querySelector("#message");
    let textAreaCharacter = document.querySelector("#current-character");
    let submitButton = document.querySelector("#submitButton");
    let sendKey = document.querySelector("#sendKey");

    if(myMessage.value.length == 0) {
        submitButton.disabled = true;
        submitButton.classList.remove("send-button");
        sendKey.classList.remove("sendKey");
        submitButton.classList.add("button-disable");
        sendKey.classList.add("sendKey1");
    }

    const spacePattern = /^\S*$/;
    const NumericPattern = /^([^0-9]*)$/;
    const EmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
    const OnlyNumberPattern = /^[0-9]*$/;

    myName.addEventListener("blur", controlName);
    function controlName(){
        let errName = document.querySelector("#errName");
        if(myName.value.length == 0){
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            errName.innerHTML = "The name field cannot be empty";
            return false;
        }else if (myName.value.length < 3){
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            errName.innerHTML = "The name must contain at least four letters";
            return false;
        }else if(spacePattern.test(myName.value) == false){
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            errName.innerHTML = "A space cannot be used in the name field";
            return false;
        }else if(NumericPattern.test(myName.value) == false){
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            errName.innerHTML = "The name field must contain only letters";
            return false;
        }else if (myName.value.length > 30){
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            errName.innerHTML = "The name cannot exceed thirty letters";
            return false;
        }else {
            myName.classList.add("is-valid");
            myName.classList.remove("is-invalid");
            return true;
        }
    }

    myLastName.addEventListener("blur", controlLastName);
    function controlLastName(){
        let errLastName = document.querySelector("#errLastName");
        if(myLastName.value.length == 0){
            myLastName.classList.remove("is-valid");
            myLastName.classList.add("is-invalid");
            errLastName.innerHTML = "The last name field cannot be empty";
            return false;
        }else if (myLastName.value.length < 3){
            myLastName.classList.remove("is-valid");
            myLastName.classList.add("is-invalid");
            errLastName.innerHTML = "The last name must contain at least four letters";
            return false;
        }else if(spacePattern.test(myLastName.value) == false){
            myLastName.classList.remove("is-valid");
            myLastName.classList.add("is-invalid");
            errLastName.innerHTML = "A space cannot be used in the last name field";
            return false;
        }else if(NumericPattern.test(myLastName.value) == false) {
            myLastName.classList.remove("is-valid");
            myLastName.classList.add("is-invalid");
            errLastName.innerHTML = "The last name field must contain only letters";
            return false;
        }
        else if (myLastName.value.length > 30){
            myLastName.classList.remove("is-valid");
            myLastName.classList.add("is-invalid");
            errLastName.innerHTML = "The last name cannot exceed thirty letters";
            return false;
        }else {
            myLastName.classList.add("is-valid");
            myLastName.classList.remove("is-invalid");
            return true;
        }
    }

    myEmail.addEventListener("blur", controlEmail);
    function controlEmail() {
        let errEmail = document.querySelector("#errEmail");
        if(myEmail.value.length == 0){
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            errEmail.innerHTML = "The E-mail field cannot be empty";
            return false;
        }else if(spacePattern.test(myEmail.value) == false){
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            errEmail.innerHTML = "A space cannot be used in the E-mail field";
            return false;
        }else if (EmailPattern.test(myEmail.value) == false){
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            errEmail.innerHTML = "Email format is not correct (Exp: example@gmail.com)";
            return false;
        }
        else{
            myEmail.classList.add("is-valid");
            myEmail.classList.remove("is-invalid");
            return true;
        }
    }

    myPhone.addEventListener("blur", controlPhone);
    function controlPhone() {
        let errPhone = document.querySelector("#errPhone");
        if(myPhone.value.length == 0){
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            errPhone.innerHTML = "The phone field cannot be empty";
            return false;
        }else if(spacePattern.test(myPhone.value) == false) {
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            errPhone.innerHTML = "A space cannot be used in the phone field";
            return false;
        }else if(OnlyNumberPattern.test(myPhone.value) == false) {
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            errPhone.innerHTML = "The phone field must contain only numbers";
            return false;
        }else if(myPhone.value.length <=9){
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            errPhone.innerHTML = "The number of digits in the phone field cannot be less than 10";
            return false;
        }else {
            myPhone.classList.add("is-valid");
            myPhone.classList.remove("is-invalid");
            return true;
        }
    }

    myMessage.addEventListener("blur", controlMessage);
    function controlMessage(){
        let errMessage = document.querySelector("#errMessage");
        if(myMessage.value.length == 0){
            myMessage.classList.remove("is-valid");
            myMessage.classList.add("is-invalid");
            errMessage.innerHTML = "The textarea field cannot be empty";
            return false;
        }else if(myMessage.value.length >= 10){
            myMessage.classList.remove("is-valid");
            myMessage.classList.add("is-invalid");
            errMessage.innerHTML = "The message field must contain a text of at least 10 characters";
            return false;
        }else {
            myMessage.classList.add("is-valid");
            myMessage.classList.remove("is-invalid");
            return true;
        }

    };

    myMessage.addEventListener("keyup", function(){
        textAreaCharacter.textContent = myMessage.value.length;

        if(myMessage.value.length >= 10){
            submitButton.disabled = false;
            submitButton.classList.add("send-button");
            sendKey.classList.add("sendKey");
            submitButton.classList.remove("button-disable");
            sendKey.classList.remove("sendKey1");
        }else{
            submitButton.classList.remove("send-button");
            sendKey.classList.remove("sendKey");
            submitButton.classList.add("button-disable");
            sendKey.classList.add("sendKey1");
            submitButton.disabled = true;
        }

        let myForm = document.querySelector(".needs-validations");
        myForm.addEventListener("submit", function(e){
            if(myForm.checkValidity() == false || controlName() == false || controlLastName() == false ||
                controlEmail() == false || controlPhone() == false || controlMessage() == false) 
            {
                e.preventDefault();
                e.stopPropagation();

                submitButton.disabled = false;
                submitButton.classList.add("send-button");
                sendKey.classList.add("sendKey");
                submitButton.classList.remove("button-disable");
                sendKey.classList.remove("sendKey1");
            }
        }, false);
    });
};
formFunctions();
formFunctions();