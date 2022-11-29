//To Do list Start
"use strict";
let todo = document.getElementById("todo");
todo.addEventListener("click", () => {
    ajaxcall_to_do_list();
})

function ajaxcall_to_do_list() {
    "use strict";
    let todo_xhttp = new XMLHttpRequest();
    todo_xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            let todo_list_promise = new Promise((resolve, reject) => {
                let todo_data = "";
                let todo_status = "";
                for (let i = 0; i < response.length; i++) {
                    if (response[i].completed == true) {
                        todo_status = `<input type="checkbox" checked disabled="disabled">`;
                    } else {
                        todo_status = '<input type="checkbox" class="check">';
                    }
                    todo_data += `
                    <table class="table-bordered w-100">
                    <td class="w-25 p-2 text-center">${response[i].id}</td>
                    <td class="w-50 p-2">${response[i].title}</td>
                    <td class="w-25 p-2 text-center">${todo_status}</td>
                    </table>`;
                }
                resolve(todo_data);
            })
            todo_list_promise.then((todo_data) => {
                document.getElementById("todo-list-table").innerHTML = todo_data;
            })
            todo_list_promise.then(() => {
                chk_box_validate();
            })
        }
    }
    todo_xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true)
    todo_xhttp.send();
}

function chk_box_validate() {
    let check = document.getElementsByClassName("check");
    check = addEventListener("input", () => {
        "use strict";
        var count = 0;
        let check = document.getElementsByClassName("check");
        for (let i = 0; i < check.length; i++) {
            if (check[i].checked == true) {
                count += 1;
            }
        }
        if (count == 5) {
            alert("Congrats. 5 Tasks have been Successfully Completed");
        }
    })
}
// To Do List End

// Navbar Start
let logout_button = document.getElementById("log-out-btn")
logout_button.addEventListener("click", () => {
    "use strict";
    location.href = "../index.html";
});
// Navbar End
