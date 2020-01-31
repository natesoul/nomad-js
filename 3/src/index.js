// import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");

function getTime() {
  // Don't delete this.
  const date = new Date();
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  
  const dday = xmasDay - date;

  const seconds = dday / 1000;
  const realSeconds = parseInt(((seconds/60) - parseInt(seconds/60))*60);
  const minutes = seconds / 60; 
  const realMinutes = parseInt(((minutes/60) - parseInt(minutes/60))*60);
  const hours = minutes / 60;
  const realHours = parseInt(((hours/24) - parseInt(hours/24))*24);
  const days = hours / 24;
  const realDays = parseInt(dday / (60*60*24*1000));

  clockTitle.innerText = `${realDays}d ${realHours < 10 ? `0${realHours}` : realHours}h ${realMinutes < 10 ? `0${realMinutes}` : realMinutes}m ${realSeconds < 10 ? `0${realSeconds}` : realSeconds}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();



// console.log(dayss);