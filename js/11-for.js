console.clear();

/*

FOR - Ciklas, kuris kartoja procesus n-kartu.

For form:
for (1;2;3) {     // -> po antro kablelio infinate loop, delto nenaudoti auto-save nustatymuose!
    // logikos blokas
}

1) inicijuojame kintamaji pasikartokuimu kiekiui skaiciuoti 
(a.k.a., tai kelintas dabar kartas?)
2) ar kartoti? jei tenkina - kartojam, jei ne- baigiam.
3) tai kaip keisti 1) dalies kintamaji

*/

const text = 'Happy birthday';

console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);

console.log('................');

// 99 kartus - > console.log(text);

console.log('................');


for (let i = 0; i < 5; i = i + 1) {
    // console.log(text);
    console.log(i, text);
}

console.log('................');


for (let i = 10; i < 17; i = i + 1) {
    console.log(`${i}), va ir tiek...`);
}

console.log('................');


for (let x=0; x<=5; x++) {   // dazniausiai ++ bus gale
    console.log(x + '...');
}

console.log('................');

// Reikia isspausdinti visus teigiamus lyginius vienazenklius skaicius. 
// 0, 2, 4, 6, 8

for (let n=0; n<=8; n+=2)
console.log(n);

// Reikia isspausdinti visus teigiamus lyginius vienazenklius skaicius atbuline tvarka. 
// 8, 6, 4, 2, 0

console.log('................');

// for (let m=8; m>=0; m-=2)
for (let m=8; m> -1; m-=2)
console.log(m);

console.log('................');

// kokia yra skaiciu suma nurodytame intervale (imtiniai)?

const start = 0;
const end = 10 ;
const step = 1;
let sum = 0;

// for (let i=0; i<=10; i++) {
//     console.log(i);
// }

console.log('................');

for (let i = start; i <= end; i += step) {
    sum += i;
    console.log('->', i, sum);
}

console.log(sum);

console.log('................');

// Uzduotis: Koks pazymiu vidurkis:
// SIA UZDUOTI REIKIA, NAKTI PAZADINUS, SUPRASTI!!!

const marks = [10, 2, 5, 4, 6];
let sumOfMarks = 0;

// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);
// console.log('->', marks.length);

for (let i = 0; i < marks.length; i++) {
    //console.log(i, marks, marks[i]);
    const mark = marks[i];
    sumOfMarks += mark;
}

//  const sumOfMarks = 30;
//  const totalMarks = 5; 
//  const avarageMarks = 6;


 const totalMarks = marks.length;
 const mean = sumOfMarks / totalMarks;

 console.log(`The mean of total marks is  ${mean}`);

 console.log('................');

 // Kiek skaiciu yra teigiamu?
//                0   1  2   3   4  5   6   7
const numbers = [10, -7, 5, 77, 13, -9, 0, 14];
let kiek = 0;

 for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
        if (number >=0) {
            kiek++;
    } else {
        console.log('Nieko nedarau, ness..', number);
    }
 }

 console.log('Kiek:', kiek)

 console.clear();

 /* 
 Kiek yra zodziu, kurie trumpesni, nei "Labas"?
 Kiek yra zodziu, kurie ilgesni, nei "Labas"?
 Kiek yra zodziu, kurie yra tokio pat ilgio, nei "Labas"?
 Pavyzdinis zodis gali buti kintamas. 
 */

 const dictionary = ['Labas', 'rytas', 'sakau', 'tau', 'mano', 'mielas', 'mieste', 'Ka', 'tu', 'ka', 'vakare'];

 let short = 0;
 let same = 0;
 let long = 0;
 const word = 'Labas';
 const span = word.length;

 for (let i = 0; i < dictionary.length; i++) {
    const word = dictionary[i];
    if (word.length === span) {
        same++;
    } else if (word.length < span) {
        short++;
    } else {        // else if nebereika, nes jau lieka visi kit
        long++;     // else reikalingas, nes dara rodys visus zodzius!   
    }
 }

 console.log('Shorter words than "Labas" are:', short);
 console.log('Longer words than "Labas" are:', same);
 console.log('Words that are same length like "Labas" are:', long);


 // arba, kaip klaseje:
console.log();

let trumpi = 0;
let toksPat = 0;
let ilgu = 0;
const zodis = 'Labas';
const ilgis = zodis.length;

for (let i = 0; i < dictionary.length; i++) {
    const word = dictionary[i];

    if (word.length === ilgis) {
        toksPat++;
    } else if (word.length < ilgis) {
        trumpi++;
    } else {
        ilgu++;
    }
}

console.log('Trumpesniu zodziu:', trumpi);
console.log('Tokio pat ilgio zodziu:', toksPat);
console.log('Ilgesniu zodziu:', ilgu);

console.log();


// ## UZDUOTIS:
// Kiek duotas masyvas turi ieskomo skaiciaus atveju (kiekio)?
// m1:1 -> 3
// m1:2 -> 0
// m1:3 -> 0
// m2:1 -> 1
// m2:2 -> 2
// m2:3 -> 1
// m4:1 -> 5
// m4:2 -> 3
// m4:3 -> 2

const masyvas1 = [1, 1, 1];
const masyvas2 = [1, 2, 2, 3];
const masyvas3 = [5, 4, 3, 2, 1];
const masyvas4 = [5, 4, 3, 2, 1, 1, 1, 1, 1, 2, 2, 3];

