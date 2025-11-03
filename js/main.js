import { uiElements } from "./constants/constants.js";
import { validationForm } from "./validationForm.js";

document.addEventListener("DOMContentLoaded", () => {
  const input = uiElements.input;
  const form = uiElements.form;
  if (input && form) {
    validationForm(input, form);
  } else {
    alert("UI елементы не найдены");
  }
});
