const mug = {color: 'green', isClean:false, size: 'big'};
const keys = Object.keys(mug);
const values = Object.values(mug);
console.log(keys, values);
// pairs key values 
const pairs = Object.entries(mug);
console.log(pairs);
// seal property of obj 
// Object.seal(mug);
Object.freeze(mug);
// change values 
mug.size = 'small'
// delete object property
delete mug.size;
console.log(mug)
