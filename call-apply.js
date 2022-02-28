const kib = {
    id: 101,
    money: 5000,
    name: 'rj kibria',
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
const normalGolam = {
    id: 103,
    money: 8000,
    name: 'golam ali'
}
// call function 
kib.treatDey.call(heroBalam, 500, 100, 50)
kib.treatDey.call(heroBalam, 300, 100, 30)
kib.treatDey.apply(heroBalam, [1000, 100, 30])
kib.treatDey.apply(normalGolam, [800, 80, 80])
