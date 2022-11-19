function clear(c) {
    c.clearRect(0, 0, 400, 300);
}
clear(ctx);

class Point {
    constructor(x, y) {
        this.x = x; 
        this.y = y;
        this.r = Math.ceil(Math.random() * 10);
        this.fill = !!Math.round(Math.random());
    }
}
let points = [];
let w = canvas.width, h = canvas.height;

let q = getNumber(10000);
while (q--) {
    points.push(new Point(getNumber(w), getNumber(h)));
}
// console.log(points);

// points.forEach(p => {
//     drawArc(p.x, p.y, p.r, getColor(), p.fill)
// });

// clear(ctx);
// function draw() {
//     function drC(n) {
//         if (n > 0) {
//             setTimeout(function() {
//                 ctx.beginPath()
//                 ctx.fillStyle = getColor();
//                 ctx.arc(w / 2, h / 2, n, 0, Math.PI * 2);
//                 ctx.fill();
//                 ctx.closePath();
//                 n -= 2;
//                 drC(n);
//             }, 300)
//         }
//     }
//     drC(100);
// }


function draw2() {
    function drC(n) {
        if (n < points.length) {
            setTimeout(function() {
                drawArc(points[n].x, points[n].y, points[n].r, getColor(), points[n].fill)
                n++;
                drC(n);
            }, 10)
        }
    }
    drC(100);
}

draw2(0);