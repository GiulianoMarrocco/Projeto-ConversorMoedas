const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectInput = document.querySelector(".currency-select-input");
const inputElement = document.querySelector(".input-currency");
const currencyNameInput = document.getElementById("currency-name-input");
const currencyImgInput = document.querySelector(".currency-img-input");

// Configurações de cada moeda: label, imagem, locale, símbolo ISO, placeholder
const currencyConfig = {
  real:    { name: "Real",            img: "./assets/Real.png",    locale: "pt-BR", iso: "BRL", placeholder: "R$ 0,00"  },
  dolar:   { name: "Dólar Americano", img: "./assets/Dolar.png",   locale: "en-US", iso: "USD", placeholder: "$ 0,00"   },
  euro:    { name: "Euro",            img: "./assets/Euro.png",    locale: "de-DE", iso: "EUR", placeholder: "€ 0,00"   },
  libra:   { name: "Libra Esterlina", img: "./assets/Libra.png",   locale: "en-GB", iso: "GBP", placeholder: "£ 0,00"   },
  bitcoin: { name: "Bitcoin",         img: "./assets/Bitcoin.png", locale: "pt-BR", iso: "BTC", placeholder: "BTC 0,00" },
};

// Mapeia os values do select de origem para as mesmas chaves do objeto acima
const inputValueMap = {
  "real-input":    "real",
  "dolar-input":   "dolar",
  "euro-input":    "euro",
  "libra-input":   "libra",
  "bitcoin-input": "bitcoin",
};

async function getQuotes() {
  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL")
    .then(r => r.json());

  return {
    real:    1,                      // BRL é a base da API
    dolar:   parseFloat(data.USDBRL.high),
    euro:    parseFloat(data.EURBRL.high),
    libra:   parseFloat(data.GBPBRL.high),
    bitcoin: parseFloat(data.BTCBRL.high),
  };
}

async function convertValues() {
  const amount = parseFloat(document.querySelector(".input-currency").value);
  if (isNaN(amount)) return;

  const originKey = inputValueMap[currencySelectInput.value];
  const destKey   = currencySelect.value;

  const quotes = await getQuotes();

  // Origem → BRL → Destino
  const amountInBRL  = amount * quotes[originKey];
  const amountInDest = amountInBRL / quotes[destKey];

  const destConfig   = currencyConfig[destKey];
  const originConfig = currencyConfig[originKey];

  // Exibe o valor de origem
  document.querySelector(".currency-value-to-convert").innerHTML =
    new Intl.NumberFormat(originConfig.locale, {
      style: "currency",
      currency: originConfig.iso,
    }).format(amount);

  // Exibe o valor convertido
  document.querySelector(".currency-value").innerHTML =
    new Intl.NumberFormat(destConfig.locale, {
      style: "currency",
      currency: destConfig.iso,
    }).format(amountInDest);
}

function updateOriginUI() {
  const key = inputValueMap[currencySelectInput.value];
  const config = currencyConfig[key];
  inputElement.placeholder    = config.placeholder;
  currencyNameInput.innerHTML = config.name;
  currencyImgInput.src        = config.img;
}

function updateDestUI() {
  const key = currencySelect.value;
  const config = currencyConfig[key];
  document.getElementById("currency-name").innerHTML    = config.name;
  document.querySelector(".currency-img").src           = config.img;
}

function onOriginChange() {
  updateOriginUI();
  convertValues();
}

function onDestChange() {
  updateDestUI();
  convertValues();
}

currencySelectInput.addEventListener("change", onOriginChange);
currencySelect.addEventListener("change", onDestChange);
convertButton.addEventListener("click", convertValues);