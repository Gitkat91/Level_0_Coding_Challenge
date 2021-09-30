
    function getVowel(str) 

{
    var vowel = 'AEIOUaeiou'
    var vowelsString = "";
    
    
     for(var i = 0; i < str.length ; i++)
      {
        if (vowel.indexOf(str[i]) !== -1)
        {
     vowelsString =  vowelsString  + str[i] +","
        }
        
       
      }
   return vowelsString
    } 
    
    
    console.log("Vowels:  " + getVowel("katlego"))
    
