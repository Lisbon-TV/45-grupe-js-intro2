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

console.log();

// Pica ar sokiai: 

console.log(kaDaryti);

const arAtvyks = false;
const busAlkanas = true;
let ruostiVakariene = '';

if (arAtvyks == true) {
    if (busAlkanas == true) {
    ruostiVakariene = 'Pakviesk i restorana!';
} else {
    ruostiVakariene = 'Pietausiu namuose.'
}
} else {
    if(busAlkanas == true) {
        ruostiVakariene = 'Pietausime picerijoje'
    } else {
        ruostiVakariene = 'Eisim i sokius!';
    }
} 

console.log(ruostiVakariene);

console.log();

// Nori - nenori, patinka - nepatinka:

const arPatinka = false;
const arNori = false;
let atiduotiBilietus = 'Dar anksti pasakyti';

if (arPatinka == true) {
    if (arNori == true) {
        atiduotiBilietus = 'Dovanosiu bilietus i Kresinio varzybas';
    } else {
        atiduotiBilietus = 'Paklausiu, kodel ne? Gal vis delto nores?';
    }
} else {
    if (arNori == true) {
        atiduotiBilietus = 'Dovanosiu bilietus, gal patiks!';
    } else {
        atiduotiBilietus = 'Pasiliksiu sau!';
    }
}

console.log(atiduotiBilietus);

console.log();
