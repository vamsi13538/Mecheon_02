const submit = document.getElementById('submitted');
submit.addEventListener('click', submitting);
            
    function submitting(){
        const email = document.getElementById('emailed').value;
            if(email === ''){
                alert('Please Enter Your Email !')
            }else{
                submit.textContent = 'Subscribed';
            alert("Your Email Is Sumitted Successfully :) 'Click Ok To Continue' ");
            }
    }