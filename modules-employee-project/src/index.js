import { Request } from "./requests";
import { UI } from "./ui";

const form = document.getElementById('employee-form');
const nameInput = document.getElementById('name');
const departmentInput = document.getElementById('department');
const salaryInput = document.getElementById('salary');
const employeeList = document.getElementById('employees');
const updateEmployeeButton = document.getElementById('update');

const request = new Request('http://localhost:3000/employees');
const ui = new UI();
let updateState = null;
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', getAllEmployees);
    form.addEventListener('submit', addEmployee);
    employeeList.addEventListener('click', updateOrDelete);
    updateEmployeeButton.addEventListener('click', updateEmployee);
}
function getAllEmployees() {
    request.get()
        .then(data => {
            ui.addAllEmployeesToUI(data);
        })
        .catch(err => console.log(err));
}
function addEmployee(e) {

    const employeeName = nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();

    if (employeeName === '' || employeeDepartment === '' || employeeSalary === '') {
        alert('Lütfen tüm alanları doldurunuz');
        return;
    }else{
        const employee = {
            name: employeeName,
            department: employeeDepartment,
            salary: Number(employeeSalary)
        }
        request.post(employee)
            .then(data => {
                ui.addEmployeesToUI(data);

            })
            .catch(err => console.log(err));
    }
    ui.clearInputs();
    e.preventDefault();
}

function updateOrDelete(e) {
    if (e.target.id === 'delete-employee') {
        deletEmployee(e.target);
    }else if (e.target.id === 'update-employee') {
        updateEmployeeController(e.target.parentElement.parentElement);
    }
}
function deletEmployee(targetEmployee) {
    const id = targetEmployee.parentElement.previousElementSibling.previousElementSibling.textContent;
    request.delete(id).then(data => {
        ui.deleteEmployeeFromUI(targetEmployee.parentElement.parentElement);
    }).catch(err => console.log(err));
}
function updateEmployeeController(targetEmployee) {
    ui.toggelUpdateButton(targetEmployee);
    if (updateState === null) {
        updateState = {
            updateId: targetEmployee.children[3].textContent,
            updateParent: targetEmployee
        }
    }else {
        updateState = null;
    }
}
function updateEmployee(e) {
    const data = {
        name: nameInput.value.trim(),
        department: departmentInput.value.trim(),
        salary: Number(salaryInput.value.trim())
    }
    request.put(updateState.updateId, data).then(updateEmployee => {
        ui.updateEmployeeOnUI(updateEmployee, updateState.updateParent);
    }).catch(err => console.log(err));
}