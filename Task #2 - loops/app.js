let a = 5;
let b = 10;
let sum = 0;

for (let i = a; i <= b; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log("Сумма четных чисел в интервале [" + a + ", " + b + "]: " + sum);
