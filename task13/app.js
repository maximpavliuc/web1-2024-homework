let styles = ["Джаз", "Блюз"];

console.log(styles.join(", "));

styles.push("Рок-н-ролл");
console.log(styles.join(", "));

const middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Классика";
console.log(styles.join(", "));

const firstElement = styles.shift();
console.log("Удаленный первый элемент массива:", firstElement);
console.log(styles.join(", "));

styles.unshift("Рэп", "Регги");
console.log(styles.join(", "));
