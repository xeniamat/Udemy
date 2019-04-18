var money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

var exp1 = prompt("Введите обязательную статью расходов в этом месяце",""),
    exp2 = prompt("Во сколько обойдется?",""),
    exp3 = prompt("Введите обязательную статью расходов в этом месяце",""),
    exp4 = prompt("Во сколько обойдется?",""); 

    appData.expenses.exp1 = exp2;
    appData.expenses.exp3 = exp4;
    
    alert(appData.budget / 30);