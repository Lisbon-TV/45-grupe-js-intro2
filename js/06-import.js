console.clear();

import count from '../extra/number.js';
import str from '../extra/string.js';

//vardinis importavimas, pav 'lentele', turi buti kaip in source faile:
//gali prie lenteles importuoti ir kitus elementus: multiplier, number, etc.
import {lentele, multiplier, number, isfunny} from '../extra/multi.js';

// dedault import 
// import lentele from '../extra/multi.js';
// import lentele from '../extra/multi.js'; 
// -> galiu exportuoti pagal savo pav, kuris turi buti unikalus, 
// kad per seach susirastumem in vscode!
// -> tada console.log(multi);

console.log(count);
console.log(str);

// default import
// console.log(lentele);

// vadinis importavimas

console.log(lentele);
// jei nori istraukti tik multiplier reiksme:
console.log(multiplier);
// analogiskai ->:
console.log(number);
console.log('isfunny', isfunny);




