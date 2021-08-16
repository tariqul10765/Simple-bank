const email = document.getElementById('email');
const password = document.getElementById('password');


document.getElementById('submit-btn').addEventListener('click', function(){
    if(email.value == 'tariqul10765@gmail.com' && password.value == 'sample'){
        // go to bank transaction page
        window.location.href = 'bank.html';

        // empty input field
        email.value = '';
        password.value = '';
    }
})