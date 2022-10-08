// f(x) = x^2

function breathe() {
    console.log("Вдох");
    console.log("Выдох");
}

// let breathe = 0;

let n = 10;
while(true) {
    // breathe();
    if (--n === 0) {
        break;
    }
}

breathe();

/*
    q 6.3
*/
let num = 30;
function f(num = 0) {
    // let num = 5;
    console.log(num ** 2);
}

// for (let x = -10; x <= 10; x++) {
//     console.log(x);
//     f(x);
// }


f(num);

/*
    q 6.2
*/
let num_1 = 4, num_2 = 8;

function mult(a = 1, b = 1) {
    return a * b;
}

let result = mult(num_1, num_2); // 32
console.log(result);

mult(2,6);
console.log(mult(2,6))
/*
    Парадигмы программирования:
        Полиморфизм - переиспользование
        Инкапсуляция - код не делает ничего без программиста
        Наследование
*/

console.log(`Произведение ${num_1} на ${num_2} = ${result}`);

function getRandom(max = 11, min = 0) {
    let n = Math.random() * (max - min) + min;
    // n = Math.round(n); // min <= x <= max
    n = Math.floor(n); // min <= x < max;
    // n = Math.ceil(n); // min < x <= max;
    return n;
}

console.log(getRandom(3, 1));

let a = getRandom();
let b = getRandom(100);
console.log(`${a}x${b}=${mult(a,b)}`);

/*
    q 6.6
*/

let value = 4, total = 80;
function getPercent(v, t) {
    /*
        v = x
        t = 100
    */
    return (v * 100) / t;
}
console.log(getPercent(value, total));