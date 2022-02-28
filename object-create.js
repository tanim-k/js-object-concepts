// 1. using object literal
const student = {name:'sakib al', job:'studying', age:30};
// 2. constructor
const person = new Object()
console.log(person);
// 3.
const human = Object.create(student);
const humanNull = Object.create(null);
console.log(human.job);
console.log(humanNull);

// try to make an onj using class 
class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const peop = new People('bosir kha', 76);
console.log(peop);
// create object using fn 
function Manus(name, sex) {
    this.name = name;
    this.sex = sex;
}
const man = new Manus('moti khan', 'female');
console.log(man);

const nayok = {name: 'hero', age:'28', isMarried: false};
Object.entries(nayok)
console.log(Object.entries(nayok))

const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);


const obj1= {module: 35, video:2}; const obj2= {module: 35, video:2};
console.log(obj1 === obj2);


const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend()); 