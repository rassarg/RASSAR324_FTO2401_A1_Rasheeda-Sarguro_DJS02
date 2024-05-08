const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Validation for empty inputs
  if (dividend.trim() === "" || divider.trim() === "") {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
  } else {
    // Whole number result
    result.innerText = Math.floor(dividend / divider);
  }
});
