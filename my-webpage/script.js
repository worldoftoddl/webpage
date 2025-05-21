// script.js

document.addEventListener('DOMContentLoaded', function () {
    const postButton = document.getElementById('postButton');
    const postInput = document.getElementById('postInput');
    const posts = document.getElementById('posts');

    postButton.addEventListener('click', function () {
        const text = postInput.value.trim();
        if (text) {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.textContent = text;
            posts.prepend(postDiv);
            postInput.value = '';
        }
    });
});