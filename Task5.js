function triangleArea(numb1, numb2, numb3) {
  let meter = 0;
  let area = 0;

  meter = (numb1 + numb2 + numb3) / 2;
  const semiPeri = meter;
  area = Math.sqrt(
    semiPeri * ((semiPeri - numb1) * (semiPeri - numb2) * (semiPeri - numb3))
  );

  return area;
}

console.log(triangleArea(2, 2, 3));
