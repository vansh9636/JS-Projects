// Day 29: Social media app
let loginForm = document.getElementById('login-form');
let PostContainer = document.getElementById('Post-container');
let postForm = document.getElementById('post-form');
let postFeed = document.getElementById('post-feed')
let currentUser = '';
let posts = [];

// handle login form

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let username = document.getElementById('Login-user').value;
    let logPass = document.getElementById('Login-pass').value;
    if (username && logPass) {
        localStorage.setItem("username", username);
        currentUser = username;
        PostContainer.style.display = 'block';
        document.getElementById('Login-container').style.display = 'none';
    }

})

//handle post form

postForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let postUsername = document.getElementById('Postuser').value;
    let postCaption = document.getElementById('postCaption').value;
    let postImage = document.getElementById('post-file').files[0];
    let timestamp = new Date().toLocaleString();
    if (postUsername && postImage) {
        const newPost = {
            username: postUsername,
            caption: postCaption,
            postImage: postImage ? URL.createObjectURL(postImage) : null,
            time: timestamp,
            likes: 0,
            comment: []

        };
        posts.push(newPost);
        displayPost();
    }
})

//disply posted file

function displayPost() {
    postFeed.innerHTML = '';
    posts.forEach((post, index) => {
        let postElem = document.createElement('div');
        postElem.className = `post post-anim ${post.username === currentUser ? 'logged-in' : ''}`;
        const image = post.postImage ? `<img src="${post.postImage}" alt="post img ">` : '';
        postElem.innerHTML = `
          <h3 class="username">${post.username}</h3>
               ${image}
                <span class="timestamp">${post.time}</span>
                <span class="text">${post.caption}</span>
                <div class="actions">
                    <button onclick="likes(${index})"><i class="ri-heart-line"></i>&nbsp; ${post.likes}</button>
                    <button onclick="toggleCommentBox(${index})"><i class="ri-chat-1-fill"></i>&nbsp; ${post.comment.length}</button>
                </div>
                <div id="comment-box-${index}" class="comment-box" style="display:none;">
                    <input type=" text" id="comment-input-${index}" placeholder="Add a comment...">
                    <button onclick="addComment(${index})">Submit</button>
                </div>
                <div id="comments-${index}" class="comments">
                     ${post.comment.map(cmt => `<span>${cmt}</span>`).join('')}
                </div>
        `
        postFeed.appendChild(postElem);
    });

}
// likes count

window.likes = (index) => {
    posts[index].likes += 1;
    displayPost();
}

//commentbox 

window.toggleCommentBox = (index) => {
    const commentBox = document.getElementById(`comment-box-${index}`);
    commentBox.style.display = commentBox.style.display === 'none' ? 'block' : 'none';

}

// comment count

window.addComment = (index) =>{
    const commentInput = document.getElementById(`comment-input-${index}`);
    if (commentInput.value) {
        posts[index].comment.push(commentInput.value)
        commentInput.value = '';
        displayPost();
    }
}

// Initialize with stored username if exists
if (localStorage.getItem('username')) {
    currentUser = localStorage.getItem('username');
    PostContainer.style.display = 'block';
    document.getElementById('Login-container').style.display = 'none';
}
// localStorage.clear();