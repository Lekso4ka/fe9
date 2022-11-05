
/* q 2.1 */
let year_of_foundation = 1841;

/* q 3.2 */
let word = "велосипед";
console.log(word[0].toUpperCase());

/* q 3.4 */
let value = 4.5;
let v1 = Math.ceil(value),
    v2 = Math.floor(value),
    v3 = Math.round(value);
let result = v1 + v2 + v3;
let sq = Math.sqrt(result); // result ** (1/2)
console.log(Math.floor(sq));

/* q 3.6 */
let name = "Анатолий",
    last_name = "Максимов",
    age = 32;
let obj = {
    name: name,
    last_name: last_name,
    age: age
}
console.log(obj);

/* q 3.7 */
console.log(value === null ? "null" : typeof value);

/* q 4.9 */
let temp = 25,
    weather = "clear";

let activity = "";

if (weather === "clear") {
    if (temp >= 25) {
        activity = "golf";
    } else if (temp >= 10 && temp <= 24) {
        activity = "bowling";
    } else {
        activity = "hiking";
    }
} else {
    activity = "hiking";
}

/* q 6.5 */
let data = "привет";

function getNumber(d) {
    let num = parseFloat(d);
    // console.log(num);
    if (isNaN(num)) {
        return 0;
    } else {
        return num;
    }
}

console.log(getNumber(data));

/* q 9.1 */
let list = ["Груша", "Яблоко"];
list.unshift("Яблоко");
list.pop();
list.push("Клубника");

console.log(list);

/* q 9.2 */
let maxLength = 0;
let val = "";

for (let v of list) {
    console.log(v, maxLength);
    if (v.length > maxLength) {
        maxLength = v.length;
        val = v;
    }
}
console.log(val);

/* Замыкания */
function secretPassword() {
    let password = 'xh38sk';
    return {
        guessPassword: function(guess) {
            return guess === password;
        }
    }
}
let passwordGame = secretPassword();
console.log("clj", passwordGame.guessPassword('xh38sk'));

/* q 9.12 */
list = [2, 54, 2, 54, false, 2];
let sum = 0;
for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "boolean") {
        break;
    }
    sum += list[i];
}
console.log(sum);

// let start = 0, res = 0;
// while(typeof list[start] !== "boolean" || start < list.length) {
//     res += list[start++];
// }
// console.log(res);