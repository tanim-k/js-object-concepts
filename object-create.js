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

// try to make a class 
class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const peop = new People('bosir kha', 76);
console.log(peop);