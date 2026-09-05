const convertFrom = document.getElementById("currency-from");
const convertTo = document.getElementById("currency-to");
const amount = document.getElementById("amount-to-convert");
const convertBtn = document.getElementById("convert-btn");
const resultScreen = document.getElementById("result");

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

convertBtn.addEventListener("click", () => {
    if (amount.value === "") {
        alert("Please Add an Amount");
        return;
    }
    if (convertFrom.value === convertTo.value) {
        alert("You can't convert to the same currency");
        return;
    }
    const converted = convert(convertFrom.value, convertTo.value, amount.value);
    resultScreen.textContent = `${converted} ${convertTo.value.toUpperCase()}`;
});