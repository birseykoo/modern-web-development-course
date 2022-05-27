class UI {
    constructor() {
        this.profile = document.getElementById('profile');
        this.repolist = document.getElementById('repos');
        this.lastUsers = document.getElementById('last-users');
        this.inputField = document.getElementById('githubname');
        this.cardBody = document.querySelector('.card-body');
    }
    clearInput() {
        this.inputField.value = '';
    }
    showUserInfo(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }
    showErrors(message) {
        const div = document.createElement('div');
        div.className = 'alert alert-danger';
        div.appendChild(document.createTextNode(message));
        this.cardBody.appendChild(div);
        setTimeout(() => {
            this.clearErrors();
        }
        , 3000);
    }
    showRepoInfo(repos) {
        let output = '';
        repos.forEach(repo => {
            output += `
            <div class="card card-body alert alert-success mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        });
        this.repolist.innerHTML = output;
    }
    addSearchedUSersToUI(username) {
        let users = Storage.getSearchedUSersFormStorage();
        if (users.indexOf(username) === -1) {
            const div = document.createElement('div');
            div.className = 'alert alert-success';
            div.innerHTML = `<h4>${username}</h4>`;
            this.lastUsers.appendChild(div);
        }else {
            return false;
        }
    }
    clearAllSearchedUsersFromUI() {
       while (this.lastUsers.firstChild !== null) {
           this.lastUsers.removeChild(this.lastUsers.firstChild);
       }
    }
}