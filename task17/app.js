function extract(start, end) {
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    if (start < 0 || end >= originalArray.length || start > end) {
        return "Неверные позиции";
    }

    const extractedArray = originalArray.slice(start, end + 1);
    
    return extractedArray;
}


console.log(extract(2, 4)); 
