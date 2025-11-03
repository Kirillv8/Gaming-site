import { sendValue } from "./sendValue.js";

export const validationForm = (input, form) => {
  form.addEventListener("submit", (event) => {
    const inputValue = input.value;

    if (!inputValue.includes("@")) {
      event.preventDefault();
      alert("Вы не указали символ - @");
      return;
    }
    if (!inputValue.includes(".")) {
      event.preventDefault();
      alert("Вы не указали символ - .");
      return;
    }
    if (!inputValue) {
      event.preventDefault();
      alert("Укажите вашу электронную почту");
      return;
    }
    if (inputValue) {
      sendValue();
    }
  });
};
