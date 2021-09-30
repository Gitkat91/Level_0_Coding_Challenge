function returnCommon(string1 , string2)
{
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

 console.log("Common letters:" + returnCommon("house" , "Computer"))


   
