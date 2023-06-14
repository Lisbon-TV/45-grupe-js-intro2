console.clear();

function includes(list, needle){
    for(let i = 0; i < list.length; i++) {
    if (list[i] === needle) {
    return true;
    }
}
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

array.prototype.max = function () {
    //console.log(a);
    //console.log(this);
let res = Infinity;
    for (let i =0; i < this.length; i++){
        if (this[i] > res) {
            res = this[i];
        }
    }
    return res;
};

console.log([1, 2, 3, 0, -2].max(1), '->', 3);
console.log([5, 5, 5, 5].max(), '->', 3);
