const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (!email.value || !password.value) {
        alert('All fields must be filled out.');
        return;
    }

    const formDataObject = {
        email: email.value,
        password: password.value
    };

    console.log(formDataObject);
    loginForm.reset();
}

