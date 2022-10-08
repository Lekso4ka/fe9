console.log("JavaScript is working!");
// Жизненный цикл
// Дыхательный цикл (бесконечный цикл);
// Рабочий цикл
// Ежедневная рутина

let age = 0;
while (age < 18) {
    // console.log(age + "лет", "нельзя работать!")
    age++; // age = age + 1
}
console.log(`Вам ${age} лет - пора устраиваться на работу!`);

/*
    Когда родился малыш, родители заранее купили упаковку свечей на торт.
    В упаковке было 400 свечек.
    Сколько дней рождения отпразднует малыш с этой упаковки?

    1 => 399
    2 => 397
    3 => 394
    4 => 390
    5 => 385

    n??? => 0
*/
let babyAge = 0, candles = 400;

// while (true) {
//     candles -= ++babyAge;
//     if (candles < 0) {
//         break;
//     }
// }

while (candles > babyAge) {
    babyAge++;
    candles -= babyAge; // candles = candles - age
    // console.log(babyAge, candles);
}
console.log(`В ${babyAge} лет останется ${candles} свечки`);

/*
    q.5.1
*/

let start = 0, end = 50;
let sum = 0;
/*
    Если считается сумма, то изначальная переменная = 0
    Если считается произведение, то изначальная переменная = 1
    Если считается наполнение строки, то изначальная переменная = ""
*/

while (start <= end) {
    // console.log(start);
    if (start % 5 === 0) {
        // console.log(start);
        sum += start;
    }
    start++;
    // console.log(sum);
}
console.log("Результат", sum);

sum = 1000;

// for (выражение1; выражение2; выражение3) {}
/*
    выражение2 - условие (true/false)
    выражение3 выполняется после выполнения блока кода
    выражение1 выполняется перед условием цикла всего один раз.
*/

// v2

for (start = 0, sum = 0; start <= end; start++) {
    if (start % 5 === 0) {
        sum += start;
    }
}
console.log("Результат", sum);

/*
    q 5.2
*/
let word = "Кузнечик"; // word.length = 8, word[0] = "К", word[8] = undefined, word[7] = "к"

// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
// }

// folder => index.html ===>>>> ../folder/page.html ===>>>> page.html
// folder => page.html

let reverse = "";

for (let i = word.length - 1; i >= 0; i--) {
    // console.log(word[i]);
    reverse += word[i];
    // console.log(reverse);
}
console.log(reverse);

/*
    q 5.3
*/

/*
    кабак
    довод
    доход
    лол
    радар
    кек
*/

word = "Кабан";
reverse = "";

for (let i = word.length - 1; i >= 0; i--) {
    // console.log(word[i]);
    reverse += word[i];
    // console.log(reverse);
}
// А роза упала на лапу Азора;

if (reverse.toLowerCase() === word.toLowerCase()) {
    console.log("Слово является палиндромом!");
} else {
    console.log("Слово не является палиндромом!");
}
console.log(reverse);

// v2

/*
    доход

*/
let half = Math.floor(word.length / 2);
console.log(half);
let isPalindrom = true;

for (let i = 0; i < half; i++) {
    if (word[i].toLowerCase() === word[word.length - 1 - i].toLowerCase()) {
        continue;
    } else {
        isPalindrom = false;
        break;
    }
}
console.log(isPalindrom ? "Слово является палиндромом!" : "Слово не является палиндромом!")

