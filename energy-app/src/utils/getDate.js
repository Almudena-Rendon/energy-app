// Fecha actual

const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1; // los meses en JavaScript son de 0 a 11
let year = today.getFullYear();

if (day < 10) {
  day = "0" + day;
}

if (month < 10) {
  month = "0" + month;
}

const currentDate = `${year}-${month}-${day}`;

export { currentDate };

// Fecha de hace un año

export function subtractOneYear(date) {
  const newDate = new Date(date);
  newDate.setFullYear(date.getFullYear() - 1);
  return newDate;
}
