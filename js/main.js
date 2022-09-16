const searchInput = document.querySelector(".search-input");
const searchOutput = document.querySelector(".search-output");
const searchBtn = document.querySelector(".search-btn");

const names = [
    "Raymond", "Aram", "Alina", "Donald", "Glen",
    "Mr. Kaplan", "Elizabeth", "Tom", "Agnes", "Dembe", "Samar", "Harold", "Dominic", "Townsend", "Brimley", "Cynthia", "Weecha",
    "Chuck", "Morgan"

];

searchInput.addEventListener("input", function output() {
    let value = this.value.toLowerCase();

    let listNames = "";
    if (value.length > 0) {
        for (let i = 0; i < names.length; i++) {
            if (names[i].toLowerCase().includes(value)) {
                listNames += `<li>${names[i]}</li>`;
            }
        }
    }
    searchOutput.innerHTML = listNames;

});

searchBtn.addEventListener("click", function output() {
    let value = this.value.toLowerCase();

    let listNames = "";
    if (value.length > 0) {
        for (let i = 0; i < names.length; i++) {
            if (names[i].toLowerCase().includes(value)) {
                listNames += `<li>${names[i]}</li>`;
            }
        }
    }
    searchOutput.innerHTML = listNames;
});