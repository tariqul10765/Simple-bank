
document.getElementById('submit-btn').addEventListener('click', function(){
    if(email.value == 'a@gmail.com' && password.value == 'root'){
        // get input fields
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        
        // go to bank transaction page
        window.location.href = 'bank.html';

        // empty input field
        email.value = '';
        password.value = '';
    }
})