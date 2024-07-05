document.addEventListener("DOMContentLoaded", async () => {
    const spaceId = '54gt9wkt1tyt';
    const accessToken = 'liOQ_Dt7jUkL4Ce8Y_fbWWQqm_8tHoHunbOujFuUUE0';
    const contentType = 'blogPost';
  
    const url = `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=${contentType}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const blogPosts = data.items;
      const blogPostsContainer = document.getElementById('blog-posts');
  
      blogPosts.forEach(post => {
        const listItem = document.createElement('li');
        const title = post.fields.title;
        const content = post.fields.content;
  
        listItem.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
        blogPostsContainer.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  });
  