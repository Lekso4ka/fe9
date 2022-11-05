// q 3.1
let car = {
    model: "Audi", 
    color: "white",
    weight: 1850,
    engine: "170 hp"
};
delete car.engine;
console.log(car);

// q 3.5

let employee  = [
    ["firstName", "Ivan"], 
    ["lastName", "Ivanov"],
    ["hireDate", "21.10.2015"]
]
employee = employee.filter(arr => arr[0].toLowerCase() !== "hiredate");
employee.push(["jobName", "IT PROG"]);
console.log(employee);

// q 3.6

let array = [
    [ "boolean", true ], 
    [ "number", 4 ],
    [ "string", "word" ],
    [ "object", {}]
];

function countString() {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i][1] === "string") {
            result++;
        }
    }
    console.log(`Количество строковых элементов в именованном массиве: ${result}`);
}
countString();

// q 4.4

let props= { 
    name: "Анатолий", 
    age: 29,
    sayHi: ()=>"привет"
};

function getValue() {
    let str = "";
    for (let k in this) {
        if (typeof this[k] !== "function") {
            str += `${k}: ${this[k]}, `;
        }
    }
    str = str.slice(0, str.length - 2);
    console.log(`Значения свойств объекта props (${str})`);
}

getValue = getValue.bind(props);
getValue();

// q 4.5
let hero = { 
    nick: "FirstHero", 
    position: "Лагерь",
    getPosition: function () {
        console.log("Позиция героя: " + this.position)
    }
}
hero.getPosition();

// q 5.3

let firstName = "Александр", lastName = "Петров";

class User {
    constructor(a, b) {
        this.firstName = a;
        this.lastName = b;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(str) {
        let arr = str.split(" ");
        this.firstName = arr[0];
        this.lastName = arr[1];
    }
}

let user = new User(firstName, lastName);
console.log(user.fullName);
user.fullName = "Всеволод Старозубов";
console.log(user);

// q 5.4

let name = "Pizza", phone = "+81234567890";

// str.search(reg) => -1 => n
// reg.test(str) => true / false

class Delivery {
    constructor(n, p) {
        this.name = n;
        this.phone = p;
        // this.validPhone = /^\+{1}/.test(p);
        this.validPhone = this.phone.startsWith("+");
    }
}

let deliveryName = new Delivery(name, phone);
console.log(deliveryName);

// q 5.5

class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}

// class User extends Permissions {
//     constructor(n) {
//         super();
//         this.name = n;
//     }
// }

// q 5.6

array = [2, 4, 7, 8, 1];
let num = 2;

function queue() {
    let arr = Array.from(arguments);
    let n = arr.shift();
    let sum = 0;
    arr.sort((a,b) => a - b);
    console.log(arr);
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(queue(num, ...array));