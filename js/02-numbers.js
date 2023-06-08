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

console.clear();

//eg..   neleidzia vel x panaudoti -- ?? ----

let y = 0;
console.log(y);

y = y + 1;
console.log(y);

y += 1;
console.log(y);

y += 1;
console.log(y);

// sitai galima perrasyti ir taip (su + 1 reiksmemis, t.y. padidinam vienu vienetu):

y++;
console.log(y);

y++;
console.log(y);

// galima tada is karto y++ deti i console; kaip pvz su let z = 5:

console.clear();

let z = 5;
console.log(z++);
console.log(z++);
console.log(z++);
console.log(z++);

// jei consoleje (m) poto (m++), tai pirma isspausdins, paskui padidins:

console.clear();

let m = 5;
console.log(m);
console.log(m++);
console.log(m);  // ta pati reiksme 6 su (m) ir (m++)

// n++ ir ++n: ""++"" pozicija paska kada printina ir spausdina
// ++n pirma padidina, paskui spausdina
// n++ atv.

console.clear();

let n = 5;

++n;
console.log(n);

++n;
console.log(n);

++n;
console.log(n);

console.log(n);
console.log(++n);
console.log(n++);
console.log(n--);
console.log(n--);

// n** neturi prasmes, dzn't exist!
// n// neturi prasmes, dzn't exist!

/* kvadratine saknis:

pvz console.log(9 **0.5, 9); 3-ju saknis

console.log(2 * 2 * 2 * 2, 2 ** 4);
console.log(16 ** 0.25, 2)
console.log(8 **0.33333333, 2);
*/

// final exc.

console.clear();

const a = 8;  // skaiciai gali ir atsikartoti! no prob!
const b = 9;
const c = 10;

const d = a + b + c;
console.log(d);

console.clear();

const p1 = 10;
const p2 = 2;
const p3 = 8;
const p4 = 4;
const p5 = 6;

const vidurkis = (p1 + p2 + p3 + p4 + p5) / 5;
console.log(vidurkis);

function intervale(nuo, iki) {
    return iki * (iki + 1) / 2;
}

console.log(intervale(0, 1));
console.log(intervale(0, 2));
console.log(intervale(0, 3));
console.log(intervale(0, 4));
console.log(intervale(0, 5));
console.log(intervale(0, 10));
console.log(intervale(0, 100));
console.log(intervale(0, 1000));
console.log(intervale(0, 1000_000));
console.log(intervale(0, 1000_000_000));
console.log(intervale(0, 1000_000_000_000));
console.log(intervale(0, 1000_000_000_000_000));
console.log(intervale(0, 1000_000_000_000_000_000));



