const names = ["Акакий", "Марфа", "Жека", "Аркаша", "Яшка", "Локе'нахак", "Кратос", "Женевьева", "Вазген", "Стрелка", "Терри", "Владлен", "Кельтас", "Марго", "Пиксель"];

const icons = ["hippo", "fish", "dragon", "otter", "kiwi-bird", "worm", "horse", "frog", "dove", "dog", "crow", "cow", "cat", "shrimp"];

const getRandom = (max = 11, min = 0) => Math.floor(Math.random() * (max - min) + min);

const getColor = () => `rgb(${getRandom(256)},${getRandom(256)},${getRandom(256)})`;

class Pet {
    constructor(t, n, likes) {
        this.type = t;
        this.icon = `fa-solid fa-${t}`;
        this.name = n;
        this.likes = likes || 0;
        this.color = getColor();
    }
}

const pets = [];
let petCnt = 9;
while(petCnt--) {
    let n = names[getRandom(names.length)]; // names[0 - names.length]
    let t = icons[getRandom(icons.length)]; 
    let l = getRandom(50);
    pets.push(new Pet(t, n, l));
}
console.log(pets);

const box = document.querySelector(".container");
box.innerHTML = "";

for (let pet of pets) {
    const card = document.createElement("div");
    card.className = "card";
    card.title = pet.type;
    card.style.boxShadow = `0 0 5px 0 #0006, 0 0 15px 0 ${pet.color}`;

    const img = document.createElement("i");
    img.className = pet.icon;
    img.style.color = pet.color;

    const title = document.createElement("h2");
    title.innerText = pet.name;

    const heart = document.createElement("i");
    heart.innerText = pet.likes;
    heart.className = "fa-regular fa-heart likes";

    card.append(img, title, heart);

    box.append(card);
}

