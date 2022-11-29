// Login Start
"use strict";
let username = document.getElementById("user-login-username");
let password = document.getElementById("user-login-password");
let login_form = document.getElementById("login-form");
let user_regex = /^(?:^|\W)admin(?:$|\W)$/;
let pass_regex = /^(?:^|\W)12345(?:$|\W)$/;

const login = (valid) => {
    "use strict";
    login_form.addEventListener("submit", () => {
        if (user_regex.test(username.value) && pass_regex.test(password.value)) {
            valid();
        } else {
            alert("Invalid Credentials");
        }
    })
}

const valid = () => {
    "use strict";
    login_form.action = "assets/home.html";
}

login(valid);

// Login End