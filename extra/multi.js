const multiplier = 3;
let number = 0;

//gali prideti ir kitus elementus ir juos itraukti:
const isfunny = true;

const lentele = `
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}`;

//export default (lentele); 
// -> default exportavimas

// -> vardinis exportavimas, viska, ka turiu, t.y. irgi visa lentele
// -> gali prideti ir kitus elementus per kableli!
//export {lentele, multiplier};
// jei daugiau elementuotu, galimas atvaizdavimo budas:

export {
    lentele,
    multiplier,
    number,
    isfunny};

/* also:
export {
    lentele,
    multiplier,
    number,
};
*/
