let Fahrenhei;
let Celsius;

function tempFahrenhei(temp) {
  Fahrenhei = (temp * 9) / 5 + 32;

  return temp + " C  is " + Fahrenhei + " F";
}

console.log(tempFahrenhei(80));

function tempCelsius(temp) {
  Celsius = ((temp - 32) * 5) / 9;

  return temp + " F  is " + Celsius + " C";
}

console.log(tempCelsius(50));
