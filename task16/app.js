const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const modifiedArray = originalArray.map((num, index) => {
    if (index >= 4 && index <= 6) {
        return 0;
    }
    return num;
});

console.log(modifiedArray); 
