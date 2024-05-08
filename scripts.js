const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
let isError = false;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Validation & errors

  // Empty inputs validation
  if (dividend.trim() === "" || divider.trim() === "") {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
    isError = true;
    // Dividing by 0 error
  } else if (divider == 0) {
    try {
      throw new Error("Division by zero");
    } catch (error) {
      result.innerText =
        "Division not performed. Invalid number provided. Try again.";
      console.error(error);
      isError = true;
    }
    // NaN error
  } else {
    try {
      if (isNaN(dividend) || isNaN(divider)) {
        throw new Error("Invalid inputs. Enter valid numbers.");
      } else {
        result.innerText = Math.floor(dividend / divider);
        isError = false; // False when input is valid
      }
    } catch (error) {
      result.classList.add("critical-error");
      result.innerText =
        "Something critical went wrong. Please reload the page";
      console.error(error);
    }
  }

  // Add / remove error-message class styling for errors
  if (isError) {
    result.classList.add("error-message");
  } else {
    result.classList.remove("error-message");
  }
});
