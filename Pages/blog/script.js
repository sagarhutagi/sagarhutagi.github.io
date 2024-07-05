document.addEventListener("DOMContentLoaded", async () => {
    const spaceId = '6l77mp5tmezx';
    const accessToken = 'aavG9jvena4o0QrpfxU_n9fZE6iz60O_jDqzOApi2Ds';
    const contentType = 'blogPost';  // Ensure this matches the Content Type ID
  
    const url = `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=${contentType}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      console.log('API Response:', data);  // Log the full response
  
      if (!data.items) {
        throw new Error('No items found in the response');
      }
  
      const blogPosts = data.items;
      const blogPostsContainer = document.getElementById('blog-posts');
  
      blogPosts.forEach(post => {
        if (post.fields) {
          const listItem = document.createElement('li');
          const title = post.fields.title || 'No Title';
          const content = post.fields.content || 'No Content';
  
          listItem.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
          blogPostsContainer.appendChild(listItem);
        } else {
          console.warn('Post fields are missing:', post);
        }
      });
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  });
  