const form = document.getElementById('film-form');
const titleElement = document.querySelector('#title');
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url');
const cardBody = document.querySelectorAll('.card-body')[1];
const clear = document.getElementById('clear-films');

// Tüm Eventleri Çalıştırma

eventListeners();

function eventListeners(){
    form.addEventListener('submit',addFilm);
    document.addEventListener('DOMContentLoaded',function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardBody.addEventListener('click',deleteFilm);
    clear.addEventListener('click', clearAllFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === '' || director === '' || url === ''){
        // alert('Lütfen tüm alanları doldurunuz');
        UI.displayMessages('Lütfen tüm alanları doldurunuz.','danger');
    }else{
        // Yeni Film Oluşturma
        const newFilm = new Film(title,director,url);

        UI.addFilmToUI(newFilm); // Arayüze Film Ekleme
        Storage.addFilmToStorage(newFilm); // Local Storage'a Film Ekleme
        UI.displayMessages('Film Başarıyla Eklendi.','success');
    }
    UI.clearInputs();

    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === 'delete-film'){
        UI.deleteFilmFromUI(e.target);
        Storage.removeFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    }
}

function clearAllFilms(){
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
    UI.displayMessages('Tüm Filmler Başarıyla Silindi.','success');
}