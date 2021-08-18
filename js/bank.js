function getInputAmount(inputId){
    const input = document.getElementById(inputId);
    const amount = parseFloat(input.value);

    input.value = '';
    return amount;
}
function updateBalance(transaction_method, transactionAmount){
    const transactionMethod = document.getElementById(transaction_method);
    const totalBalance = document.getElementById('total-balance');
    transactionMethod.innerText = parseFloat(transactionMethod.innerText) + transactionAmount;
    if(transaction == 'deposit'){
        totalBalance.innerText = parseFloat(totalBalance.innerText) + transactionAmount;
    }
    else {
        totalBalance.innerText = parseFloat(totalBalance.innerText) - transactionAmount;
    }
}
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = getInputAmount('deposit-input');

    if(!isNaN(depositAmount) && depositAmount > 0){
        updateBalance('deposit', depositAmount);
    }

});
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInputAmount('withdraw-input');
    console.log(withdrawAmount);

    if(!isNaN(withdrawAmount) && withdrawAmount > 0){
        updateBalance('withdraw', withdrawAmount);
    }
    
});