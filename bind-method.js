const kib = {
    id: 101,
    name: 'js kolu armagita',
    money: 5000,
    name: 'rj kibria',
    treatDey: function(expense) {
        this.money = this.money-expense;
        console.log(this)
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
const amitSaha = {
    id: 104,
    money: 10000,
    name: 'amit shah'
}
kib.treatDey(500);
const heroTreatDey = kib.treatDey.bind(heroBalam)
heroTreatDey(500)
heroTreatDey(1500)
heroTreatDey(300)
kib.treatDey(400)

const normalTreatDey = kib.treatDey.bind(normalGolam);
normalTreatDey(500);
const amitTreatDey = kib.treatDey.bind(amitSaha);
amitTreatDey(5000);