// Воспользуемся инструментарием luxon
// Загружаем локально сохранённый исходный код luxon
import { DateTime } from "./luxon.js"; // 1
export function diffDates(firstDate, secondDate) {
  firstDate = DateTime.fromISO(firstDate);
  secondDate = DateTime.fromISO(secondDate);

  // Меняем даты, если первая дата больше второй.
  //Это нужно,чтобы непоявились цифры с минусами.
  if (firstDate > secondDate)
    secondDate = [firstDate, (firstDate = secondDate)][0]; // 2
  return secondDate.diff(firstDate, ["years", "months", "days"]).toObject();
}
// 3 Функция diffToHtml форматирует объект как html.
// Она имеет вид стрелочки,чтобы показать разные варианты экспорта.
// Придерживаемся одинакового синтаксиса объявления функций в проекте.
export const diffToHtml = (diff) => `
  <span>
    ${diff.years ? "Лет: " + diff.years : ""}
    ${diff.months ? "Месяцев: " + diff.months : ""}
    ​${diff.days ? "Дней: " + diff.days : ""}
  </span>`;
