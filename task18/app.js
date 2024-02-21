const colors = ["red", "green", "blue"];

function checkColor(color) {
    const position = colors.indexOf(color);
    return position;
}

console.log(checkColor("red"));     
console.log(checkColor("green"));   
console.log(checkColor("blue"));    

console.log(checkColor("yellow"));  
console.log(checkColor("orange"));  
