/*
    Массив - упорядоченная последовательность значений
*/
let daysOfWeek = ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];

// console.log(daysOfWeek[0]);
// console.log(daysOfWeek.length);
// console.log(daysOfWeek[daysOfWeek.length - 1]);

let arr = [19, "мантия", ["book1", "book2", "book3"], {name: "Dog", age: 2}, true, 100500];
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    // console.log(arr[i], typeof arr[i]);
    if (typeof el === "object") {
        console.log("Объект");
        for (let k in el) {
            console.log(`${k} - ${el[k]}`);
        }
    }
}