let tesla = {
    brand: "Tesla",
    model: "седан",
    max_speed: 50,
    color: "indigo",
    power: 3,
    auto: true,
    wheels: 3,
    user: {
        name: "Ilon",
        number: "YE3503"
    },
    showInfo: function() {
        // Автомобиль Tesla цвета Indigo принадлежит владельцу Ilon под номером YE3503
        // this - моё => это / мой / себя 
        let txt = `Автомобиль ${this.brand} цвета ${this.color} принадлежит владельцу ${this.user.name} под номером ${this.user.number}`;
        // console.log(txt);
        return txt;
    }
}

/* 
    Парадигмы ООП:
        Инкапуляция (код не должен делать ничего без программиста)
        Полиморфизм (код можно переиспользовать)
        Наследование (^_^)
*/
console.log(tesla.showInfo());

let A = {x: 0, y: 4};
let B = {x: 3, y: 9};
let C = {x: 7, y: 4};
let D = {x: 5, y: 2};

// У всех объектов (точек) одинаковые свойства

class Point {
    constructor(a, b) {
        this.x = a; // this - указатель на свойство будущего объекта
        this.y = b;
    }
    moveX(n) {
        this.x = n;
    }
    moveY(n) {
        this.y = n;
    }
    setToZero() {
        this.x = 0;
        this.y = 0;
    }
    showInfo() {
        return `Точка с координатами {${this.x};${this.y}}`;
    }
}

let F = new Point(0, 1); // создался объект на основе шаблона (экземпляр класса Point)
F.setToZero();
F.moveY(-5);
F.moveX(3);
console.log(F.showInfo());

// let Z = {x: 0, y: 6, z: 9}

/* 
    Animal => 
        Есть уши
        Есть хвост
        Питается мясом
        Не любит людей
    
    DOG => Animal 
        + любит людей 
        + виляет хвостиком 
        + ловит мячик

    Corgi => DOG
        + рыжий окрас
        + короткие лапки
        + похож на пуфик
*/


class Point3D extends Point {
    constructor(a, b, c) {
        // super => new Point(a,b) => конструктор родительского класса
        // super(a, b);
        super(a,b);
        this.z = c;
    }
    moveZ(n) {
        this.z = n;
    }
    setTo3DZero() {
        this.setToZero();
        this.z = 0;
    }
    showInfo() {
        return `Трехмерная точка с координатами {${this.x};${this.y};${this.z}}`
    }
}
 
let Z = new Point3D(1,2,3);
Z.setTo3DZero();
console.log(Z);
console.log(Z.showInfo());

let X = new Point(2,4);
X.setToZero()
console.log(X);

/*
    Создать класс Rectangle, который принимает ширину и высоту прямоугольника.
    У прямоугольника есть методы, считающие площадь , периметр и выводящий информацию о прямоугольнике

    На основе класса Rectangle создать класс Square и получить информацию о квадрате
*/

class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
        this._word = "Прямоугольник";
    }
    get word() {
        return this._word;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
    getString() {
        return `${this._word} ${this.width}x${this.height} с площадью ${this.getArea()} и периметром ${this.getPerimeter()}`;
    }
}

let rect = new Rectangle(100, 200);
console.log(rect.getString());

class Square extends Rectangle {
    static phrase = "У квадрата ширина всегда ровна высоте";
    constructor(side) {
        super(side, side);
        this._word = "Квадрат"
    }
    set side(val) {
        this.height = val;
        this.width = val;
    }
    static setPerimeter(side) {
        return side * 4;
    }
}

let sq = new Square(200);
console.log(sq.getString());
