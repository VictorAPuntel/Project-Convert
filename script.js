//Cotação de moedas
const USD = 5.49;
const EUR = 6.32;
const GBP = 7.38;

const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

//Manipulando o input amount para receber sõmente numeros
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

//Função para converter o a moeda
function convertCurrency(amount, price, symbol) {
  try {
    //Atualiza a cotação da moeda selecionada
    description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`;
    const total = (amount * price).toFixed(2);
    if (!isNaN(total)) {
      result.textContent = `${formatCurrencyBRL(total).replace(
        "R$",
        ""
      )} Reais`;
    } else {
      return alert("Por favor, insira um valor válido.");
    }

    //Aplica a classe show-result ao footer
    footer.classList.add("show-result");
  } catch (error) {
    //Remover a classe show-result do footer em caso de erro
    footer.classList.remove("show-result");
    alert("Erro ao converter a moeda:", error);
  }
}

// Função para formatar o valor em moeda brasileira (BRL)
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// Capturando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault();
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};
