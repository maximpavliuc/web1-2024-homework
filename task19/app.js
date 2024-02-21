function filter(arr) {
    return arr.filter(item => typeof item === "number" && !isNaN(item) && item >= 1 && item <= 9);
}

const array = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];
const filteredArray = filter(array);
console.log(filteredArray); 

