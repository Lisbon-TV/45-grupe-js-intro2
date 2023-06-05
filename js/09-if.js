/*
IF - palyginimas

Palyginimo operatoriai:
Visi: >, <, >=, <=, ==, !=, ===, !==
Naudotini: >, <, >=, <=,  ===, !==
Nenaudotini: ==, !=

Sintakse:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ...  else if () {}
if () {} else if () {} ...  else if () {} else {}
*/



console.clear();

const a = 7;
let b = 5; // jei 55 neprintins!

console.log('START');

if (a > b) {
    console.log('Daugiau (a > b)');
}


b = 55;
if (a > b) {
    console.log('Daugiau (a > b)');}
    else {
    console.log('Ne daugiau...');
}

console.log('END');

console.log('................');


// CODE NESTING:
// Cia suvesk false ir true variacijas ir palygink!  


const arSvieciaSaule = true;
const arLyja = false;
let kaDaryti = 'Dar nezinau...';

/*

if (arSvieciaSaule == true) {
    console.log('Dabar yra diena');
    if (arLyja == true) {
        kaDaryti ='Pries eidamas passiimk sketi!';
        }  else {
           kaDaryti ='Geros keliones!';
        }
} else {
    if (arLyja == true) {
        kaDaryti = 'Miegosiu po kaldra...';
    } else {
        kaDaryti = 'Zzzz';
       }
    }

*/

// Kai norime isprintinti viena arba kita reiksme;
// == priskiria ir palygina, cia galima ir nevartoti! 
// Nes (arSvieciaSaule) - priskiria ir palygina by default!

if (arSvieciaSaule == true) {
    console.log('Dabar yra diena');
    if (arLyja == true) {
        console.log('Pries eidamas passiimk sketi!');
        }  else {
        console.log('Geros keliones!');
        }
} else {
    if (arLyja == true) {
        console.log('Miegosiu po kaldra...');
    } else {
        console.log ('Zzzz');
       }
}


// arSvieciaSaule == true;
// true == true
// true

// neigiamus palyginimu geriau nerasyti, nes juos suvokti yra sunkiau!
// == palyginti 
// = priskirti
// visada naudoti const! Nebent, kai tikrai zinai, kada keiti reiksmes!
// su let true ir false gali rodyti nesamones!!

/*
if (arSvieciaSaule == true) {
    console.log ('Dabar yra naktis');   
}   else {
    console.log('Dabar yra diena');
}
*/


console.log('................');
console.log();

if (arLyja) {
    console.log('Pasiimk sketi!');
}   else {
    console.log('Skecio nereikia!');
}


// Reikia isspausdinti savaites dienos pavadinima. 
// Sis variantas netinka, nes turi nodoti code nesting, ziur. kt. var.


const day = 5;
let weekday = 'Nezinau';


if(day == 1) {
    weekday ='Dabar yra Pirmadiens';}

if(day == 2) {
    weekday ='Dabar yra Antradienis';}    

if(day == 3) {
    weekday ='Dabar yra Treciadiens';}    

if(day == 4) {
    weekday ='Dabar yra Ketvirtadiens';}    

if(day == 5) {
     weekday ='Dabar yra Penktadienis';}
     
if(day == 6) {
    weekday ='Dabar yra Sestadienis';} 
   
if(day == 7) {
    weekday ='Dabar yra Sekmadienis';}
    else { weekday = 'Tokios dienos savaiteje nera...';
}  

console.log(weekday);


/* Reik isspausdinti savaites dienos pavadinima.
console.log(kaDaryti);


const day = 6;
let weekday = '';

if (day == 1) {
    weekday = 'Pirmadienis';
} else {
    if (day == 2) {
        weekday = 'Antradienis';
    } else {
        if (day == 3) {
            weekday = 'Treciadienis';
        } else {
            if (day == 4) {
                weekday = 'Ketvirtadienis';
            } else {
                if (day == 5) {
                    weekday = 'Penktadienis';
                } else {
                    if (day == 6) {
                        weekday = 'Sestadienis';
                    } else {
                        if (day == 7) {
                            weekday = 'Sekmadienis';
                        } else {
                            weekday = 'Tokios dienos savaiteje nera...';
                        }
                    }
                }
            }
        }
    }
}

console.log(weekday);
*/

console.log(weekday);

console.log('###################');

const diena = 6;
let kokiaDiena = '...';

if (diena == 1) {
    kokiaDiena = 'pirma';
} else if (diena == 2) {
    kokiaDiena = 'antra';
} else if (diena == 3) {
    kokiaDiena = 'trecia';
} else if (diena == 4) {
    kokiaDiena = 'ketvirta';
} else if (diena == 5) {
    kokiaDiena = 'penkta';
} else if (diena == 6) {
    kokiaDiena = 'sesta';
} else if (diena == 7) {
    kokiaDiena = 'septinta';
} else {
    kokiaDiena = 'Nera tokios dienos...';
}

console.log(kokiaDiena);