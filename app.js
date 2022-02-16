
// Adding Event Handler
document.getElementById('calculation').addEventListener('click', function () {

    //cost amounts
    let foodCost = document.getElementById('food-cost').value;
    const foodAmount = parseFloat(foodCost);
    const rentCost = document.getElementById('rent-cost').value;
    const rentAmount = parseFloat(rentCost);
    const clothesCost = document.getElementById('clothes-cost').value;
    const clothesAmount = parseFloat(clothesCost);
    // total expenses calculation
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





// error handling  one
if(totalExpenses > monthlyEarn || monthlyIncome < 0|| foodCost < 0 || rentCost < 0 || clothesCost < 0){
    const notify = document.getElementById('notification');
    notify.style.display = "block";
    
};


});

// saving calculation 
document.getElementById('saving-btn').addEventListener('click', function(){
    const monthlyIncome = document.getElementById('monthly-income').value;
    const monthlyEarn = parseFloat(monthlyIncome);
    //console.log(monthlyEarn)

    const savingField = document.getElementById('saving-field').value;
    const savingAmount =parseFloat(savingField);
    //console.log(savingAmount)

    const savingTotal = document.getElementById('saving-value');
    const saving = savingTotal.innerText;

    const savingFinalAmount = savingAmount * monthlyEarn /100;
    savingTotal.innerText = savingFinalAmount;

    //remaining balance calculation
    const remainingTotal = document.getElementById('remaining-value');
    const remaining = remainingTotal.innerText;



    // total expenses
    let foodCost = document.getElementById('food-cost').value;
    const foodAmount = parseFloat(foodCost);
    const rentCost = document.getElementById('rent-cost').value;
    const rentAmount = parseFloat(rentCost);
    const clothesCost = document.getElementById('clothes-cost').value;
    const clothesAmount = parseFloat(clothesCost);
    // total expenses calculation
    const totalExpenses = foodAmount + rentAmount + clothesAmount;

    const remainingBalance = monthlyEarn - (totalExpenses + savingFinalAmount);
    remainingTotal.innerText = remainingBalance;

    const balanceAmount = monthlyEarn - totalExpenses;

    //error handling two

if(savingFinalAmount > balanceAmount || savingField < 0 ){
    const notify = document.getElementById('notification');
    notify.style.display = "block";
}

})


