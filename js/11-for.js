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
