const assertEqual = function(actual, expected) {
if ( actual === expected ) {
    console.log ("Assertion Passed:");
}
else {
    console.log ("Assertion Failed");
}
};

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual("Najib", "Najib") 
assertEqual(23, 43)
assertEqual("Chelsea", "Hazard")
assertEqual(2021, 2021)