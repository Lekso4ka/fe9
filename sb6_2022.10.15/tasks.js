/*
    q 9.9
*/
let sentence = "Завтра будет лучше чем вчера";
let words = [];
let str = "";

for (let i = 0; i < sentence.length; i++) {
    // console.log(i, sentence[i]);
    if (sentence[i] === " ") {
        words.push(str);
        str = "";
    } else {
        str += sentence[i];
    }
    // console.log(str, words);
}
words.push(str);

console.log(words);

/*
    q 9.6
*/

let cnt = 0;
let list = [];
while (cnt++ < 100) {
    list.push(cnt);
} 
console.log(list);
// https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D1%88%D0%B5%D1%82%D0%BE_%D0%AD%D1%80%D0%B0%D1%82%D0%BE%D1%81%D1%84%D0%B5%D0%BD%D0%B0

let simple = [];

for (let i = 0, len = list.length; i < len; i++) {
    if (list[i] === 1) {
        continue;
    } else if (typeof list[i] === "number") {
        for (let j = i; j < len; j++) {
            if (i === j) {
                simple.push(list[i]);
                continue;
            } else if ( list[j] % list[i] === 0) {
                list[j] = false;
            }
        }
    }
}

let sum = 0;
for (let v of simple) {
    sum += v;
}
console.log(sum)


// 1 2 => 3 false 5 false 7 false ...
// 1 2 3 => false 5 false 7 false false false 11
// => 2 3 5

console.log(simple);

/*
    q 9.17
*/

let obj =  {
    "Яблоко": "фрукт",
    "Арбуз": "ягода",
    "Помидор": "овощ",
    "Огурец": "овощ",
    "Вишня": "ягода"
}


let text = `В Камеральном Описании Крыма… 1784 года в составе Дин Керченскаго кадылыка Кефинского каймаканства записана только деревня Беяк Сален — видимо, в то время Маяк-Салын и Паша-Салын считались за одно поселение. После присоединения Крыма к России (8) 19 апреля 1783 года, (8) 19 февраля 1784 года, именным указом Екатерины II сенату, на территории бывшего Крымского Ханства была образована Таврическая область и деревня была приписана к Левкопольскому, а после ликвидации в 1787 году Левкопольского — к Феодосийскому уезду Таврической области. После Павловских реформ, с 1796 по 1802 год, входила в Акмечетский уезд Новороссийской губернии. По новому административному делению, после создания 8 (20) октября 1802 года Таврической губернии, Паша-Салын был включён в состав Акмозской волости Феодосийского уезда, но в Ведомости о числе селений, названиях оных, в них дворов… состоящих в Феодосийском уезде от 14 октября 1805 года не записан. На военно-топографической карте генерал-майора Мухина 1817 года деревня Паша салы обозначена с 18 дворами[11]. После реформы волостного деления 1829 года Паша Салын, согласно «Ведомости о казённых волостях Таврической губернии 1829 года», отнесли к Чурубашской волости (переименованной из Аккозской)[12]. Видимо, вследствие эмиграции крымских татар в Турцию[13], деревня опустела и на карте 1836 года в деревне 9 дворов[14], а на карте 1842 года Паша Салын обозначен условным знаком «малая деревня», то есть, менее 5 дворов[15].`

let chars = {}

for (let i = 0; i < text.length; i++) {
    let ch = text[i].toLowerCase();
    if (chars[ch]) {
        chars[ch]++; 
    } else {
        chars[ch] = 1;
    }
    // console.log(ch, chars[ch]);
}
console.log(chars);

let hash = {}; // Алгоритм частотного словаря (хэш-таблица)

for (let k in obj) {
    let val = obj[k];
    if (hash[val]) {
        hash[val]++;
    } else {
        hash[val] = 1;
    }
}
console.log(hash);

// v2
for (let k in obj) {
    hash[obj[k]] = hash[obj[k]] ? hash[obj[k]] + 1 : 1;
}
console.log(hash);


// arr[7].name => объект внутри массива
// arr[2][0] => массив внутри массива

/*
    q 9.7
*/

list = [2, 45, 3, 23, 6];
let max = -Infinity; // Math.max(...list);
let min = Infinity; // Math.min(...list);
for (let el of list) {
    console.log("max", max);
    max = Math.max(max, el); // 2 45
    min = Math.min(min, el);
}
console.log(max * min);

/*
    q 9.15
*/
list = ["Лёша", "default", "полке", "клопа", "нашёл"];
sum = 0;

for (let el of list) {
    if (el.toLowerCase() === "default") {
        continue;
    }
    sum++;
}

console.log(sum);

/*
    q 9.16
*/

list = ["почтовый","желание","абсолютный","закрытый"];
let word = "";

for (let w of list) {
    word += w[0];
}

console.log(word);