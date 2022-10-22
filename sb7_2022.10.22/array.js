/*
    2.3
    2.5
    2.7
    2.13

    2.10
    2.11
    2.15
*/

// Теория про map
const customSelection = [
    {viewed: false, title: "Мэри и Макс", durationInMinutes: 92},
    {viewed: false, title: "Мэнди", durationInMinutes: 108}
  ];
const newCustomSelection = customSelection.map(e => {
    e.viewed = true;
    return e;
})
console.log(newCustomSelection); 


/*
    q 2.3
*/
let layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>";
let digits = layout.match(/\d+/g);
if (!digits) {
    digits = [];
}
// console.log(digits);

// digits.forEach(function(el, i) {
//     if (el % 2 === 0) {
//         digits[i] = el ** 2;
//     } else {
//         digits[i] = +el;
//     }
// });

digits = digits.map(function(el) {
    return el % 2 === 0 ? el ** 2 : +el; 
})

console.log(digits);

/*
    q 2.5
*/

let values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"];

let start = values.findIndex(function(el) {
    if (typeof el === "boolean") {
        return el;
    }
});

let end = values.findLastIndex(el => typeof el === "boolean");

console.log(values.slice(start, end + 1));

/*
    q 2.7
*/

values = [10, 185, 11200, 980];
index = values.findIndex(el => (el + "").length === 4);
console.log(index >= 0 ? index : "Искомый элемент не был найден");

/*
    q 2.13
*/

let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140.";
if (tickets[tickets.length - 1] === ".") {
    tickets = tickets.slice(0, tickets.length - 1);
}
tickets = tickets.split(".");
tickets = tickets.map(str => {
    str = str.trim();
    str = str.split(": ");
    str[1] = str[1].split(", ");
    return str;
});

let obj = {};
for (el of tickets) {
    obj[el[0].toLowerCase()] = el[1]; 
}

console.log(obj);

// v2

tickets = "Train: . Airplane: .";
tickets = tickets.split(".");
tickets.pop();
// console.log(tickets);
tickets = tickets.map(str => {
    str = str.trim();
    str = str.split(": ");
    if (str[1]) {
        str[1] = str[1].split(", ");
    } else {
        str[1] = [""];
    }
    return str;
});

obj = {};
for (el of tickets) {
    obj[el[0].toLowerCase()] = el[1]; 
}
console.log(obj);

/*
    q 2.10
*/

let randValues = ["Банан", 3, "Апельсин", 2, "Вишня"];
randValues.sort();
console.log(randValues);
// randValues.sort(function(a, b) {
//     return b - a;
// })
randValues.sort((a,b) => a - b);
console.log(randValues);


/*
    q 2.11
*/
function getPalindrom(w) {
    let half = Math.floor(w.length / 2);
    let isPalindrom = true;
    for (let i = 0; i < half; i++) {
        if (w[i].toLowerCase() === w[w.length - 1 - i].toLowerCase()) {
            continue;
        } else {
            isPalindrom = false;
            break;
        }
    }
    return isPalindrom;
}
words = ["Заказ", "Такси", "Доход"]; 
result = [0, 0];
for (let w of words) {
    if (getPalindrom(w)) {
        result[0]++;
    } else {
        result[1]++;
    }
}
console.log(result);

/*
    q 2.15
*/

values = ["100", "30", "Не число", "20", "Тоже не число"];

let n = values.reduce(function(acc, el){
    let n = parseFloat(el);
    if (!isNaN(n)) {
        acc += n;
    }
    return acc;
}, 0);


console.log(n);

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array