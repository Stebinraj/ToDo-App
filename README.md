In this application, first, there is a login session. Users can log in only into the web app using the username “admin” and password “12345”. Should check the login validation and if the login is true, then using the “Callback Function” concept, redirect to the main page. 

On the main page, there is a navigation bar with menus (Todo List, LogOut). On the Todo list page, you have to retrieve the daily tasks (to-do lists) from the API (https://jsonplaceholder.typicode.com/todos) and in that mark the todos that you are already completed. If you marked 5 todos as completed, then an alert box will pop up and show “ Congrats. 5 Tasks have been Successfully Completed ” (Use the concept of Promise() for the validation of 5 Completed TodoLists ). 

When you click on the LogOut menu in the navbar, it should redirect to the login page. The whole User Interface should be responsive by using Bootstrap or any other Framework. 
