const bodna = {
    color: 'green', 
    isClean:false, 
    size: 'big'
};
// recise for loops 
/* 
1. for(let i=0; i<10; i++){};
2. for(const number of numbers){} its for anarray
3. for(const prop in student){} its for onject
*/

// practice a 'prop in' for the first time
for(const prop in bodna){
    console.log('prop in:', prop, bodna[prop]);
}
// prop in using:
const keys = Object.keys(bodna);
console.log(keys);
for(const prop of keys) {
    console.log(prop, bodna[prop]);
}
// use entries and for of to create loop
const entries = Object.entries(bodna);
console.log(entries);
for(const [key, value] of Object.entries(bodna)){
    console.log(key, value);
}