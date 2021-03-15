let timer;
let x = 5; // взять из формы

function countdown() {
  document.getElementById("result_countdown_timer").innerHTML = x;
  x--; // уменьшаем число на единицу
  if (x < 0) {
    clearTimeout(timer); // таймер остановится на нуле
    snd.play(); // вызываем звуковой сигнал
  } else {
    timer = setTimeout(countdown, 1000);
  }
}
