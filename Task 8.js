var hours
var minutes
var h 
var m

function time(temp) 
{
  
hours = Math.floor(temp / 60)
minutes = temp % 60
  
  if (hours >=2)
  {
    h = " hours "
    
  }
  else 
  {
    h = " hour "
    
  }
  
  if (minutes >=2)
  {
    m = " minutes "
    
  }
  else 
  {
    m = " minute "
    
  }
  return hours + h +  minutes + m; 
}

console.log(time(71))