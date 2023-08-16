//console.log('withsraw.js');
//1, add event listener to the withdraw button


//step-1:--get by event listener
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2:--get
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    //step-3:
    withdrawField.value = '';

    //step-4:--get
    const previousWithdrawAmountElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = previousWithdrawAmountElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
    //step-5:---set
    const totalWithdrawAmount = previousWithdrawAmount + withdrawAmount; 
    previousWithdrawAmountElement.innerText = totalWithdrawAmount;

    //step-6:----get
    const currentTotalBalanceElement = document.getElementById('balance-total');
    const currentTotalBalanceString = currentTotalBalanceElement.innerText;
    const currentTotalBalance = parseFloat(currentTotalBalanceString);
    //step-7:----set
    const newBalanceTotal = currentTotalBalance - withdrawAmount;
    currentTotalBalanceElement.innerText = newBalanceTotal;
  
})