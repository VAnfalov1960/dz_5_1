// Импортируем 2 функции из файла src/datecalc.js
import { diffDates, diffToHtml } from "./datecalc.js";

// Импортируем функцию из файла src/utils.js
import { formatError } from "./utils.js";

// Получаем нужные нам DOM-элементы
const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

// Устанавливаем обработчик формы
dateCalcForm.addEventListener("submit", handleCalcDates);
function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();

  let { firstDate, secondDate } = event.target.elements;

  (firstDate = firstDate.value), (secondDate = secondDate.value);

  if (firstDate && secondDate) {
    // Вычитаем промежуток между датами
    const diff = diffDates(firstDate, secondDate);

    // Форматируем промежуток, как html и вставляем в DOM.
    dateCalcResult.innerHTML = diffToHtml(diff);
  }

  // Если одно из полей не заполнено (или оба), выводим ошибку.
  else
    dateCalcResult.innerHTML = formatError(
      "Для расчета промежутка необходимо заполнить оба поля"
    );
}
