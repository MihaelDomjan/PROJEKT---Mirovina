document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var birthdate = document.getElementById('birthdate').value;
    var address = document.getElementById('address').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;

    // Ovdje bi se izvršila provjera podataka i registracija korisnika.
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Date of Birth: " + birthdate);
    console.log("Address: " + address);
    console.log("Phone Number: " + phoneNumber);
    console.log("Password: " + password);

    document.getElementById('message').innerHTML = 'Uspješno ste registrirani!';
    document.getElementById('message').style.color = 'green';
});