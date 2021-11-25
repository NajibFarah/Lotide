const assertEqual = function(actual, expected) {
    if ( actual === expected ) {
        console.log ("Assertion Passed:");
    }
    else {
        console.log ("Assertion Failed");
    }
    };

 const countLetters = function(letters) {
    let output = {};
    for (const value of letters) { 
        if (value in output) {
            output [value] +=1 
        }
        else {
            output [value] = 1  
        }
 } 
 return output 
 }

console.log(countLetters('LHL'));
console.log(countLetters('Chelsea FC'));
console.log(countLetters('Najib is having fun'));