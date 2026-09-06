const openCurrencySelectFromBtn = document.getElementById("openCurrencyFromBtn");
const openCurrencySelectToBtn = document.getElementById("openCurrencyToBtn");

const openCurrencySelectFromImg = document.getElementById("openCurrencyFromBtnImg");
const openCurrencySelectToImg = document.getElementById("openCurrencyToBtnImg");

const currencyFromBtns = document.querySelectorAll(".currencyFromBtn");
const currencyToBtns = document.querySelectorAll(".currencyToBtn");

const currencyFromContainer = document.querySelector(".currencyFromBtns");
const currencyToContainer = document.querySelector(".currencyToBtns");


const amount = document.getElementById("amount-to-convert");
const convertBtn = document.getElementById("convert-btn");
const resultScreen = document.getElementById("result");

let selectedCurrencyFrom = "eur";
let selectedCurrencyTo = "eur";

function convert(currency1, currency2, amount) {
    const rates = {
        eur: 1,
        usd: 1.08,
        gbp: 0.84,
        jpy: 160.50,
        cny: 7.70,
        chf: 0.94,
        aud: 1.62,
        cad: 1.47,
        hkd: 8.45,
        nzd: 1.76
    };
    const amountInEur = amount / rates[currency1];

    return Number(amountInEur * rates[currency2]).toFixed(2);  

}

currencyFromBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        selectedCurrencyFrom = btn.textContent.toLowerCase();
        openCurrencySelectFromBtn.lastChild.textContent = btn.textContent;
        currencyFromContainer.classList.add("hidden");
        openCurrencySelectFromImg.src = `images/${btn.textContent.trim().toLowerCase()}.svg`;        
    });
});

currencyToBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        selectedCurrencyTo = btn.textContent.toLowerCase();
        openCurrencySelectToBtn.lastChild.textContent = btn.textContent;
        currencyToContainer.classList.add("hidden");
        openCurrencySelectToImg.src = `images/${btn.textContent.trim().toLowerCase()}.svg`;
    });
});

openCurrencySelectFromBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currencyFromContainer.classList.remove("hidden");
});

openCurrencySelectToBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currencyToContainer.classList.remove("hidden");
});

document.addEventListener("click", (e) => {
    if (!(currencyFromContainer.classList.contains("hidden")) && !currencyFromContainer.contains(e.target)) {
        currencyFromContainer.classList.add("hidden");
    }
    if (!(currencyToContainer.classList.contains("hidden")) && !currencyToContainer.contains(e.target)) {
        currencyToContainer.classList.add("hidden");
    }
});

convertBtn.addEventListener("click", () => {
    if (amount.value === "") {
        alert("Please Add an Amount");
        return;
    }
    if (selectedCurrencyFrom === selectedCurrencyTo) {
        alert("You can't convert to the same currency");
        return;
    }
    const converted = convert(selectedCurrencyFrom, selectedCurrencyTo, amount.value);
    resultScreen.textContent = `${converted} ${selectedCurrencyTo.toUpperCase()}`;
});