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


// Code nesting:
// Cia suvesk false ir true variacijas ir palygink!  


const arSvieciaSaule = false;
const arLyja = true;
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

/*
// arSvieciaSaule == true;
// true == true
// true

console.log();

// neigiamus palyginimu geriau nerasyti, nes juos suvokti yra sunkiau!
// == palyginti 
// = priskirti
// visada naudoti const!

if (arSvieciaSaule == false) {
    console.log ('Dabar yra naktis');   
}   else {
    console.log('Dabar yra diena');
}

console.log('................');
console.log();

if (arLyja) {
    console.log('Pasiimk sketi!');
}   else {
    console.log('Skecio nereikia!');
}
*/

// Reikia isspausdinti savaites dienos pavadinima. 


/*
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

*/


/*
console.log();

if(day == 1) {
    console.log('Pirmadiens');
}else {
        if(day == 2) {
            console.log ('Antradienis');
        } else {
            if(day == 3) {
            } else {
                    console.log ('Treciadiens');
                    if(day == 4) {
                    } else { 
                            console.log('Ketvirtadiens');
                            if(day == 5) {
                            } else { 
                                    console.log('Penktadienis');
                                    if(day == 6) {
                                    } else { 
                                            console.log('Sestadienis');
                                            if(day == 7) {
                                              console.log(Sekmadiens);
                                              } else {
                                                        weekday = 'Tokios dienos saviteje nera!';
                                                    }
                                                }
                                            
                                        }
                                    
                                }
                        }
                } 
        }                               
  

console.log(weekday);
*/

const diena = 1;
const kokiaDiena= '...';

/*
if (diena== 1) {
    kokiaDiena ='pirma';
    } else if (diena == 2) {
        kokiaDiena = 'antra';
        if (diena== 3) {
            kokiaDiena ='trecia';
            if (diena== 4) {
                kokiaDiena ='ketvirta';
                if (diena== 5) {
                    kokiaDiena ='penkta';
                    if (diena== 6) {
                        kokiaDiena ='sesta';
                        if (diena== 7) {
                            kokiaDiena ='sekma';
                            if (diena== 1) {
                                kokiaDiena ='pirma';
                                */