function getVowel(str) 

{
    var vowel = 'AEIOUaeiou'
    var vowelsString;
    
    
     for(var i = 0; i < str.length ; i++)
      {
        if (vowel.indexOf(str[i]) !== -1)
        {
       console.log(str[i])
        }
      }
    
    } 
    
    console.log("vowels")
    getVowel("Katlego")
    