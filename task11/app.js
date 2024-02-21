
const n = 5;
const array = Array.from({ length: n }, (_, index) => index + 1);


console.log("Способ 1: Цикл for");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("Способ 2: Цикл while");
let j = 0;
while (j < array.length) {
    console.log(array[j]);
    j++;
}

console.log("Способ 3: Цикл do ... while");
let k = 0;
do {
    console.log(array[k]);
    k++;
} while (k < array.length);

console.log("Способ 4: Цикл for in");
for (const index in array) {
    console.log(array[index]);
}

console.log("Способ 5: Цикл for of");
for (const element of array) {
    console.log(element);
}

console.log("Способ 6: Метод forEach");
array.forEach(element => console.log(element));

console.log("Способ 7: Метод map");
array.map(element => console.log(element));


