let num1 = 5;
let num2 = -2;
let num3 = 8;
let positiveCount = 0;
let negativeCount = 0;

if (num1 > 0) {
    positiveCount++;
} else if (num1 < 0) {
    negativeCount++;
}

if (num2 > 0) {
    positiveCount++;
} else if (num2 < 0) {
    negativeCount++;
}

if (num3 > 0) {
    positiveCount++;
} else if (num3 < 0) {
    negativeCount++;
}

console.log("Количество положительных чисел:", positiveCount);
console.log("Количество отрицательных чисел:" ,negativeCount);
