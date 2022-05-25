const form = document.getElementById('film-form');
const titleElement = document.querySelector('#title');
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url');
const cardBody = document.querySelectorAll('.card-body')[1];
const clear = document.getElementById('clear-films');
// UI Objcect

const ui = new UI();

// Storage Objcect
const storage = new Storage();

// Tüm Eventleri Çalıştırma

eventListeners();

function eventListeners(){
    form.addEventListener('submit',addFilm);
    document.addEventListener('DOMContentLoaded',function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
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
        ui.displayMessages('Lütfen tüm alanları doldurunuz.','danger');
    }else{
        // Yeni Film Oluşturma
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm); // Arayüze Film Ekleme
        storage.addFilmToStorage(newFilm); // Local Storage'a Film Ekleme
        ui.displayMessages('Film Başarıyla Eklendi.','success');
    }
    ui.clearInputs();

    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === 'delete-film'){
        ui.deleteFilmFromUI(e.target);
        storage.removeFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    }
}

function clearAllFilms(){
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
    ui.displayMessages('Tüm Filmler Başarıyla Silindi.','success');
}