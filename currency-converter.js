const calculateResult = (amount, currency) => {
    switch (currency) {
        case "EUR":
            return amount / 4.28;

        case "USD":
            return amount / 4.16;

        case "GBP":
            return amount / 5.15;
    }
};

const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");

    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(amount, result, currency);
};

const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
};

init();
