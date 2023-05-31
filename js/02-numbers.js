// add "numbers": "nodemon ./js/02-numbers.js", in .json file to linke this file /

console.clear();

/*
NUMBERS - skaiciai

Sveikieji/desimtainiai
Teigiami/neigiami
Mistiniai: Begalybes ir NaN (not-a-number)

Aritmetiniai operatoriai:
+, -, *, /, **

Priskirimo operatoriai:
=, +=, -=, *=, /=, **=

Salia matematikos:
(, )

Kintamuju iniciavimo budai:
const - default
let - naudoti, tik jei reikia keisti reksmes
var - senove, todel niekada nenaudoti, nebent TIKRAI zinai ka darai

*/

console.log(1);
console.log(2);
console.log(3.14);
console.log(2.72);

console.log(-1);
console.log(-2);
console.log(-3.14);
console.log(-2.72);

console.log(Infinity);
console.log(-Infinity);

console.log(NaN);

console.log(2 + 2, 4);
console.log(2 + 2 * 2, 6);
console.log((2 + 2) * 2, 8);

console.log(0.1 + 0.2, 0.3);

console.clear();

// KINTAMIEJI

const amzius = 20;
console.log(amzius);

const saldainiuKiekis = 19;
const saldainiu_kiekis = 18;
const SALDAINIU_KIEKIS = 17;

console.log(saldainiuKiekis);
console.log(saldainiu_kiekis);
console.log(SALDAINIU_KIEKIS);

console.log(amzius);

console.clear();
// Kintamieji: konstantos ir kintamieji;

let pinige = 0;
console.log(pinige);
console.log(pinige);
console.log(pinige);
console.log(pinige);

pinige = 5;
console.log(pinige);
console.log(pinige);
console.log(pinige);
console.log(pinige);

pinige = 20;
console.log(pinige);
console.log(pinige);
console.log(pinige);

pinige = 4 + 3;
console.log(pinige);

pinige = pinige + 3;
console.log(pinige);

pinige = pinige * 4;
console.log(pinige);


console.clear();

let index =0;           // use let as constant will out error msg
console.log(index);

index = index + 1;      // = 0 + 1
console.log(index);

index = index + 2;      // = 1 + 2
console.log(index);

index = index + 3;      // = 3 + 3 
console.log(index);

// and so on...

console.clear();

let frog = 1;
console.log(frog);


frog = 5 + frog;
console.log(frog);

frog = frog + 10;
console.log(frog);

frog = frog + 1;
frog = frog + 2;
frog = frog + 3;
frog = frog + 4;
frog = frog + 5;
console.log(frog);

// Priskirimo operatoriai

frog +=6;       // ??
console.log(frog);

frog +=12;
console.log(frog);

console.clear();

// eg..

let result = 10;
console.log(result);

result += 20;
console.log(result);

result -= 20;
console.log(result);

result /= 5;               // resultatas buv reiksme padalinti is 5
console.log(result);

result *= 5;
console.log(result);

result **= 2;           // reiksme pakelta 2-uoju
console.log(result);

// eg

let x = 2;

x = 4 * (x - 1);
console.log(x);    //ats: 4

/* Taciau galima naudoti, tik kai:

kintamasis  = kintamasis (operatorius) skaicius
kintamasis  operatorius) = skaicius

X -=3;
X*= 5;
*/







