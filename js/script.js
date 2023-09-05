const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


const isValidEmail = email => {
    const re =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return re.test(String(email).toLowerCase());
}



const validateInputs = () =>{
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    if(nameValue === ''){
        setError(name, 'Name is required');
    }else{
        setSuccess(name);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    }else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    }else{
        setSuccess(email);
    }

    if(phoneValue === ''){
        setError(phone, 'Phone number is required');
    }else if(phoneValue.isInteger(phone)){
        setError(phone, 'Enter valid number');
    }else{
        setSuccess(phone);
    }
};