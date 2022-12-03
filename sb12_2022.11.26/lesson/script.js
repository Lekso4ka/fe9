/*
    q 3.2
*/

let tag = document.querySelector("#rainbow");
tag.style.color = "#2980b9"; // color {color}, text-align {textAlign}, grid-column-end {gridColumnEnd}

/*
    q 3.4
*/
tag = document.querySelector("#rainbow");
let n = +tag.innerText;

switch (true) {
    case n >= 1 && n <= 9:
        tag.style.color = "#c0392b";
        break;
    case n >= 10 && n <= 20:
        tag.style.color = "#e17055";
        break;
    default:
        tag.style.color = "#fdcb6e";
}

/*
    q 3.7
*/
const countries = ["Armenia", "Russia", "Germany", "France", "Georgia"];
let select = document.querySelector("select");

for (let i = 0; i < countries.length; i++) {
    let opt = document.createElement("option");
    opt.innerText = countries[i];
    opt.value = countries[i].slice(0,2).toLowerCase();
    select.append(opt);
}

/*
    4.6
*/

function changeSize(el) {
    console.log(el);
    let w = parseFloat(el.style.width);
    let h = parseFloat(el.style.height);
    el.style.width = w * 0.9 + "px";
    el.style.height = h * 0.9 + "px";
}

let sq = document.querySelector("#square");
sq.onclick = function(e) {
    changeSize(this);
}

// sq.onclick = changeSize;

/*
    q 4.7
*/
let btns = document.getElementsByClassName("copy");

function setCopy() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].onclick = function(e) {
            let clone = e.target.cloneNode(true);
            document.body.append(clone);
            setCopy();
        }
    }
}

setCopy();

// function setCopy() {
//     for (let i = 0; i < btns.length; i++) {
//         btns[i].addEventListener("click", function(e) {
//             let clone = e.target.cloneNode(true);
//             document.body.append(clone);
//             setCopy();
//         })
//     }
// }

// setCopy();

/*
    q 4.9
*/

let d1 = document.querySelector("#div1"),
    d2 = document.querySelector("#div2")

// const elements = [...d1.querySelectorAll("p"), ...d2.querySelectorAll("p")];

const elements = document.querySelectorAll("#div1 p, #div2 p");

elements.forEach(el => {
    el.onclick = function() {
        if (el.parentElement === d1) {
            d2.append(el);
        } else {
            d1.append(el);
        }
    }
});