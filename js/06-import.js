console.clear();

import count from '../extra/number.js';
import str from '../extra/string.js';

// vardinis importavimas, pav 'lentele', turi buti kaip in source faile:
// gali prie lenteles importuoti ir kitus elementus: multiplier, number, etc.

//import {lentele, multiplier, number, isfunny} from '../extra/multi.js';

// dedault import 
// import lentele from '../extra/multi.js';
// import lentele from '../extra/multi.js'; 
// -> galiu exportuoti pagal savo pav, kuris turi buti unikalus, 
// kad per seach susirastumem in vscode!
// -> tada console.log(multi);

// kai vadiniam importavime padvadinimas 'lentele' sutampa mano pav. faile!:
const lentele ='Mano lentele NELIESTI!';
// tada: keiciam: lentele as ... (savo pav.):
import {lentele as table, multiplier, number, isfunny} from '../extra/multi.js';

console.log(count);
console.log(str);

// default import
// console.log(lentele);

/* vadinis importavimas, cia console taip pat:
*console.log(lentele);
    jei nori istraukti tik multiplier reiksme:
console.log(multiplier);
     analogiskai ->:
console.log(number);
console.log('isfunny', isfunny);
*/

console.log(table);




