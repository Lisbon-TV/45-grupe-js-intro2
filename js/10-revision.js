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

/* Sintakse:
(pirmas if'as)Jei patinka (Krepsinis)
    ir, jei nori bilietu, tada -> ka, daryti?
    antraip, (patinka, bet nenori), tada -> ka, daryti?
(pirmas if'as)Taciau /kitaip, 
    jei (ne)patinka - >
    ir nenori. 
*/

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

// Code nesting: isprintinti menesio pavadinima pagal skaciu metuose:

const number = 13;
let month = '';

// if (month == 1) {
//     month = 'January';
// } else {
//     month = 'Febuary';
// }
// console.log(month);

if (number == 1) {
    month = 'January';
} else {
    if (number == 2) {
        month = 'February';
    } else {
        if (number == 3) {
            month = 'March';
        } else {
            if (number == 4) {
                month = 'Arpil';
            } else {
                if (number == 5) {
                    month = 'May';
                } else {
                    if (number == 6) {
                        month = 'June';
                    } else {
                        if (number == 7) {
                            month = 'July';
                        } else {
                            if (number == 8) {
                                month = 'August';
                            } else {
                                if (number == 9) {
                                    month = 'September';
                                } else {
                                    if (number == 10) {
                                        month = 'October';
                                    } else {
                                        if (number == 11) {
                                            month = 'November';
                                        } else {
                                            if (number == 12) {
                                                month = 'December';
                                            } else {
                                                month = "There's no number assigned to this month!"; 
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(month);

console.log();


// Reikia isspausdinti visus teigiamus lyginius vienazenklius skaicius. 
// 0, 2, 4, 6, 8


// Reikia isspausdinti visus teigiamus lyginius vienazenklius skaicius atbuline tvarka. 
// 8, 6, 4, 2, 0


// kokia yra skaiciu suma nurodytame intervale (imtiniai)?

// const start = 0;
// const end = 10 ;
// const step = 1;

// Uzduotis: Koks pazymiu vidurkis:
// SIA UZDUOTI REIKIA, NAKTI PAZADINUS, SUPRASTI!!!

const marks = [10, 2, 5, 4, 6];


 // Kiek skaiciu yra teigiamu?
//                0   1  2   3   4  5   6   7
const numbers = [10, -7, 5, 77, 13, -9, 0, 14];


 /* 
 Kiek yra zodziu, kurie trumpesni, nei "Labas"?
 Kiek yra zodziu, kurie ilgesni, nei "Labas"?
 Kiek yra zodziu, kurie yra tokio pat ilgio, nei "Labas"?
 Pavyzdinis zodis gali buti kintamas. 
 */

 const dictionary = ['Labas', 'rytas', 'sakau', 'tau', 'mano', 'mielas', 'mieste', 'Ka', 'tu', 'ka', 'vakare'];

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


// for(let i = 0; i < masyvas1.length; i++) {
//     if(masyvas1[i] === 1)
//       console.log('Skaicius yra vienas');
// }
console.log('................');

const masyvas1 = [1, 1, 1];

let map1 = {};                                                          
for (let i = 0; i < masyvas1.length; i++) {
    if (!map1[masyvas1[i]]){
        map1[masyvas1[i]] = 1 
    } else {
        map1[masyvas1[i]] += 1 
    }
}
console.log(map1);

console.log();

let map2 = {}; 

const masyvas2 = [1, 2, 2, 3];

let map = {};                                                          
for (let i = 0; i < masyvas2.length; i++) {
    if (!map2[masyvas2[i]]){
        map2[masyvas2[i]] = 1 
    } else {
        map2[masyvas2[i]] += 1 
    }
}
console.log(map2);

console.log();


const masyvas3 = [5, 4, 3, 2, 1];

let map3 = {};                                                          
for (let i = 0; i < masyvas2.length; i++) {
    if (!map3[masyvas3[i]]){
        map3[masyvas3[i]] = 1 
    } else {
        map3[masyvas3[i]] += 1 
    }
}
console.log(map3);

console.log();


const masyvas4 = [5, 4, 3, 2, 1, 1, 1, 1, 1, 2, 2, 3];

let map4 = {};                                                          
for (let i = 0; i < masyvas2.length; i++) {
    if (!map4[masyvas4[i]]){
        map4[masyvas4[i]] = 1 
    } else {
        map4[masyvas4[i]] += 1 
    }
}
console.log(map4);
console.log('................');



