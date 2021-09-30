
var high = 0
function checkCommon(str1,str2) 



{
    length1  = str1.length
    length2  = str2.length
    
    if(length1 > length2)
    {
      
      high = length1
      
    }
    else
    {
      high = length2
      
    }
   
   for(var x = ; x < high ; x++)
    {
      
      if(str1[x] ==str2[x] )
      {
        
        console.log([x])
    
        
      }
      
    }
    
  
    
    } 
    
    checkCommon("Katlego","Kat")
   