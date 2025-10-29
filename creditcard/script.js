const form = document.getElementById("creditCardForm");

isCardNumberValid = (number) => {
  return number === "1234123412341234";
};

function displayError(message) {
  document.querySelector(".errors").textContent = message;
}

function handleSubmit(event) {
  event.preventDefault();

  let errorMsg = "";

  const fullName = document.getElementById("fullName").value.trim();
  const cardNumber = document.getElementById("creditCardNumber").value.trim();
  const expMonth = parseInt(document.getElementById("month").value.trim(), 10);
  const expYear = parseInt(document.getElementById("year").value.trim(), 10);
  const currentDate = new Date();
  const securityCode = document.getElementById("cvv").value.trim();

  if (fullName === "") {
    errorMsg += "Full name is required.\n";
  }

  if (cardNumber === "") {
    errorMsg += "Card number is required.\n";
  } else if (!/^\d{16}$/.test(cardNumber)) {
    errorMsg += "Card number must be 16 digits.\n";
  } else if (!isCardNumberValid(cardNumber)) {
    errorMsg += "Card number is not valid.\n";
  }

  if (
    2000 + expYear < currentDate.getFullYear() ||
    (2000 + expYear === currentDate.getFullYear() &&
      expMonth <= currentDate.getMonth() + 1)
  ) {
    errorMsg += "Card is expired\n";
  }

  if (securityCode === "") {
    errorMsg += "CVV is required.\n";
  }

  if (errorMsg !== "") {
    displayError(errorMsg);
    return;
  }

  const formContainer = document.getElementById("creditCardForm");
  formContainer.innerHTML = "<h2>Thank you for your purchase.</h2>";
}

document
  .querySelector("#creditCardForm")
  .addEventListener("submit", handleSubmit);
