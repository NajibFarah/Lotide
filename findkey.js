const findKey = function(Obj1, callback) {
    let result = [];
    for (const item in Obj1) {
      if (callback(Obj1[item])) {
        result.push(item);
        console.log(result);
        return String(result[0]);
      }
        }
        return result[0];
      };

findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 3) //Alkaleri