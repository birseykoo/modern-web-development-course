function UI() {

}
UI.prototype.addFilmToUI = function (newFilm) {
    // console.log(newFilm);
    const filmList = document.getElementById('films');
    // Film Liste Ekleme
    filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
       `;
}
UI.prototype.clearInputs = function () {
    document.getElementById('title').value = '';
    document.getElementById('director').value = '';
    document.getElementById('url').value = '';
}
UI.prototype.displayMessages = function (message, type) {
    const cardBody = document.querySelector('.card-body');
    const div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.appendChild(document.createTextNode(message));
    cardBody.appendChild(div);
    setTimeout(function () {
        div.remove();
    }
        , 3000);
}
UI.prototype.loadAllFilms = function (films) {
    const filmList = document.getElementById('films');
    films.forEach(function (film) {
        filmList.innerHTML += `
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
       `;
    });
}
UI.prototype.deleteFilmFromUI = function (target) {
    if (target.id === 'delete-film') {
        target.parentElement.parentElement.remove();
        ui.displayMessages('Film Başarıyla Silindi.', 'success');
    }
}

UI.prototype.clearAllFilmsFromUI = function () {
    const filmList = document.getElementById('films');
    // filmList.innerHTML = '';
    while (filmList.firstChild != null) {
        filmList.firstChild.remove();
    }

}

