function uniqueSorted(arr) {
    const uniqueArray = Array.from(new Set(arr));
    
    uniqueArray.sort((a, b) => a - b);
    
    return uniqueArray;
}

const array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];
const result = uniqueSorted(array);
console.log(result); 
