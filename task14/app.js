function sumInputNumbers() {
    let numbers = [];
    
    while (true) {
        let userInput = prompt("Введите число:");

        if (userInput === null || userInput.trim() === "") {
            break;
        }
        let number = parseFloat(userInput);

        if (!isNaN(number)) {
            numbers.push(number);
        } else {
            break;
        }
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

let result = sumInputNumbers();
console.log("Сумма введенных чисел:", result);
