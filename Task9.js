function getVowel(str) {
  var vowel = "aeiou";
  var vowelsString = "";
  str = str.replace(/\s+/g, "");

  for (var i = 0; i < str.length; i++) {
    lwcstr = str[i].toLowerCase();

    if (vowel.indexOf(lwcstr) !== -1) {
      if (!vowelsString.includes(lwcstr)) {
        vowelsString = vowelsString + lwcstr + ",";
      }
    }
  }

  vowelsString = vowelsString.substring(0, str.length - 2);

  return vowelsString;
}

console.log("Vowels: " + getVowel("Umuzi") + ".");
