// Login Start
"use strict";
let username = document.getElementById("user-login-username");
let password = document.getElementById("user-login-password");
let login_form = document.getElementById("login-form");

function login(valid) {
    "use strict";
    if (username.value === "admin" && password.value == 12345) {
        valid()
    } else {
        alert("Invalid Credentials")
    }
}

function valid() {
    "use strict";
    login_form.action = "assets/home.html"
}

login_form.onsubmit = () => {
    "use strict";
    login(valid);
}
// Login End