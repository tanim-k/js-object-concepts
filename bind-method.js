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
    treatDey: function(expense, boksis) {
        this.money = this.money-expense-boksis;
        return this.money;
    }
    
};