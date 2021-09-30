
  var hours
  var minutes

function time(temp) 
{
  
hours = Math.floor(temp / 60)
minutes = temp % 60
  
  return hours + " hour, " +  minutes +" minutes"; 
}

console.log(time(123))