class Github {
    constructor(){
        this.url = 'https://api.github.com/users/';
    }
    async getGithubData(username){
        const profileResponse = await fetch(`${this.url}${username}`);
        const repoResponse = await fetch(`${this.url}${username}/repos`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}