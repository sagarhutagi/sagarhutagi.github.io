document.addEventListener("DOMContentLoaded", function() {
  const blogPostsUrl = 'blogs.json';

  fetch(blogPostsUrl)
    .then(response => response.json())
    .then(data => {
      const blogPostsContainer = document.getElementById('blog-posts');

      data.forEach(post => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p><em>By ${post.author} on ${post.date}</em></p>`;
        blogPostsContainer.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error fetching blog posts:', error);
    });
});