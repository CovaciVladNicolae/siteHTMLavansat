const css = document.querySelector("h3");
// Selectam primul input
const color1 = document.querySelector(".color1");
// Selectam al doilea input
const color2 = document.querySelector(".color2");
// Selectam body-ul
const body = document.getElementById("gradient");
// Selectam butonul
const randomBtn = document.getElementById("randomBtn");
// Schimba backgraund-ul in functie de culorile selectate
function setGradient(firstColor, secondColor) {
    // Selectam proprietatea backgraund a elementului body
    // Setam backgraund-ul cu culorile alese
    body.style.background = "linear-gradient(to right , "+ firstColor + ", " + secondColor + ")"
    // Afisam background-ul in h3
    css.textContent = body.style.background + ";";
}
// Schimbe background-ul in funcite de valorile din input
function setGradientOnInput() {
    setGradient(color1.value, color2.value);
}




// Returneaza un numar randlme intre0 si 250
function randomizer() {
    console.log(Math.floor(5.95));
    return Math.floor(Math.random() * Math.floor(250));
}
// Returneaza textul culorii rgb
function randomColor() {
    // rgb(123, 123, 123);
    const random = "rgb("+ randomizer() + ", " + randomizer() + ", " + randomizer() + ")"
    return random;
}
// console.log(randomColor())
// Schimba background-ul cu valori random
function setRandomGradient() {
    setGradient(randomColor(), randomColor());
}
color1.addEventListener("input",setGradientOnInput);
color2.addEventListener("input",setGradientOnInput);
randomBtn.addEventListener("click", setRandomGradient);
setGradientOnInput();