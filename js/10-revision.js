console.clear();

// adding a emojis: win key + .  --> then choose your emoji!
const smiley = [':)', '😊'];
console.log('This is smiley:', smiley);

// Saule sviecia pratimas:

console.log();


const arSvieciaSaule = false;
const arLyja = true;
let kaDaryti = 'Nezinau!';

if (arSvieciaSaule == true) {
    if (arLyja == true) {
    kaDaryti = 'Pasilik namie!';
} else {
    kaDaryti = 'Eik pabegioti!';
}
} else {
    if (arLyja == true) {
        kaDaryti = 'Eik i sporto sale!';
    } else {
        kaDaryti = 'Pailsek namie!';
    }
}

console.log(kaDaryti);