/*
    q 1.3
*/
// v1
let tags = document.getElementsByClassName("promo"); // [div, p, i]
// v2
tags = document.querySelectorAll(".promo");
console.log(tags.length);

/*
document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("div");
document.getElementsByName("name");

document.querySelector(".promo h2"); // один тег
document.querySelectorAll(".promo"); // список тегов
*/

/*
    q 1.5
*/

tags = document.querySelectorAll(".price");
tags.forEach(tag => {
    tag.innerText *= 2; // tag.innerText = tag.innerText * 2
});

/*
    q 1.6
*/
let link = document.querySelector(".links");
link.innerHTML = `<a>${link.innerText}</a>`;

/*
    q 1.8
*/
tags = document.querySelectorAll(".price");
let sum = 0;
tags.forEach(tag => {
    sum += +tag.innerText;
});

console.log(sum);

/*
    q 1.11
*/

// v1
let tag = document.querySelector(".cars");
let cars = [];
for (let i = 0; i < tag.children.length; i++) {
    // let child = tag.children[i];
    // cars.push(child.innerText);
    cars.push(tag.children[i].innerText);
}

// v2
tags = document.querySelectorAll(".cars li");
cars = [];
tags.forEach(t => {
    cars.push(t.innerText);
})

/*
    q 2.1
*/

let root = document.getElementById("root");
let new_element = document.createElement("p");
new_element.innerText = "Ура! Мой скрипт отработал верно!";

root.appendChild(new_element);

// root.append(t1, t2, t3, t4, t5);

/*
    q 2.4
*/
tags = document.querySelectorAll("div");
tags.forEach(t => {
    t.className = "adds";
})
// v2
for (let i = 0; i < tags.length; i++) {
    tags[i].className = "adds";
}

/*
    q 2.6
*/

tags = document.querySelectorAll("p");
tags.forEach(t => {
    if (t.innerText.toLowerCase() === "delete") {
        t.remove();
    }
})

/*
    q 2.8
*/

let d1 = document.querySelector("#div1"), d2  = document.querySelector("#div2");
// v1
for(let i = 0; d1.children.length;) {
    let child = d1.children[i];
    d2.append(child);
}
// v2
while (d1.children.length) {
    d2.append(d1.children[0]);
}

/*
    q 2.11
*/
let tasks = ["Проверить документы", "Отправить начальству", "Организовать собрание"];
root = document.querySelector("#root");

tasks.forEach(task => {
    let el = document.createElement("p");
    el.innerText = task;
    root.append(el);
});

/*
    q 2.12
*/

let names = ["div", "h2", "p"];
let result = {};

for (let n of names) {
    let tag = document.querySelectorAll(n);
    result[n] = tag.length; // {"div": tag.length}
}
console.log(result);

// v2
result = {
    "div": document.querySelectorAll("div").length,
    "p": document.querySelectorAll("p").length,
    "h2": document.querySelectorAll("h2").length
}