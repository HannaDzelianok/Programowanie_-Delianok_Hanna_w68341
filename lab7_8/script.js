
function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var gender = document.getElementById('gender').value;
    var phone = document.getElementById('phone').value;
    var birthdate = document.getElementById('birthdate').value;
    var country = document.getElementById('country').value;

    if (!checkValue(firstName)) {
        alert("Imię jest wymagane");
        return false;
    }
    if (!checkValue(lastName)) {
        alert(" Nazwisko jest wymagane!");
        return false;
    }
    if (!checkValue(email)) {
        alert(" Email jest wymagane!");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Nieprawidłowy adres email");
        return false;
    }
    if (!checkValue(password)) {
        alert(" Hasło jest wymagane!");
        return false;
    }
    if (password.length < 8) {
        alert("Hasło musi zawierać co najmniej 8 znaków!");
        return false;
    }
    if (!checkValue(gender)) {
        alert(" Płeć jest wymagane!");
        return false;
    }
    if (!checkValue(phone)) {
        alert(" Telefon jest wymagane!");
        return false;
    }
    if (phone.length != 9 || isNaN(phone)) {
        alert("Nieprawidłowy numer telefonu!");
        return false;
    }
    if (!checkValue(birthdate)) {
        alert(" Data Urodzenia jest wymagane!");
        return false;
    }
    if (!checkValue(country)) {
        alert(" Kraj jest wymagane!");
        return false;
    }

    alert("Formularz poprawny !");
    return true;
}

function checkValue(value) {
    return (value.trim() !== '');
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}



function validateBirthdate(birthdate) {
    
    var dob = new Date(birthdate);
    
    
    var currentDate = new Date();
    
    
    var age = currentDate.getFullYear() - dob.getFullYear();
    
  
    if (age < 18) {
        return false; 
    } else {
        return true; 
    }
}


var confirmPassword = document.getElementById('confirmPassword').value;

if (!checkValue(confirmPassword)) {
    setError('confirmPasswordError', "Pole Powtórz hasło jest wymagane!");
    return false;
}
clearError('confirmPasswordError');

if (password !== confirmPassword) {
    setError('confirmPasswordError', "Hasła nie pasują do siebie!");
    return false;
}
clearError('confirmPasswordError');


function validateForm() {
    // Pobierz wartości pól formularza
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var gender = document.getElementById('gender').value;
    var phone = document.getElementById('phone').value;
    var birthdate = document.getElementById('birthdate').value;
    var country = document.getElementById('country').value;
    var province = document.getElementById('province').value;
    var address = document.getElementById('address').value;
    var sameAddress = document.getElementById('sameAddress').checked;
    var correspondenceAddress = document.getElementById('correspondenceAddress').value;

    // Sprawdź, czy pola są wypełnione
    if (!checkValue(firstName)) {
        setError('firstNameError', "Pole Imię jest wymagane!");
        return false;
    }
    clearError('firstNameError');

    // Sprawdź inne pola...

    // Jeśli formularz jest poprawny, zwróć true
    alert("Formularz został poprawnie wypełniony!");
    return true;
}

function activateProvince() {
    var country = document.getElementById('country').value;
    var provinceInput = document.getElementById('province');

    if (country) {
        provinceInput.disabled = false;
    } else {
        provinceInput.disabled = true;
        provinceInput.value = '';
        clearError('provinceError');
    }
}

function toggleCorrespondenceAddress() {
    var sameAddress = document.getElementById('sameAddress').checked;
    var correspondenceAddressDiv = document.getElementById('correspondenceAddressDiv');

    if (sameAddress) {
        correspondenceAddressDiv.style.display = 'none';
        clearError('correspondenceAddressError');
    } else {
        correspondenceAddressDiv.style.display = 'block';
    }
}

function setError(id, message) {
    var errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearError(id) {
    var errorElement = document.getElementById(id);
    errorElement.textContent = '';
}

function checkValue(value) {
    return (value.trim() !== '');
}

function allowOnlyDigits(event) {
    var charCode = event.which || event.keyCode;
    if (!(charCode >= 48 && charCode <= 57) && charCode !== 8 && charCode !== 9 && charCode !== 13 && charCode !== 37 && charCode !== 39 && charCode !== 46) {
        event.preventDefault();
    }
}

document.getElementById('phone').addEventListener('input', function(event) {
    allowOnlyDigits(event);
});

