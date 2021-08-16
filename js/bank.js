const depositInput = document.getElementById('deposit-input');
const withdrawInput = document.getElementById('withdraw-input');

const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');
const totalBalance = document.getElementById('total-balance');

document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = parseFloat(depositInput.value);
    if(depositInput.value != ''){
        deposit.innerText = parseFloat(deposit.innerText) + depositAmount;
        totalBalance.innerText = parseFloat(totalBalance.innerText) + depositAmount;

        depositInput.value = '';
    }

});
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = parseFloat(withdrawInput.value);

    if(withdrawInput.value != ''){
        withdraw.innerText = parseFloat(withdraw.innerText) + withdrawAmount;
        totalBalance.innerText = parseFloat(totalBalance.innerText) - withdrawAmount;

        withdrawInput.value = '';
    }
    
});