
// Adding Event Handler
document.getElementById('calculation').addEventListener('click', function () {

    //cost amounts
    let foodCost = document.getElementById('food-cost').value;
    const foodAmount = parseFloat(foodCost);

    const rentCost = document.getElementById('rent-cost').value;
    const rentAmount = parseFloat(rentCost);

    const clothesCost = document.getElementById('clothes-cost').value;
    const clothesAmount = parseFloat(clothesCost);


    // total expenses calcilation
    const totalExpenses = foodAmount + rentAmount + clothesAmount;
    const totalSpent = document.getElementById('total-expenses');
    const totalSpentAmount = totalSpent.innerText;
    totalSpent.innerText = totalExpenses;



    // balance calculation
    const monthlyIncome = document.getElementById('monthly-income').value;
    const monthlyEarn = parseFloat(monthlyIncome);

    const balanceAmount = monthlyEarn - totalExpenses;

    const totalBalance = document.getElementById('balance');
    const balance = totalBalance.innerText;
    totalBalance.innerText = balanceAmount;

    //console.log(balanceAmount);
});


