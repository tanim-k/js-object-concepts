// console.log(this);
const kib = {
    id: 101,
    money: 6000,
    name: 'rj kibria',
    treatDeyArrow: () => {
        console.log(this)
    },
    treatDeyInside: function() {
        const myArrow = () => console.log(this);
        myArrow()
    },
    treatDey: function(expense, tips, tax) {
        this.money = this.money-expense-tips-tax;
        console.log('hi',this)
        return this.money;
    }
    
};
const heroBalam = {
    id: 102,
    money:6000,
    name: 'hero balam'
}
// kib.treatDey(1000, 100, 50)
// just to check window value for this 
function add(){
    console.log(this)
}