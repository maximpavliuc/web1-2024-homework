const numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

// Функция для вывода чисел < 5
const lessThanFive = (arr) => {
    console.log("Числа < 5:");
    arr.forEach(num => {
        if (num < 5) {
            console.log(num);
        }
    });
}


const findMinMaxPositions = (arr) => {
    let max = arr[0];
    let min = arr[0];
    let maxPositions = [];
    let minPositions = [];
    
    arr.forEach((num, index) => {
        if (num > max) {
            max = num;
            maxPositions = [index];
        } else if (num === max) {
            maxPositions.push(index);
        }
        
        if (num < min) {
            min = num;
            minPositions = [index];
        } else if (num === min) {
            minPositions.push(index);
        }
    });
    
    console.log("Позиции элементов с максимальным значением:", maxPositions);
    console.log("Позиции элементов с минимальным значением:", minPositions);
}


const sortDescending = (arr) => {
    const sortedArray = arr.slice().sort((a, b) => b - a);
    console.log("Массив, отсортированный по убыванию:", sortedArray);
}

const greaterThanAverage = (arr) => {
    const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    console.log("Элементы массива, которые больше среднего арифметического:");
    arr.forEach(num => {
        if (num > average) {
            console.log(num);
        }
    });
}

lessThanFive(numbers);
findMinMaxPositions(numbers);
sortDescending(numbers);
greaterThanAverage(numbers);
