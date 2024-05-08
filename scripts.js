const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Validation & errors

  // Empty inputs validation
  if (dividend.trim() === "" || divider.trim() === "") {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
    // Dividing by 0 error
  } else if (divider == 0) {
    result.innerText =
      "Division not performed. Invalid number provided. Try again";
    console.error("Error: Division by zero");
    // NaN error
  } else if (isNaN(dividend) || isNaN(divider)) {
    result.classList.add("critical-error");
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Error: Invalid inputs. Enter valid numbers.");
    // Results displayed as whole number
  } else {
    result.innerText = Math.floor(dividend / divider);
  }
});
