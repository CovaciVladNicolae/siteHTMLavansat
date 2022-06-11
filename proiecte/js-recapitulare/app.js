console.log('test')

// Variabile
let variabilaMea = 1; // poate fi modificata
const variabilaMeaConstanta = 2; // Nu poate fi modificata

let unu, doi, trei; // Varibile goale

// Nedefinit si null
let nedefinit = undefined;
let nul = null;

// Tipuri de date
// Numar
let numar = 123;

// Text (String)
let text = "textul variabilei";

// Boolean
let adevarat = true;
let fals = false;

// Liste (Array)
let lista = ["unu", 4, "text"];

// Accesarea elementelor dintr-o lista
console.log(lista[0])
console.log(lista);
// Dimensiunea unei liste
console.log(lista.length);

// Obiecte
let elev = {
    nume: 'Gigi',
    varsta: 68
}

console.log(elev);
console.log(elev.nume);
console.log(elev.varsta);

// Slectoare DOM (Document Object Model)
// Selectare dupa ID
const elementDupaId = document.getElementById("titlu");
console.log(elementDupaId);

// Selectare dupa TAG
const elementeDupaTag = document.getElementsByTagName("p");

// Selectare dupa Clasa
const elementeDupaClasa = document.getElementsByClassName("paragraf");
console.log(elementeDupaClasa);