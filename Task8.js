let hours;
let minutes;
let hoursMessage;
let minutesMessage;

function time(temp) {
  hours = Math.floor(temp / 60);
  minutes = temp % 60;

  if (hours >= 2) {
    hoursMessage = " hours ";
  } else {
    hoursMessage = " hour ";
  }

  if (minutes >= 2) {
    minutesMessage = " minutes ";
  } else {
    minutesMessage = " minute ";
  }
  return hours + hoursMessage + minutes + minutesMessage;
}

console.log(time(71));
