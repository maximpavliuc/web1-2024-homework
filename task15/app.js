function convert(fn, array) {
    return array.map(fn);
}

function square(x) { return x * x; }

let inputArray = [1, 2, 3, 4];

let result = convert(square, inputArray);
console.log(result); 
console.log(inputArray);  
