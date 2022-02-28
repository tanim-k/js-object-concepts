const kib = {
    id: 101,
    money: 5000,
    name: 'rj kibria',
    treatDey: function(expense) {
        this.money = this.money-expense;
        console.log('hi',this)
        return this.money;
    }
    
};
const heroBalam = {
    id: 102,
    money:6000,
    name: 'hero balam'
}
const normalGolam = {
    id: 103,
    money: 8000,
    name: 'golam ali'
}
// call function 
kib.treatDey.call(heroBalam, 500)
