const words = ["shoe", "ballondor", "to", "Messi", "goat"];
const words1 = ["Najib", "Lighthouse", "coding", "ahahah"];


const map = function(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}
const results1 = map(words, word => word[0]);
const results2 = map(words1, word => word[0]);
console.log('item BEFORE: ');
console.log('item AFTER: ');
console.log('---');
