const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Validation

  // Empty inputs
  if (dividend.trim() === "" || divider.trim() === "") {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
    // Dividing by 0
  } else if (divider == 0) {
    result.innerText =
      "Division not performed. Invalid number provided. Try again";
    console.error("Error: Division by zero");
    // Results displayed as whole number
  } else {
    result.innerText = Math.floor(dividend / divider);
  }
});
