function getRandom (max = 100, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

let quantity = 100000000;
let numbers = [];
while(quantity--) { // Потому что цикл завершится когда число === 0 (false)
    numbers.push(getRandom(101, 1));
}
console.log(numbers);


console.time("for"); // Точка начала отсчета времени
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    sum += numbers[i]; // sum = sum + numbers[i]
    // console.log(sum);
}
console.log(sum);
console.timeEnd("for"); // Точка окончания отсчета времени

// console.time("for in");
// sum = 0;
// for (let i in numbers) {
//     sum += numbers[i];
// }
// console.log(sum);
// console.timeEnd("for in");

console.time("for of");
sum = 0;
for (let val of numbers) {
    sum += val; // numbers[i]
}
console.log(sum);
console.timeEnd("for of");

console.time("forEach");
sum = 0;
numbers.forEach(function(el, i) { // el => numbers[i]
    // console.log(`Элемент ${i} - ${el}`);
    sum += el;
});
console.log(sum);
console.timeEnd("forEach");



// [1,2,3,4,5] => {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}