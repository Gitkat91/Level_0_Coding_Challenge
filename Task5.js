function triangleArea(numb1, numb2, numb3) {
  var meter = 0;
  var area = 0;

  meter = (numb1 + numb2 + numb3) / 2;
  area = Math.sqrt(
    meter * ((meter - numb1) * (meter - numb2) * (meter - numb3))
  );

  return area;
}

console.log(triangleArea(2, 2, 3));
