const sq = document.querySelector(".square");
const link = sq.querySelector("a.btn");

// sq.onclick = function() {
//     sq.style.backgroundColor = getColor();
// }

// document.body.onclick = function() {
//     document.body.style.backgroundColor = getColor();
// }

// function setClick(e) {
//     let color = getColor()
//     console.log(new Date().toLocaleTimeString(), color, e.target)
//     e.target.style.backgroundColor = color;
// }

// sq.onclick = setClick;
// document.body.onclick = setClick;

function setClick(e) {
    e.stopPropagation();
    this.style.backgroundColor = getColor();
}

// sq.onclick = setClick;
// document.body.onclick = setClick;


sq.addEventListener("click", setClick);
document.body.addEventListener("click", setClick);

let clicked = 0;

sq.addEventListener("click", function() {
    clicked++;
    sq.innerHTML = "";
    sq.append(link);
    let txt = document.createElement("span");
    txt.innerText = `Clicked ${clicked} times`;
    sq.append(txt);
});

link.addEventListener("click", function(e) {
    e.preventDefault(); // остановить событие, заданное ссылке по умолчанию
    this.style.backgroundImage = getGradient();
    let opacity = +this.style.opacity;
    if (!opacity) {
        opacity = 1;
    }
    this.style.opacity = opacity - 0.1;
});

let width = innerWidth;
let height = innerHeight;
console.log(width, height);

let x = 0, y = 0;

function setBox(size) {
    let box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundImage = getGradient([], `${getRandom(361)}deg`, getRandom(6, 2));
    box.style.position = "fixed";
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
    if (x >= width && y < height) {
        y += size;
        x = 0;
    } else {
        x += size;
    }
    console.log(x, y);
    document.body.append(box);
}

document.body.addEventListener("click", function() {
    let int = setInterval(function() {
        setBox(100)
        if (y > height && x > width) {
            clearInterval(int);
        }
    }, 100);
}, {once: true});