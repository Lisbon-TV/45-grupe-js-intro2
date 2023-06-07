console.clear();


/*
TYPEOF - Nusako duomens tipa!!
*/

function sum(a, b) {
    return a + b;
}

console.log(typeof 5);
console.log(typeof -5);
console.log(typeof 3.14);
console.log(typeof Infinity);  // number
console.log(typeof -Infinity); 
console.log(typeof NaN);       // number
console.log(typeof 'labas');
console.log(typeof true);
console.log(typeof false);
console.log(typeof sum);        // function, nes issiraseme virsuje!
console.log(typeof undefined);  // undefined yra undefined!
console.log(typeof []);         // all arrays yra object
console.log(typeof [1, 2]);
console.log(typeof ['a', 'b']);
console.log(typeof null);       // object
console.log(typeof {});         // object
console.log(typeof { name: 'Jonas' });  // object
console.log(typeof '🚗');       // string
console.log(typeof '');          // string    

console.log('------------');

const a = typeof 5;    // kadangi 5 skaicius, tai ir a yra number!
console.log(a);
console.log(typeof a);

const b = typeof true;  // kadangi true yra boolean, tai ir a yra boolean!
console.log(b);
console.log(typeof b);