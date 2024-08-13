// profile page 

// load existing data 
console.log(document.getElementById('mainpropic'));

let profileForm = document.getElementById('profile-form');
document.getElementById('profile-username').value = localStorage.getItem('username');
document.getElementById('profile-email').value = localStorage.getItem('useremail');


profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('profile-username').value;
    const email = document.getElementById('profile-email').value;

    localStorage.setItem('username', username);
    localStorage.setItem('useremail', email);

    // image handling

    let profilePic = document.getElementById('prifile-pic').files[0];
    let imagURL = profilePic ? URL.createObjectURL(profilePic) : "Image not found";
    if (imagURL) {
        localStorage.setItem('profileDP', imagURL)
        document.getElementById('mainpropic').src = imagURL;
        alert('Profile updated successfully!');
    }
})
// Load profile picture if exists

if (localStorage.getItem('profileDP')) {
    document.getElementById('mainpropic').src = localStorage.getItem('profileDP');
}
// localStorage.clear();

