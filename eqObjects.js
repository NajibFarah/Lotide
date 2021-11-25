const assertEqual = function(actual, expected) {
    if ( actual === expected ) {
        console.log ("Assertion Passed:");
    }
    else {
        console.log ("Assertion Failed");
    }
    };

const eqArrays = function(array1, array2) {
      for (let i in array1) {
            console.log ("Array1", array1[i])
           console.log ("Array2", array2[i])
            if (array1[i]!==array2[i]) {
                return false
            }
        }
    return true
   }    
const eqObjects = function(object1, object2) {
    const object1Keys = Object.keys(object1);
    const object2Keys = Object.keys(object2);
    
    if (object1Keys.length === object2Keys.length) {
      for (const key of object1Keys) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          return (eqArrays(object1[key],object2[key]));
        } else {
          if (object1[key] !== object2[key]) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  };
  
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false