/*
ToDo List Project
*/

// Tüm elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { // Tüm Event Listenerlarını tanımlama
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);
}
function clearAllTodos(e) {
    if (confirm("Tümünü silmek istediğinize emin misiniz ?")) {
        // Arayüzden todoları temizleme
        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
}
function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            // Bulamadığında gizle
            listItem.setAttribute("style", "display : none !important");
        }
        else {
            // Bulunduğunda göster
            listItem.setAttribute("style", "display : block");
        }
    });
}
function deleteTodo(e) {
    // Todo silme
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Todo başarıyla silindi...");
    }
}
function deleteTodoFromStorage(deletetodo) {
    // Local Storage'dan todo silme
    let todos = getTodosFormStorage();
    todos.forEach(function (todo, index) {
        if (todo === deletetodo) {
            todos.splice(index, 1);
        }
    }
    );
    localStorage.setItem("todos", JSON.stringify(todos));
}
function loadAllTodosToUI() { // Todo listesini UI'a yükleme
    let todos = getTodosFromStorage()
    todos.forEach(function (todo) {
        // Todo listesine yeni todo ekleme
        addTodoToUI(todo);
    });
}
function addTodo(e) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {
        // Hata mesajı
        showAlert("danger", "Görev boş olamaz!");
    }
    else {
        // Todo listesine yeni todo ekleme
        addTodoToUI(newTodo);
        // Local Storage Ekleme
        addTodoToStorage(newTodo);
        //Alert
        showAlert("success", "Görev başarıyla eklendi!");
    }

    e.preventDefault();
}
function showAlert(type, message) {
    // Uyarı Mesajı
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);
    setTimeout(function () {
        alert.remove();
    }, 1000);
}
function getTodosFormStorage() { // Storage'dan todo listesini çekme
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
    // todos.forEach(function (todo) {
    //     // Todo listesine yeni todo ekleme
    //     addTodoToUI(todo);
    // });

}
function addTodoToStorage(newTodo) {
    let todos = getTodosFormStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
function addTodoToUI(newTodo) { // UI'da yeni todo ekleme
    // Liste için yeni bir li elementi oluşturma
    const listItem = document.createElement("li");
    // Link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";
    // Todo içeriği ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    // Todo listesine ekleme
    todoList.appendChild(listItem);
    todoInput.value = "";
}