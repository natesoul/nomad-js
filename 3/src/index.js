// import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.

  const date = new Date("2020-03-31:10:30:00+0900");
  
  const xmasDay = new Date("2020-01-31:16:33:00+0900");

  const dday = date.getTime() - xmasDay.getTime();

  const seconds = dday / 1000;
  const minutes = seconds / 60; 
  const hours = minutes / 60;
  const days = hours / 24;
  const dayss = int(days);
  // const hourss = dayss * 
}






function init() {
  getTime();
}

init();

console.log(dday);
console.log(seconds);
console.log(minutes);
console.log(hours);
console.log(days);
console.log(dayss);