// Http Status
// 200: OK
// 403: Forbidden
// 404: Not Found
// 500: Internal Server Error

// document.getElementById('btn').addEventListener('click', function() {
//     const xhr = new XMLHttpRequest(); // Create a new XHR object
//     // console.log(xhr);
//     // xhr.onreadystatechange = function() {
//     //     // console.log(this.readyState);
//     //     // console.log(this.status);

//     //     if (this.readyState == 4 && this.status == 200) {
//     //         console.log(this.responseText); // Print the response text
//     //     }

//     // }
//     // xhr.onprogress = function() {
//     //     console.log('Loading...', this.readyState);
//     // }
//     // xhr.onload = function() {
//     //     if (this.status == 200) {
//     //         console.log(this.responseText);
//     //     }
//     // }

//     // xhr.onload = function() {
//     //     if (this.status == 200) {
//     //         document.getElementById('ajax').textContent = this.responseText;
//     //     }
//     // }
//     xhr.open('GET','example.txt', true); // Open the request
//     xhr.send(); // Send the request
// });

document.getElementById('ajax').addEventListener('click', getAllEmployees);

function getAllEmployees(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'employees.json', true);
    xhr.onload = function(){
        if(this.status === 200){
            const employees = JSON.parse(this.responseText);
            let list = document.getElementById('employees');
            if (this.status == 200) {
                const employees = JSON.parse(this.responseText);
                employees.forEach(function(employee){
                    list.innerHTML += `
                        <tr>
                            <td>${employee.name}</td>
                            <td>${employee.department}</td>
                            <td>${employee.salary}</td>
                        </tr>
                    `;
                });
            }
        }

    }
    xhr.send();
}
