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

// practice a prop in for the first time
for(const prop in bodna){
    console.log(prop, bodna[prop]);
}