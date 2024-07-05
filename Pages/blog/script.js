document.addEventListener("DOMContentLoaded", function() {
  // Example blog data (replace with your actual data)
  const blogPosts = [
    {
      title: "First Blog Post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      date: "2023-01-01"
    },
    {
      title: "Second Blog Post",
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...",
      author: "Jane Smith",
      date: "2023-02-01"
    }
    // Add more blog post objects as needed
  ];

  const blogPostsContainer = document.querySelector('.blog-posts');

  // Render blog posts
  blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post'); // Optional: Add a CSS class for styling

    postElement.innerHTML = `
      <h2>${blogPosts.title}</h2>
      <p>${blogPosts.content}</p>
      <p><em>By ${blogPosts.author} on ${blogPosts.date}</em></p>
    `;

    blogPostsContainer.appendChild(postElement);
  });
});
