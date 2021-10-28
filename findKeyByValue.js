const assertEqual = function(actual, expected) {
    if ( actual === expected ) {
        console.log ("Assertion Passed:");
    }
    else {
        console.log ("Assertion Failed");
    }
    };
function findKeyByValue (objectToSearch, valueToSearchBy){
    let resultKey 
    for (const key in objectToSearch) {
        let value= objectToSearch[key]
        if (value===valueToSearchBy){
            resultKey=key
        }
        //console.log(`${key}: ${objectToSearch[key]}`);
      }
    return resultKey
}
const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine", 
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");