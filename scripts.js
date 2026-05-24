const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectInput = document.querySelector(".currency-select-input");

async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL")
        .then(response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high
    const bitcoinToday = data.BTCBRL.high

    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}



function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/Dolar.png"
    }

    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.png"
    }

    if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImg.src = "./assets/Libra.png"
    }

    if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/Bitcoin.png"
    }

    if (currencySelect.value === "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/Real.png"
    }


    convertValues()
}




const inputElement = document.querySelector(".input-currency");
const currencyNameInput = document.getElementById("currency-name-input");
const currencyImgInput = document.querySelector(".currency-img-input");
function changePlaceholder() {

    if (currencySelectInput.value === "real-input") {
        inputElement.placeholder = "R$ 0,00"
        currencyNameInput.innerHTML = "Real"
        currencyImgInput.src = "./assets/Real.png"
    }

    if (currencySelectInput.value === "dolar-input") {
        inputElement.placeholder = "$ 0,00"
        currencyNameInput.innerHTML = "Dólar Americano"
        currencyImgInput.src = "./assets/Dolar.png"
    }

    if (currencySelectInput.value === "euro-input") {
        inputElement.placeholder = "€ 0,00"
        currencyNameInput.innerHTML = "Euro"
        currencyImgInput.src = "./assets/Euro.png"
    }

    if (currencySelectInput.value === "libra-input") {
        inputElement.placeholder = "£ 0,00"
        currencyNameInput.innerHTML = "Libra Esterlina"
        currencyImgInput.src = "./assets/Libra.png"
    }

    if (currencySelectInput.value === "bitcoin-input") {
        inputElement.placeholder = "BTC 0,00"
        currencyNameInput.innerHTML = "Bitcoin"
        currencyImgInput.src = "./assets/Bitcoin.png"
    }
}

currencySelectInput.addEventListener("change", changePlaceholder)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)