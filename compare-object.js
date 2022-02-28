const first ={a: 1, b: 4};
const second ={a: 1, b: 4};
const third = first;

if(first === third){
    console.log('objects are equal');
}
else{
    console.log('objects are different');
}
console.log(JSON.stringify(first));
console.log(JSON.stringify(second));
if(JSON.stringify(first) === JSON.stringify(second)){

}