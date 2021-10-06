let strFahrenhei;
let strCelsius;

function tempFahrenhei(temp) {
  strFahrenhei = (temp * 9) / 5 + 32;

  return temp + " C  is " + strFahrenhei + " F";
}

console.log(tempFahrenhei(80));

function tempCelsius(temp) {
  strCelsius = ((temp - 32) * 5) / 9;

  return temp + " F  is " + strCelsius + " C";
}

console.log(tempCelsius(50));
