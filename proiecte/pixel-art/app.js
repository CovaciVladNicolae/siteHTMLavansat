// Selectam input color
const inputColor = document.getElementById("colorPicker")
// Selectam input height
const inputHeight = document.getElementById("inputHeight")
// Selectam input width
const inputWidth = document.getElementById("inputWidth")
// Selectam tabelul
const canvas = document.getElementById("canvas")
// Selectam buton
const buton = document.getElementById("submitSize")
// Functie care genereaza canvas-ul in functie dee inputHeightsi inputWidth
function makeCanvas() {
    const inputHeightVal = inputHeight.value;
    const inputWidthVal = inputWidth.value;
    // Verificam valoarea introdusa
    if (inputHeightVal <=0 || inputHeightVal >50 || inputWidthVal <=0 || inputWidthVal >50) {
        return;
    }
    // Adaugam un buton pentru a goli canvas-ul
    const clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear";
    clearBtn.id = "clear-canvas"
    if (canvas.children.length > 0) {
        while (canvas.lastElementChild) {
            canvas.removeChild(canvas.lastElementChild)
        }
        document.getElementById("clear-canvas").remove();
    }
    // Adauugam elementele in tabel
    //  Pentru fiecare rand adaug o coloana
    for (let row = 0; row < inputHeightVal; row++) {
        const tr = document.createElement("tr");

        for (let col = 0; col < inputWidthVal; col++) {
            const td = document.createElement("td");
            tr.append(td);
            canvas.append(tr);
        }
    }
    // Selectam toate celulele
    const allCells = document.getElementsByTagName("td");
    // Adauga un eveniment de click la fiecare celula
    for (let cell = 0; cell < allCells.length; cell++) {
        allCells [cell].addEventListener("click", function() {
            const inputColorVal = inputColor.value;
            allCells[cell].style.background = inputColorVal;
        })
        allCells[cell].addEventListener("contextmenu", function(event) {
            // Previne functionalitatea default pentru click dreapta
            event.preventDefault();
            // Setez background-ul la alb
            allCells[cell].style.background = "white";
        })
    }
    document.body.append(clearBtn);
    clearBtn.addEventListener("click", function() {
        for (let cell = 0; cell < allCells.length; cell++) {
            allCells[cell].style.background = "white";
            
        }
    })
}
// Cand butonul 'Submit' este apasat
buton.addEventListener("click", function(event) {
    event.preventDefault();
    makeCanvas();
})