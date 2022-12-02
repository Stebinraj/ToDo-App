// Todo List Start
"use strict";
document.getElementById("todo").onclick = () => {
    ajaxcall_to_do_list();
}

//AJAX call to fetch API
const ajaxcall_to_do_list = () => {
    "use strict";
    let to_do_list_promise = new Promise(function (resolve, reject) {
        let todo_xhttp = new XMLHttpRequest();
        todo_xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
        todo_xhttp.onload = () => {
            if (todo_xhttp.readyState == 4 && todo_xhttp.status == 200) {
                var to_do_list_response = JSON.parse(todo_xhttp.responseText);
                resolve(to_do_list_response);
            }
            else {
                reject("Error Occoured");
            }
        }
        todo_xhttp.send();
    })

    to_do_list_promise.then((to_do_list_response) => {
        let todo_data = "";
        let todo_status = "";
        for (let i = 0; i < to_do_list_response.length; i++) {
            if (to_do_list_response[i].completed == true) {
                todo_status = `<input type="checkbox" checked disabled="disabled">`
            } else {
                todo_status = '<input type="checkbox" id="check" onclick="checkbox_validate()">';
            }
            todo_data += `
            <table class="table-bordered w-100">
            <td class="w-25 p-2 text-center">${to_do_list_response[i].id}</td>
            <td class="w-50 p-2">${to_do_list_response[i].title}</td>
            <td class="w-25 p-2 text-center">${todo_status}</td>
            </table>`;
        }
        document.getElementById("todo-list-table").innerHTML = todo_data;
    });
}
// Todo List End

//Checkbox Validation Start
const checkbox_validate = () => {
    let count_promise = new Promise((resolve) => {
        let checked = document.querySelectorAll('input[id="check"]:checked').length;
        if (checked == 5) {
            resolve(checked)
        }
    })

    count_promise
        .then((checked) => {
            alert(`Congrats ${checked} has been Successfully Completed`);
        })
}
//Checkbox Validation End

// Navbar Start
document.getElementById("log-out-btn").onclick = () => {
    "use strict";
    location.href = "../index.html";
}
// Navbar End