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