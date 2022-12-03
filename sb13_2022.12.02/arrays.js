/*
    q 2.1 => Код: ?;SD2
*/

let values = ["Строка", true, "Число", "Объект", "Не число", false]

let index = values.findIndex(el => typeof el === "boolean");

values[index] = "Булевый тип";
console.log(values);

/*
    q 2.2 => Код: I>;P2
*/

let partNumbers = ["ER1234COM", "FIV987451RU","GE123JO","P4321NO"];
console.log(partNumbers.filter(el => /\d{2}[a-z]{2}$/i.test(el)));

/*
    q 2.4 => Код: U<1L2
*/

let tasks = [
    {title: "Умыться" , completed: true},
    {title: "Сделать зарядку" , completed: true},
    {title: "Приготовить завтрак" , completed: false}
]

// v1
let arr = [];
for (let v of tasks) {
    arr.push(v.title);
}
console.log(arr);

// v2
console.log(tasks.map(el => el.title));

/*
    q 2.6 => Код: 1R?N2
*/

values = [10, 1852, 1100, 980]

let result = values.filter(el => (el + "").length === 4);
console.log(result.length > 0);

/*
    q 2.8 => Код: BE2S2
*/

users = [
    {login: "user1", role: "Admin"},
    {login: "user2", role: "Stateuser"},
    {login: "user3", role: "Mode rator"}
];

console.log(users.findIndex(el => el.role.split(" ").length > 1));

/*
    q 2.14 => Код: @:@<3
*/
let numbers =  [23,4,2,4,3,11,3,12,3,23];
let n = 50;
result = numbers.reduce((acc, el) => {
    if (acc.sum + el <= 50) {
        acc.sum += el;
        acc.cnt++;
    }
    return acc;
}, {cnt: 0, sum: 0})
console.log(result.cnt);

/*
    2.16 => Код: I8R14
*/

let array_1 = [2, 4, 7, 8, 1];
let array_2 = [2, 5, 11, 6, 1];
function intersection(a1, a2) {
    let arr = [];
    a1.forEach(el => {
        if (a2.includes(el)) {
            arr.push(el);
        }
    });
    arr.sort((a,b) => b - a);
    console.log("aaaa",arr);
    return arr;
}
intersection(array_1, array_2);