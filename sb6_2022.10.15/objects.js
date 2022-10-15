let table = {
    "width": 200,
    "height": 120,
    depth: 100,
    material: "wood",
    "material type": "oak",
    "1color": "black",
    "2color": "crimson",
    type: "dinner",
    form: "triangle",
    forEat: true,
    chairs: [{}, {}, {}, {}],
    1: 787
}

let word = "material type";
console.log(table.depth);
// console.log(table.2color) // not work
console.log(table.type);
console.log(table[1]);

// console.log(table.word);
console.log(table[word]);
console.log(table["2color"]);

// console.log(`table chairs: ${table.chairs}`)

/*
    Объект - неупорядоченный набор пар "ключ-значение"
    {
        свойство: значение
        string: любой тип данных
    }
*/

console.log(table);

for (let k in table) {
    // console.log(k);
    // console.log(table[k]);
    console.log(`Свойство стола ${k} со значением ${table[k]}`);
}