// Select Elements
let ourSkillsSec = document.querySelector(".our-skills");
let skillProgress = document.querySelectorAll(".skill .progress span");
let daysSpan = document.querySelector(".events .unit .days");
let hoursSpan = document.querySelector(".events .unit .hours");
let minutesSpan = document.querySelector(".events .unit .minutes");
let secondsSpan = document.querySelector(".events .unit .seconds");
let statsSec = document.querySelector(".stats");
let statsNums = document.querySelectorAll(".stats .box .number");

// Options
let started = false;

window.onscroll = function () {
  // Animate Skill Width On Scrolling
  if (window.scrollY >= ourSkillsSec.offsetTop - 70) {
    skillProgress.forEach(
      (skill) => (skill.style.width = skill.dataset.progress)
    );
  }

  if (window.scrollY >= statsSec.offsetTop - 300) {
    if (!started) {
      statsNums.forEach((num) => statsAnimation(num));
    }
    started = true;
  }
};

// Event Countdown
let eventDate = new Date("Dec 31, 2024 23:59:59").getTime();

const countdown = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateRemain = eventDate - dateNow;

  // Time Units
  let days = Math.floor(dateRemain / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (dateRemain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((dateRemain % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateRemain % (1000 * 60)) / 1000);

  daysSpan.innerHTML = days < 10 ? `0${days}` : days;
  hoursSpan.innerHTML = hours < 10 ? `0${hours}` : hours;
  minutesSpan.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  secondsSpan.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateRemain <= 0) {
    clearInterval(countdown);
    daysSpan.innerHTML = "00";
    hoursSpan.innerHTML = "00";
    minutesSpan.innerHTML = "00";
    secondsSpan.innerHTML = "00";
  }
}, 1000);

// Stats Numbers Animation
function statsAnimation(num) {
  let duration = 2500;
  let statgoal = num.dataset.stat;

  const statsCounter = setInterval(() => {
    num.textContent++;
    if (num.textContent == statgoal) clearInterval(statsCounter);
  }, duration / statgoal);
}
