/*
(BUTINA!!) moketi mintinai:
- at
- flat
- includes
- indexOf
- join
- push
- reverse
- slice

- filter
- forEach
- map
- reduce
- sort
*/

console.clear();

function includes(list, needle) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === needle) {
            return true;
        }
    }

    return false;
}

console.log(includes([1, 2, 3], 0), '->', false);
console.log(includes([1, 2, 3], 1), '->', true);
console.log(includes([1, 2, 3], 2), '->', true);
console.log(includes([1, 2, 3], 3), '->', true);
console.log(includes([1, 2, 3], 4), '->', false);

console.log([1, 2, 3].includes(0), '->', false);
console.log([1, 2, 3].includes(1), '->', true);
console.log([1, 2, 3].includes(2), '->', true);
console.log([1, 2, 3].includes(3), '->', true);
console.log([1, 2, 3].includes(4), '->', false);

// creating your own method, or a peak in how it's been created:
Array.prototype.max = function max() {
    let res = -Infinity;

    for (let i = 0; i < this.length; i++) {
        if (this[i] > res) {
            res = this[i];
        }
    }

    return res;
};

Array.prototype.min = function min() {
    let res = Infinity;

    for (let i = 0; i < this.length; i++) {
        if (this[i] < res) {
            res = this[i];
        }
    }

    return res;
};

console.log([1, 2, 3, 0, -2].max(1), '->', 3);
console.log([5, 5, 5, 5].max(), '->', 5);

console.log([1, 2, 3, 0, -2].min(1), '->', -2);
console.log([5, 5, 5, 5].min(), '->', 5);

console.log(Array.prototype.max);
console.log(Array.prototype.includes);
console.log(Array.prototype.at);

console.clear();

function indexOf(list, needle) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === needle) {
            return i;
        }
    }

    return -1;
}

console.log(indexOf([1, 2, 3], 0), '->', -1);
console.log(indexOf([1, 2, 3], 1), '->', 0);
console.log(indexOf([1, 2, 3], 2), '->', 1);
console.log(indexOf([1, 2, 3], 3), '->', 2);
console.log(indexOf([1, 2, 3], 4), '->', -1);

console.log([1, 2, 3].indexOf(0), '->', -1);
console.log([1, 2, 3].indexOf(1), '->', 0);
console.log([1, 2, 3].indexOf(2), '->', 1);
console.log([1, 2, 3].indexOf(3), '->', 2);
console.log([1, 2, 3].indexOf(4), '->', -1);

console.clear();

function numberLength(number) {
    return ('' + number).length;
}

console.log(numberLength(5), '->', 1)  // skaiciai ivilkti i skliaustelius!
console.log(numberLength(12), '->', 2)
console.log(numberLength(9999), '->', 4)

Number.prototype.length = function length() {
    return ('' + this).length;
}

console.log((5).length(), '->', 1)
console.log((12).length(), '->', 2)
console.log((9999).length(), '->', 4)

///////////////////////////////////////
console.log();
console.log('Typical array methods:')
console.log();
///////////////////////////////////////

console.log('flat');
const double = [
    5,
    4,
    [7, [8, 88, 88], 9],
    3,
    [1, 2],
    0,
];
console.log(double.flat());
console.log(double.flat().flat());
console.log(double.flat(2));

const masyvas = [10, 2, 8, 4, 6];

console.log('at');
console.log(masyvas.at(1));
console.log(masyvas.at(-1));

console.log('join');
console.log(masyvas.join());
console.log(masyvas.join('-'));
console.log(masyvas.join(' '));
console.log(masyvas.join(' -==- '));

console.log('push');
const last1 = masyvas.push(10);
console.log(masyvas, last1);

const last2 = masyvas.pop();
console.log(masyvas, last2);

console.log('shift');
const last3 = masyvas.shift();
console.log(masyvas, last3);

console.log('unshift');
const last4 = masyvas.unshift(0); //???
console.log(masyvas, last4);

console.log('reverse');
masyvas.reverse();
console.log(masyvas);       // reversina, pateikia is galo i prieki. 

console.log('slice');
const x = masyvas.slice(1, -1); // pirma numetem ir paskutini numetem
console.log(x);

console.log('splice');
console.log(masyvas);
const y = masyvas.splice(2, 2, 'x', 'y', 'z'); // nuo kelinto, uz keliu iterpt, ka iterpti: x y z.
console.log(y, masyvas);