// reginster page 

let registerForm = document.getElementById('register-form');
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let userEmail = document.getElementById('email').value;
    let userPass = document.getElementById('password').value
    console.log(username, userEmail, userPass);

    if (username && userEmail && userPass) {
        localStorage.setItem('username', username);
        localStorage.setItem('useremail', userEmail);
        localStorage.setItem('userpass', userPass);
        alert('Account created successfully !');
        window.location.href = 'login.html';
    }
    else {
        alert('please fill in all fields.');
    }
})
localStorage.clear();
