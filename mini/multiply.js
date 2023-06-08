console.clear();


// First step..., liko: NaN, +-Infinity:
// function multiply(a, b);{
// if (typeof a === 'string') {
//     return 'ERROR';
//  if (typeof a === 'object') 
//     return 'ERROR';
//  if (typeof a === 'boolean') 
//     return 'ERROR';
// }

// const rez = a * b;
// return rez;
// }

// Second step..., supaprastinam first (blacklist!):
// function multiply(a, b);{
// if (typeof a === 'string' {
// || typeof a === 'object'
// || typeof a === 'boolean'
// || typeof a === 'function'
// || typeof a === 'undefined') { 
//     return 'ERROR';
// }

// const rez = a * b;
// return rez;
// }


// Second step..., supaprastinam first (whitelist!):  // panaudok sita ir a kintamajam!
// function multiply(a, b);{
// if (typeof b !== 'number' {
//     return 'ERROR';
// }
// const rez = a * b;
// return rez;
// }


// Third step..., Panaudok virs ir a ir b kintamajam! .. vis dar reikia prigaut NaN ir Infinities... 
// if (typeof a !== 'number' {
//     return 'ERROR';
// if (typeof b !== 'number' {
//     return 'ERROR';
// }
// const rez = a * b;
// return rez;
// }

// Fourth step..., Pririgaunam NaN ir Infinities... 
// if (typeof a !== 'number' {
//     return 'ERROR';
// console.log('->', a, ''+a);  // sutekstinam!
//        // if (a) {
//       // return 'Error';
//       //}
// if (typeof b !== 'number' {
//     return 'ERROR';
// }
// const rez = a * b;
// return rez;
// }

// Fifth step...:

// if (typeof a !== 'number' {
//     return 'ERROR';
// console.log('->', a, ''+a);  // sutekstinam!
//       if ('' +a === 'NaN') ||
//              '' +a === 'Infinity' ||
//              '' +a === '-Infinity') {
//       return 'Error';
//       }
// if (typeof b !== 'number' {
//     return 'ERROR';
// }
// const rez = a * b;
// return rez;
// }

// Sixth step...:

// if (typeof a !== 'number' {
//     return 'ERROR';
// console.log('->', a, ''+a);  // sutekstinam!
//       if ('' +a === 'NaN') ||
//              '' +a === 'Infinity' ||
//              '' +a === '-Infinity') {
//       return 'Error';
//       }
// if (typeof b !== 'number' {
//       if (''+b === 'NaN') ||
//          '' +b === 'Infinity' ||
//          '' +b === '-Infinity') {
//     return 'ERROR';
// }
// const rez = a * b;
// return rez;
// }

// Seventh step...:

// if (typeof a !== 'number' {
//     return 'ERROR';
// console.log('->', a, ''+a);  // sutekstinam!
//       if ('' +a === 'NaN') ||
//              '' +a === 'Infinity' ||
//              '' +a === '-Infinity') {
//       return 'Error: Pirmas parametras turi buti normalus skaicius';
//       }
// if (typeof b !== 'number' {
//       if (''+b === 'NaN') ||
//          '' +b === 'Infinity' ||
//          '' +b === '-Infinity') {
//     return 'ERROR: Antras parametras turi buti normalus skaicius';
// }
// const rez = a * b;
// return rez;
// }


function multiply(a, b) {
    if (typeof a !== 'number' || !isFinite(a)) {
        return 'ERROR: pirmas parametras privalo buti normalus skaicius.';
    }

    if (typeof b !== 'number' || !isFinite(b)) {
        return 'ERROR: antras parametras privalo buti normalus skaicius.';
    }

    const rez = a * b;
    return rez;
}



// console.log(multiply('labas', 2));
// console.log(multiply('5', 2));
// console.log(multiply([], 2));
// console.log(multiply(true, 2));
// console.log(multiply(false, 2));
// console.log(multiply(multiply, 2));
// console.log(multiply(undefined, 2));
// console.log(multiply(7, 'labas'));
// console.log(multiply(7, '5'));
// console.log(multiply(7, []));
// console.log(multiply(7, true));
// console.log(multiply(7, false));
// console.log(multiply(7, multiply));
// console.log(multiply(7, undefined));
// console.log(multiply(NaN, 2));
// console.log(multiply(Infinity, 2));
// console.log(multiply(-Infinity, 2));
// console.log(multiply(7, NaN));
// console.log(multiply(7, Infinity));
// console.log(multiply(7, -Infinity));

console.log('------------');
console.log(multiply(2, 2), '->', 4);
console.log(multiply(7, 5), '->', 35);
console.log(multiply(-7, 5), '->', -35);
console.log(multiply(7, -5), '->', -35);
console.log(multiply(-7, -5), '->', 35);
console.log(multiply(0, -5), '->', 0);
console.log(multiply(0, 5), '->', 0);
console.log(multiply(-5, 0), '->', 0);
console.log(multiply(5, 0), '->', 0);
console.log(multiply(0.5, 0.5), '->', 0.25);
console.log('------------');