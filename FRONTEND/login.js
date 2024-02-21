document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Koristim obične podatke jer jos nemam beckend
    if (username === 'admin' && password === 'admin') {
        document.getElementById('message').innerHTML = 'Uspješno ste prijavljeni!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').innerHTML = 'Pogrešno korisničko ime ili lozinka.';
        document.getElementById('message').style.color = 'red';
    }
});