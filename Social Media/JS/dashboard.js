// Dashboard page 

let postForm = document.getElementById('new-post-form');
const postFeed = document.getElementById('post-feed');
const notificationList = document.getElementById('notification-list');

let posts = [];
let notifications = [];
postForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let caption = document.getElementById('post-text').value;
    let postImage = document.getElementById('post-image').files[0];
    if (caption && postImage) {
        let newpost = {
            caption: caption,
            image: postImage ? URL.createObjectURL(postImage) : null,
            likes: 0,
            comments: [],
            timestamp: new Date().toLocaleString(),
        };
        posts.push(newpost);
        postForm.reset();
       
        displayPost();
    }


})

function displayPost() {
    postFeed.innerHTML = '';
    posts.forEach((post, index) => {
        let postElem = document.createElement('div');
        postElem.className = 'post';
        const image = post.image ? `<img src="${post.image}" class="post-image" alt="post img ">` : '';

        postElem.innerHTML = `
          <p>${post.caption}</p>
                ${image}
                <div class="post-actions">
                    <button class="like-btn" onclick="likePost(${index})"><i class="ri-heart-line"></i>&nbsp; ${post.likes}</button>
                    <button class="comment-btn" onclick="toggleCommentSection(${index})"><i class="ri-chat-1-fill"></i>&nbsp;${post.comments.length} </button>
                </div>
                <div class="comment-section" id="comment-box-${index}" style="display:none;">
                    <input type="text" id="comment-text-${index}" placeholder="Add a comment...">
                    <button onclick="addComment(${index})">Add Comment</button>
                    <div id="comments-${index}">
                        ${post.comments.map(cmt => `<div class="comment">${cmt}</div>`).join('')}
                    </div>
                </div>
                <p>${post.timestamp}</p>`;
        postFeed.appendChild(postElem);
    });
}


window.likePost = (index) => {
    posts[index].likes += 1;
    displayPost();
    notifyUser(`Your post received a new like!`);
}


window.toggleCommentSection = (index) => {
    const commentBox = document.getElementById(`comment-box-${index}`);
    commentBox.style.display = commentBox.style.display === 'none' ? 'block' : 'none';

}


window.addComment = (index) => {
    const commentInput = document.getElementById(`comment-text-${index}`);
    if (commentInput.value) {
        posts[index].comments.push(commentInput.value)
        commentInput.value = '';
        displayPost();
        notifyUser(`Your post received a new comment!`);
    }
}

function notifyUser(message) {
    const notification = document.createElement('li');
    notification.className = 'notification';
    notification.textContent = message;
    notificationList.appendChild(notification);


    setTimeout(() => notification.remove(), 5000);
}


function userdets() {
    let userinfo = [localStorage.getItem('username'), localStorage.getItem('useremail')];
    let userprofilediv = document.getElementById("dets");
    let profileName = document.querySelector("#dets h1");
    let AddedEmail = document.querySelector("#dets h5");
    if (userinfo[0] && userinfo[1]) {
        profileName.innerText =`${userinfo[0] }`
        AddedEmail.innerText =`${userinfo[1] }`
    }
}
userdets();