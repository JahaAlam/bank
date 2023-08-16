//, console.log('deposit.js');
//1, add event listener to the deposit button
//2, get deposit amount from the deposit field
//2-5, convert string deposit amount to number Type
//3, clear deposit input field after getting the value
//4. get the previous deposit total
//5, calculate total
//6, get balance and convert to the number 
// 7, calculat  total balance



// step-1:
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step-2:
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString =  depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

// step-3:
depositField.value = '';

//step-4:
const deposiTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = deposiTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString)

//step-5:
const newDepositTotal = previousDepositTotal + newDepositAmount;
deposiTotalElement.innerText = newDepositTotal;

//step-6:
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

const newBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotalElement.innerText = newBalanceTotal;

})