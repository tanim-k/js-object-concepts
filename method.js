const student = {
    id: 101,
    name: 'js kolu armagita',
    money: 5000,
    major: 'mathematics',
    isRich: false,
    subject: ['english','economics', 'math101'],
    bestFriend: {
        name: 'mundu',
        major: 'mathematics',
    },
    takeExam: function(){
        console.log(this.name,'taking exam')
    },
    treatDey: function(expense, boksis) {
        this.money = this.money-expense-boksis;
        return this.money;
    }
    
};
// assign object properties: obj name [.] method name
student.takeExam()
const remaining1 = student.treatDey(2000, 100);
const remaining2 = student.treatDey(1000, 50);
console.log(remaining2);
