const day = document.querySelector("#day");
const hours = document.querySelector("#hours");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

const limitDate = new Date(2023, 5, 22, 09, 30, 0); //8juin 2023 17h00
const limittimeInMs = limitDate.getTime();

function time() {
  const date = new Date();
  const timeInMs = date.getTime();
  const timer = (limittimeInMs - timeInMs) / 1000;
  const sectime = timer % 60;
  const mintime = (timer / 60) % 60;
  const hourstime = (timer / 3600) % 24;
  const daytime = timer / 3600 / 24;

  day.textContent = format(Math.floor(daytime));
  hours.textContent = format(Math.floor(hourstime));
  min.textContent = format(Math.floor(mintime));
  sec.textContent = format(Math.floor(sectime));

  if (timer < 0) {
    clearInterval(timerId);
    timer.innerHTML = `<h4> OFFRE EXPIREE </H4>`;
  }
}
time();
const timerId = setInterval(time, 1000);

function format(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
