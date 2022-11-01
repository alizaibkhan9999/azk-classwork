/*     ... these 3 dots make copy of arry or object and due to this our orignal array or object not disturb.
it will not cause duplication it make a refrence and use this refrenece for push or some thing else*/
const aar1 = [`root`, `branches`, `leaves`];
let anotherarr = [...aar1, `apple`];
console.log(anotherarr);
