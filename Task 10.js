function returnCommon(string1 , string2)
{
  string1  = string1.toLowerCase();
  string2  = string2.toLowerCase();
    let results = ' ';
    for (let i of string1){
        for(let n of string2){
            if( n === i){
                results = results + (n) +","; 
            }
        }
    }
    return results;
    
}

 console.log("Common letters:" + returnCommon("hOuse" , "Computer"))