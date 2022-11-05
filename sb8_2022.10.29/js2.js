// 2
//     1.8
//     2.4
//     2.12
//     2.14

/* Strings */
/* q 1.1 */

let message = "приветствую вас";
let str = "привет"
console.log(message.toLowerCase().startsWith(str));

/* q 1.2 */
let greetings = "Приветствую, username! Сегодня вы получили два сообщения от username."

str = "username";
console.log(greetings.toLowerCase().lastIndexOf(str));

/* q 1.7 */
let symbols = "floor";
let v1 = symbols.codePointAt(0);
let v2 = symbols.codePointAt(1);
console.log(v1, v2);
res = (v1 + v2);
if (res % 2 === 0) {
    console.log(res);
    console.log(String.fromCodePoint(res));
} else {
    console.log("Символ обнаружить не удалось");
}

/* q 1.8 */
let phone = "+712:34567*8,90";
let reg = /[^,:* ]+/g;
let tel = phone.match(reg);
tel = tel.join("");
// console.log(phone.match(reg));
console.log(tel);


/* Arrays */
/* 2.16 */
let array_1 = [2, 4, 7, 8, 1],
    array_2 = [2, 5, 11, 6, 1];

function intersection(a1, a2) {
    let arr = [];
    a1.forEach(function(el) {
        if (a2.filter(n => n === el).length) {
            arr.push(el);
        }
    })
    return arr;
}

// v2
function intersection(a1, a2) {
    return a1.reduce(function(arr, el) {
        if (a2.includes(el)) {
            arr.push(el);
        }
        return arr;
    }, []);
} 
intersection([2, 4, 7, 8, 1], [5, 2, 11, 6, 1]);

/* q 2.14 */

let numbers = [10, 20, 33, 55, 100];
let cnt = numbers.reduce((result, n) => {
    if (result.sum + n <= 50) {
        result.sum += n;
        result.cnt++;
    }
    return result;
}, {sum: 0, cnt: 0})
console.log(cnt.cnt);


/*
    q 2.13
*/

let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140.";
tickets = "Train: . Airplane: .";

let hash = {};
tickets = tickets.split(".");
tickets.pop(); // ["Train: AV432, FS452, OE402", "Airplane: DR578, JN1089, NDK140"]
tickets = tickets.map(el => {
    el.trim();
    let arr = el.split(":");
    /*
        [
            ["Train", "AV432, FS452, OE402"]
            [" Airplane", "DR578, JN1089, NDK140"]
        ]
    */
    hash[arr[0].trim().toLowerCase()] = arr[1].trim().split(", ");
    /*
        {
            train: ["", "", ""]
        }
    */
    return arr;
});
console.log(hash);

/*
    q 2.12
*/
let dates = "23.04.1996 07.10.2002 15.08.1945";

arr = dates.split(" ");
arr = arr.map(el => {
    return el.split(".").join("/");
});
console.log(arr);

/* 2.9 */

let array = [[1,2,3],[1,2],[1,2,3,4]];
array.sort((a,b) => a.length - b.length);
console.log(array);

/* 2.8 */

let users = [
    {login: "user1", role: "Admin"},
    {login: "user2", role: "State user"},
    {login: "user3", role: "Moderator"}
]
// let ind = users.findIndex(el => el.role.match(/[^ ]+/g).length > 1);
let ind = users.findIndex(el => el.role.includes(" "));
console.log(ind);

/* 2.6 */
let values = [10, 185, 1120, 980];

res = !!values.find(v => {
    let st = v + "";
    return st.length === 4;
});
console.log(res);

/* 2.4 */
let tasks = [
    {title: "Умыться" , completed: true},
    {title: "Сделать зарядку" , completed: true},
    {title: "Приготовить завтрак" , completed: false}
];

let titles = tasks.map(el => el.title);
console.log(titles);