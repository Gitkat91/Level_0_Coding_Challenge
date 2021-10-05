function maximum(numb1, numb2, numb3) {
  high = numb1;
  for (var x = 0; x < arguments.length; x++) {
    if (arguments[x] > high) {
      high = arguments[x];
    }
  }
  return high;
}

console.log(maximum(16, 12, 33, 899, 87, 1));
