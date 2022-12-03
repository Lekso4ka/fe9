/* 
    q 1.1 => Код: 1H291
*/

let tag = document.querySelector(".secret");
// v1
console.log(tag.nodeName.toLowerCase());
// v2
console.log(tag.tagName.toLowerCase());
// v3
console.log(tag.localName);

/*
    q 1.2 => Код: 1XT61
*/
try {
tag = document.querySelector("#elem");
console.log(tag.localName)
} catch(e) {}
/*
    q 1.4 => Код: U@;91
*/
try {
let tags = document.querySelectorAll(".target");
console.log(tags[tags.length - 1].localName);
} catch(e) {}
/*
    q 1.6 => Код: TBHC1
*/
try {
tag = document.querySelector(".links");
tag.innerHTML = `<a>${tag.innerText}</a>`;
} catch(e) {}
/*
    q 1.7 => Код: 9NIK1
*/
try {
tag = document.querySelector(".content");
tag.innerHTML = `<b>${tag.innerText}</b>`;
} catch(e) {}

/* 
    q 1.8 => Код: I4:A1
*/
try {
tags = document.querySelectorAll(".price");
let sum = 0;
tags.forEach(el => {
    sum += +el.innerText; // "1000" + +2000 => "10002000"
})
console.log(sum);
} catch(e) {}
/*
    q 1.9 => Код: F?N>1
*/
try {
tags = document.querySelectorAll(".numeric");
tags.forEach(el => {
    if (el.innerText < 0) {
        el.innerHTML = `<b>${el.innerText}</b>`;
    }
})
} catch(e) {}
/*
    q 1.10 => Код: L45C1
*/
try {
let result = 0;
// v1
let elems = Array.from(document.getElementsByClassName("numeric"));
// v2
elems = document.querySelectorAll(".numeric");
elems.forEach(elem => result += +elem.innerText);
} catch(e) {}
/*
    q 2.2 => Код: 9BMH1
*/
try {
let title = document.querySelector("#title");
let new_element = document.createElement("h2");
new_element.innerText = "Сегодня солнечно, минус 15";

// parent.insertBefore(who, beforeChild)
title.parentElement.insertBefore(new_element, title.nextElementSibling);
} catch(e) {}
/*
    q 2.3 => Код: 00FA1
*/
try {
let ul = document.querySelector("ul");
new_element = document.createElement("li");
new_element.innerText = "Велосипед";
ul.insertBefore(new_element, ul.firstElementChild);
} catch(e) {}
/*
    q 2.5 => Код: @N6D1
*/
try {
tags = document.querySelectorAll("p");
tags.forEach((el, i) => {
    el.id = `p_${i+1}`;
});
} catch(e) {}
/*
    q 2.7 => Код: WIHN1
*/
try {
let values = [10, 50, 100];
tags =  document.querySelectorAll(".elems");
tags.forEach(el => {
    if (values.includes(+el.innerText)) {
        el.remove();
    }
})
} catch(e) {}
/*
    q 2.9 => Код: UB@J1
*/
try {
ul = document.querySelector("#first");
new_element = document.createElement("li");
ul.append(new_element);
console.log(ul.childElementCount);
} catch(e) {}

/*
    q 2.10 => Код: 7MHM1
*/

values = ["велосипед", "ролики", "лыжи"];
let d1 = document.querySelector("#div1");
let d2 = document.querySelector("#div2");

for (let i = 0; i < d1.children.length;) {
    let val = d1.children[i].innerText;
    console.log(val);
    if (values.includes(val)) {
        d2.append(d1.children[i])
    } else {
        i++;
    }
} 

/*
    q 2.13 => Код: @T@M1
*/
let tasks = document.querySelector("#tasks");
let li = Array.from(tasks.querySelectorAll("li"));

li.sort((a,b) => a.innerText.length - b.innerText.length)
tasks.append(...li);

/*
    q 3.1 => Код: FA902
*/

tag = document.querySelector("#div_elem");
tag.style.width = "100px";
tag.style.height = "100px";

/*
    q 3.3 => Код: WO=22
*/

let lbl = document.querySelector("label");
lbl.setAttribute("for", "target");

/*
    q 3.5 => Код: I:772
*/

tag = document.querySelector("#photo");
let img = document.createElement("img");
img.src = tag.innerText;
img.style.width = "100px";
img.style.height = "100px";
tag.innerHTML = "";
tag.append(img);

/*
    q 3.6 => Код: F53B2
*/
tag = document.querySelector("#numbers");
for (let i = 10; i <= 550; i += 10) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.innerText = i;
    tag.append(opt);
}

/*
    4.1 => Код: @R9=2
*/
let btn = document.querySelector("#btn");
let p = document.querySelector("#val");
btn.onclick = function() {
    console.log(p.innerText);
}

/*
    4.2 => Код: WC7>2
*/
btn = document.querySelector("#btn");
inp = document.querySelector("#val");
btn.onclick = function() {
    console.log(inp.value);
}

/*
    q 4.3 => Код: 4VK72
*/
let sq = document.querySelector("#square");
sq.onclick = function() {
    this.style.opacity = 0;
}

/*
    q 4.4 => Код: I00B2
*/
btn = document.querySelector("#clicker");
btn.addEventListener("click", e => {
    let val = +e.target.innerText;
    e.target.innerText = ++val;
})

/*
    q 4.5 => Код: @F:>2
*/
btn = document.querySelector("#delete");
let list = document.querySelector("#points");

btn.addEventListener("click", function() {
    list.children[list.childElementCount - 1].remove();
})

/*
    q 4.8 => Код: NOEE2
*/
tags = document.querySelectorAll("p");
tags.forEach(el => {
    el.addEventListener("click", function() {
        el.innerText = ++el.innerText;
    })
})