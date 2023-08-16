//console.log('withsraw.js');
//1, add event listener to the withdraw button


//step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    //step-3:
    withdrawField.value = '';

    //step-4:
    const previousWithdrawAmountElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = previousWithdrawAmountElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    const totalWithdrawAmount = previousWithdrawAmount + withdrawAmount; 
    previousWithdrawAmountElement.innerText = totalWithdrawAmount;

    //step-5
    const currentTotalBalanceElement = document.getElementById('balance-total');
    const currentTotalBalanceString = currentTotalBalanceElement.innerText;
    const currentTotalBalance = parseFloat(currentTotalBalanceString);

    const newBalanceTotal = currentTotalBalance - withdrawAmount;
    currentTotalBalanceElement.innerText = newBalanceTotal;
  
})