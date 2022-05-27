const githubForm = document.getElementById('github-form');
const nameInput = document.getElementById('githubname');
const clearBtn = document.getElementById('clear-last-users');
const lastUsers = document.getElementById('last-users');
const github = new Github();
const ui = new UI();
const storage = new Storage();
eventListeners();

function eventListeners() {
    githubForm.addEventListener('submit', getData);
    clearBtn.addEventListener('click', clearUsers);
    document.addEventListener('DOMContentLoaded', getAllSearched);
}

function getData(e) {

    const username = nameInput.value.trim();
    if (username === '') {
        showAlert('Please enter a username', 'alert-danger');
    } else {
        github.getGithubData(username)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                ui.showErrors('User not found');
            } else {
                ui.addSearchedUSersToUI(username);
                Storage.addSearchedUSersToStorage(username);
                ui.showUserInfo(data.profile);
                ui.showRepoInfo(data.repos);
            }
        }
        )
        .catch(err => ui.showErrors(err));
    }

    ui.clearInput();
    e.preventDefault();
}

function clearUsers(){
    if(confirm('Are you sure?')){
        Storage.removeSearchedUSersFromStorage ();
        ui.clearAllSearchedUsersFromUI();
    }
}
function getAllSearched(){
    let users = Storage.getSearchedUSersFormStorage();
    let result = '';
    users.forEach(user => {
        result += `<div class="alert alert-success">${user}</div>`;
    });
    lastUsers.innerHTML = result;

}