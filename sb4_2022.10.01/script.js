/**
 * ctrl + shift + i
 * cmd + alt + i
 */


/*
    let Переменная (name, age, profession)
    const Константа (постоянная) (PI, FLOORCNT)

    cnt / count - количество (quantity)

    var (для матерых программистов старого поколения - нужна когда нужна =) )
*/
"127.0.0.1" // String (строка)

let name = 'Aleksandra';
name = "Leksa";
/*
    '' - пустая строка
    " " - не пустая строка
    `` - апострофы / ё-кавычки / кайфовые
*/
let number = 1;
console.log(name + number + 10);
console.log(name + "'s favorite number - " + number); // конкатенация - склеивание строк при помощи символа сложения

// Любимое число Лексы - 0
/*
    2 + "2"
    => '22'
    2 + "2" + 3 + 4 + 5
    => '22345'
    2 + "2" + 3 + 4 + 5 * 2
    => '223410'
    (2 + "2" + 3 + 4 + 5) * 2
    => 44690
    (2 + "2" + 3 + 4 + 5) * 2 + 2
    => 44692
    "2" - 1
    => 1
    2 + +"2" + 3 + 4 + 5 * 2
    => 21
    +1
    => 1
    -1
    => -1
    "1"
    => '1'
    +"1"
    => 1
    -"1"
    => -1
    "1" * 1
    => 1
    "1" / 1
    => 1
*/

// Дано число от 0 до 100 (случайное число). Если число четное - выведите занчение числа и что оно четно "2 - четное". Иначе напишите что число не четное "5 - не четное"
let n, result; // объявление переменных
n = 6; // инициализация переменной (сохранение значения в переменную)
const PI = 3.14;
result = "четное число";
console.log(n, result);

/*
    q 3.2
*/

name = "   Всеволод  ";
let last_name = "\nСтарозубов";
// name = name.trim();
// last_name = last_name.trim();

// console.log(name.length + last_name.length);

console.log(name.trim().length + last_name.trim().length);


// 1,2,3,4,5,6,7,8,9,10
// 00,01,02,03,04,05,06,07,08,09
// 10,11,12,13,14,15,16,17,18,19

// 0 - 255 => 256
/*
    q 3.1
*/
let word = "велик";
console.log(word);
console.log(word.charAt(0));
console.log(word[0]); // первый символ строки
console.log(word[word.length - 1]); // последний символ строки

console.log(word[0].toUpperCase()); // все символы большие

/*
    q 3.3
*/

let word_1 = "велосипед",
    word_2 = "полезен";

console.log(word_1 + " " + word_2); // конкатенация
console.log(`Мой ${word_1} - мне ${word_2}!`); 
console.log(`Я ем ${n + 2} бананов в день`);

console.log(`${word_1} ${word_2}`); // интерполяция

// https://developer.mozilla.org/ru/
// https://metanit.com/web/javascript/

/*
    q 3.5
*/

let obj = {
    name: "Анатолий", 
    last_name: "Максимов", 
    age: 32
}

console.log('Имя: "' + obj.name + '" Фамилия: \''+ obj.last_name + "' Возраст: " + obj.age);

console.log(`Имя: "${obj.name}" Фамилия: '${obj.last_name}' Возраст: ${obj.age}`);

console.log('Имя: "'+ obj.name+'" ' + 'Фамилия: \''+ obj.last_name+'\' ' + 'Возраст: ' + obj.age);

/*
    q 3.7
*/

let value = "";
console.log(typeof value); // object, string, number, undefined, boolean, null => object

// v1
result = value === null ? "null" : typeof value;
console.log(result);

// v2
if (value === null) {
    result = "null";
} else {
    result = typeof value;
}
console.log(result);


/*
    q 3.8
*/
let num_1 = "3",
    num_2 = "5";
console.log(+num_1 + +num_2);

/*
    q 3.9
*/

let size = "500.5%";
console.log(parseInt(size));
console.log(parseFloat(size));

/*
    q 3.10
*/

let a = 2, b = 4;
console.log((a * b) ** 2);

/*
    q 3.11 авторская от Лексы =)
*/

const A = {
    x: 5,
    y: 8
}
const B = {
    x: -2,
    y: 4
}

let x = Math.abs(A.x - B.x); // Число по модулю
let y = Math.abs(A.y - B.y); // Число по модулю

let length = Math.sqrt(x ** 2 + y ** 2);
length = (x ** 2 + y ** 2) ** (1/2);
length = +length.toFixed(2);

console.log(length);

/*
    q 3.12
*/

a = "5px", b = "7px";
let c = "10px";
// a = parseFloat(a);
// b = parseFloat(b);
// c = parseFloat(c);
// console.log(a * b * c)

console.log(parseFloat(a) * parseFloat(b) * parseFloat(c));

/*
     q 4.2
*/

let price = "12 рублей";
price = parseInt(price);

// if (price <= 0) {
//     console.log("Число не корректное");
// } else if (price > 0) {
//     console.log(price);
// } else {
//     console.log("Не число");
// }
if (isNaN(price)) {
    console.log("Не число");
} else if (price <= 0) {
    console.log("Число не корректное");
} else {
    console.log(price);
}

"слон" / 3 // => NaN
"попугай" * 2 // =< NaN

// NaN === NaN

// Number.isNaN()
// .isNaN()

/*
    q 4.8-4.9
*/
a = 2, b = 0, sign = "/";

switch(sign) { // if (sign === "+")
    case "+": console.log(a + b); break;
    case "-": console.log(a - b); break;
    case "*": console.log(a * b); break;
    case "/": 
        if (b === 0) {
            console.log("Делить на 0 нельзя!");
        } else {
            console.log(a / b); 
        }
        break;
}