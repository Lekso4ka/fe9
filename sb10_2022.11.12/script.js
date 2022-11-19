const getNumber = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

const getColor = (a = 1) => {
    let r = getNumber(256, 0);
    let g = getNumber(256, 0);
    let b = getNumber(256, 0);
    return `rgba(${r},${g},${b},${a})`;
}

const canvas = document.getElementById("cnv");
const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.strokeStyle = "black";
// ctx.moveTo(200, 150);
// ctx.lineTo(0, 0);
// ctx.lineTo(400, 0);
// ctx.lineTo(200, 150);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.strokeStyle = "cadetblue";
// ctx.moveTo(0, 300);
// ctx.lineTo(200, 150);
// ctx.lineTo(400, 300);
// ctx.stroke();
// ctx.closePath();

/* q 6.1 */

ctx.fillStyle = getColor();
ctx.fillRect(150, 120, 100, 65);

/* q 6.2 */
function drawLine(c, xStart, yStart, w, h, color = "#000") {
    c.beginPath();
    c.strokeStyle = color;
    c.moveTo(xStart, yStart);
    c.lineTo(xStart + w, yStart + h);
    c.stroke();
    c.closePath();
}

drawLine(ctx, 200, 100, 100, 0, getColor());

// Решение для тренажера:
// ctx.beginPath()
// ctx.moveTo(100, 100);
// ctx.lineTo(200, 100);
// ctx.beginPath()
// ctx.moveTo(100, 150);
// ctx.lineTo(200, 150);	
// ctx.stroke()

/* q 6.3 */

// + функции из q 6.2

drawLine(ctx, getNumber(400), getNumber(300),getNumber(200, 100), getNumber(100), "#e74c3c");
drawLine(ctx, getNumber(400), getNumber(300),getNumber(200, 100), getNumber(100), "#16a085");
drawLine(ctx, getNumber(400), getNumber(300),getNumber(200, 100), getNumber(100), "#2980b9");


/* q 6.4 */
ctx.clearRect(0, 0, 400, 300);

function drawRectangle(c, x, y, w, h, color="#000", type = "stroke") {
    c.beginPath();
    switch (type) {
        case "stroke":
            c.strokeStyle = color;
            c.strokeRect(x, y, w, h);
            break;
        case "fill":
            c.fillStyle = color;
            c.fillRect(x, y, w, h);
            break;
    }
    c.closePath();
}

// const colors = ["#ff3d00", "#0bdd38", "#2e77da", "#ffd200"];
const colors = [];
let n = 12;
while(n--) {
    colors.push(getColor());
}
// drawRectangle(ctx, 0, 0, 100, 100);

const GAP = 5, LENGTH = 50, N = 4;
let x = 0, y = 0;

for (let i = 0; i < colors.length; i++) {
    if (i % N === 0) {
        x = 0;
        if (i !== 0) {
            y += LENGTH;
        }
    } else {
        y -= GAP;
    }
    x += GAP;
    y += GAP;
    drawRectangle(ctx, x, y, LENGTH, LENGTH, colors[i], "fill");
    x += LENGTH;
}

/*
    6.5 
*/
ctx.clearRect(0, 0, 400, 300);
const CNT = 4;
let a = CNT, b = 100;
while (a <= b) {
    // нарисовать круг
    ctx.beginPath()
    ctx.strokeStyle = getColor();
    ctx.arc(150, 150, a, 0, Math.PI * 2)
    ctx.stroke();
    ctx.closePath();
    a += CNT;
}

// ctx.clearRect(0, 0, 400, 300);
a = CNT, b = 100;
while (b >= a) {
    // нарисовать круг
    ctx.beginPath()
    ctx.fillStyle = getColor();
    ctx.arc(150, 150, b, 0, Math.PI * 2)
    ctx.fill();
    ctx.closePath();
    b -= CNT;
}
function drawArc(x = 150, y = 150, r, color = "#000", type) {
    ctx.beginPath()
    switch(true) {
        case type:
            ctx.fillStyle = color;
            ctx.arc(x, y, r, 0, Math.PI * 2)
            ctx.fill();
            break;
        default:
            ctx.strokeStyle = color;
            ctx.arc(x, y, r, 0, Math.PI * 2)
            ctx.stroke();
    }
    ctx.closePath();
}

// function draw(x, y, n, stop) {
//     if (n >= stop) {
//         drawArc(x, y, n)
//         return draw(n -= 10, stop);
//     }
//     return n;
// }

// draw(250, 100, 100, 10);

/* q 6.6 */
ctx.clearRect(0, 0, 400, 300);
// document.addEventListener("mousemove", function(e) {
//     let x = e.offsetX;
//     let y = e.offsetY;
//     console.log(x, y);
//     drawArc(x, y, 10, getColor());
// });
