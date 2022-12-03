/*
    q 1.1 => Код: U2<;2
*/

let message = "Привет мир!";
let string = "приветs";
//v1
let find = message.toLowerCase().indexOf(string);
console.log(find !== -1);
//v2
console.log(message.toLowerCase().includes(string));
//v3
string = /привет/i;
console.log(message.search(string) === 0);
//v4
string = /^привет/i;
console.log(string.test(message));

/*
    q 1.2 => Код: T<X=2
*/

let greetings = "Приветствую, username! Сегодня вы получили два сообщения от username."

console.log(greetings.toLowerCase().lastIndexOf("username"));

/*
    q 1.6 => Код: 4JNF2
*/


let symbols = "Первый номер";
// v1
console.log(!isNaN(+symbols[0]) ? "Первый символ цифра" : "Первый символ не цифра");
// v2
let code = symbols.codePointAt(0);
console.log(code >= 48 && code <= 57 ? "Первый символ цифра" : "Первый символ не цифра");

/*
    q 1.7 => Код: IPTK2
*/

symbols = "blooa";
let sum = symbols.codePointAt(0)+symbols.codePointAt(1);
console.log(sum % 2 === 0 ? String.fromCharCode(sum) : "Символ обнаружить не удалось");

/*
    q 1.8 => Код: IF9@2
*/

let phone = "+712:34567*8,90";
let result = phone.match(/[^,:* ]/g);
console.log(result.join(""));


"+71234567890"