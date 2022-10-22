/*
    q 1.3
*/

const firstDiv = "<div><p>Первый заголовок<p>Второй заголовок</p></div>";

let start1 = firstDiv.indexOf("<p>");
let start2 = firstDiv.lastIndexOf("<p>");
let end1 = firstDiv.indexOf("</p>");
let end2 = firstDiv.lastIndexOf("</p>");

if (start1 !== start2 && end1 !== end2) {
    console.log(true);
}  else {
    console.log(false);
}

/*
    q 1.4
*/

let road = "15 km";
let result = +(parseFloat(road) * 0.62).toFixed(1);
console.log(result);

console.log(road.split(" "));
// v2
result = +(road.split(" ")[0] * 0.62).toFixed(1);
console.log(result);

/*
    q 1.5
*/
let words = "Солнечная панель";
let cnt = words.split(" ").length;

console.log(cnt > 1 ? "В строке больше одного слова": "В строке одно слово");

// v2
cnt = 1;
for (let i = 0; i < words.length; i++) {
    if (words[i] === " ") {
        cnt++;
    }
}
switch (cnt) {
    case 1: console.log("В строке одно слово"); break;
    default: console.log("В строке больше одного слова");
}

/*
    q 1.6
*/
let symbols = "Первый номер";
console.log("=>", symbols.charCodeAt(0));
let index = symbols.charCodeAt(0);
if (index >= 48 && index <= 57) {
    console.log("Первый символ цифра");
} else {
    console.log("Первый символ не цифра");
}

/*
    q 1.9
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp
*/

let emails = "example@ex.ru primer@primer.com email@com.ru";
let reg = /[0-9a-z]+-?[0-9a-z]@[0-9a-z]+\.[a-z]{2,3}/gi;

// console.log(emails.search(reg)); // index
// console.log(reg.test(emails)); // true / false

// console.log(emails.match(reg));
// console.log(reg.exec(emails));

result = emails.match(reg);
console.log(result.length ? result: [""]);

/*
    q 1.10
*/
let ticket = "VG-590234543245:EN";

let regConcert = /[a-z]+-\d{8}\D/i
let regTheatre = /[a-z]+-\d{12}\D/i

if (regConcert.test(ticket)) {
    console.log("Выбран билет на концерт");
} else if (regTheatre.test(ticket)) {
    console.log("Выбран билет в театр");
} else {
    console.log("Билет не определен");
}

// v2
switch (true) {
    case regConcert.test(ticket): 
        console.log("Выбран билет на концерт");
        break;
    case regTheatre.test(ticket): 
        console.log("Выбран билет в театр");
        break;
    default:
        console.log("Билет не определен");
}

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String