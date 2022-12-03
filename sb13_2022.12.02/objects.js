/*
    q 3.2 => Код: FSM33
*/

let goods = {
    title: "Самокат", 
    price: 6000,
    good_id: 1
}
let arr = [...Object.keys(goods), ...Object.values(goods)];

console.log(arr);

/*
    q 3.3 => Код: N7I=3
*/

let article = {
    title: "Загадки дачного огурца", 
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
};
let author = {
    name: "Ричард М.В.",
    age: 43
};

let obj = {};
for (let k in article) {
    obj[k] = article[k];
}
for (let k in author) {
    obj[k] = author[k];
}
console.log(obj);

// v2
console.log({...article, ...author});

/*
    q 4.1 => Код: 1RMA3
*/

let pet_1 = { 
    name: "Шарик", 
    age: 10 
};

let pet_2 = { 
    name: "Жучка", 
    age: 5
};

function getName() {
    return `${this.name} ${this.age}`
}
pet_1.getName = getName;
pet_2.getName = getName;

/*
    q 4.2 => Код: T<@C3
*/

input = {
    id: 1,
    value: "Добрый вечер",
    firstName: "Григорий",
    lastName: "Стрельников" 
}

function sayHi() {
    console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)
}

sayHi.call(input);

/*
    q 4.3 => Код: 00IF3
*/
let pet = { 
    name: "Диксон", 
    breed: "Немецкая овчарка" 
}

function getDescription() { 
    console.log("Имя питомца: " + this.name + ", Порода: " + this.breed) 
}

getDescription = getDescription.bind(pet);
