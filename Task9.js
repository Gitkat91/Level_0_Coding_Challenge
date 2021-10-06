function getVowel(strName) {
  const vowel = "aeiou";
  let vowelsString = "";
  strName = strName.replace(/\s+/g, "");

  for (var i = 0; i < strName.length; i++) {
    lwcStrName = strName[i].toLowerCase();

    if (vowel.indexOf(lwcStrName) !== -1) {
      if (!vowelsString.includes(lwcStrName)) {
        vowelsString = vowelsString + lwcStrName + ",";
      }
    }
  }

  vowelsString = vowelsString.substring(0, strName.length - 2);

  return vowelsString;
}

console.log("Vowels: " + getVowel("Umuzi"));
