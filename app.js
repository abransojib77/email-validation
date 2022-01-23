function validation() {
    const email = document.getElementById('emailField').value
    const regEx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(regEx)) {
        alert('Email is match')
    }
    else if (email === '') {
        alert('Please put your email')
    }
    else {
        alert('Email did not matched')
    }

}