// login page 
let loginForm = document.getElementById("login-form");

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let loginuser = document.getElementById('login-username').value;
    let loginpass = document.getElementById('login-password').value;
    let storedusname = localStorage.getItem('username');
    let storeduspass = localStorage.getItem('userpass');
    if ((loginuser === storedusname) && (loginpass === storeduspass)) {
        localStorage.setItem('loggedIn', true);
        window.location.href = 'dashboard.html';
    }
    else {
        alert('Invalid username or password.');
    }
})

