// Selectam tag-ul body
const body = document.body;
// Selecatm span-ul cu id 'mod-toggle'
const modeToggle = document.getElementById("mode-toggle");
// Selectam lista de card-uri
const cardsList = document.getElementsByClassName("cards-list")[0];
// Selectam formularul
const searchForm = document.getElementById("searchForm");
// Salvam proiectele
let projects = []
if (searchForm) {
    searchForm.addEventListener("submit", search)
}
modeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    console.log(body)
})
function generateCard(proiect) {
    console.log(proiect);
    // Generam un li
    const li = document.createElement("li");
    // Generam un div
    const div = document.createElement("div");
    // Adaugam clasa card la div
    div.classList.add("card") 
    // Generam un element img
    const cardImg = document.createElement("img");
    // Adaugam imaginea in atributul src
    cardImg.src = proiect.imagine;
    // Adaugam numele imaginii in atributul alt
    cardImg.alt = proiect.nume;
    // AAdaugam elementul img in card
    div.append(cardImg);
    // Generam un div cu clasa card-content
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    // Adaugam titlul in card-content
    const titlu = document.createElement("h3");
    titlu.textContent = proiect.nume;
    cardContent.append(titlu);
    // Adaugam descrierea in paragraf 
    const descriere = document.createElement("p");
    descriere.textContent = proiect.descriere;
    cardContent.append(descriere);
    // Adaugam butonul 
    const cardBtn = document.createElement("button");
    cardBtn.textContent = "Mai Multe";
    cardBtn.onclick = function() {
        location.href = proiect.link;
    };
    cardContent.append(cardBtn);
    // Adaugam card-content in card
    div.append(cardContent);
    // Adaugam card-ul in li
    li.append(div);
    // Adaugam li in lista
    cardsList.append(li);
}
// Verifica valoare din input cu numele proiectului
function search (event) {
    event.preventDefault();
    const searchInput = searchForm.querySelector("input");
    // Salvam valoare din search input
    const searchValue = searchInput.value;
    const found = projects.find(proiect => proiect.nume.toLowerCase().includes(searchValue.toLowerCase()));
    console.log(found);
    if (!found || !searchValue) {
        // Nu s-a gasit valoarea, afisam toate proiectele
        cardsList.innerHTML = '';
        projects.forEach(function(proiect) {
            generateCard(proiect)
        });
    } else {
        // S-a gassit valoarea, afisam proiectul
        cardsList.innerHTML = '';
        generateCard(found);
    }
}