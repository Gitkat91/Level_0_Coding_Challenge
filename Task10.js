function returnCommon(string1, string2) {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  let results = " ";
  for (let i of string1) {
    for (let n of string2) {
      if (n === i) {
        results = results + n + ",";
      }
    }
  }

  results = results.substring(0, results.length - 1);
  return results;
}

console.log("Common letters:" + returnCommon("house", "Computers"));
