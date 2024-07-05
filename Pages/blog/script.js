// Import the Contentful SDK
import * as contentful from 'contentful';

// Configure Contentful client
const client = contentful.createClient({
  space: '6l77mp5tmezx',
  accessToken: 'aavG9jvena4o0QrpfxU_n9fZE6iz60O_jDqzOApi2Ds',
});

// Function to fetch and display blog posts
async function fetchBlogPosts() {
  try {
    const entries = await client.getEntries({
      content_type: 'BlogPost',  // Replace with your Content Type ID
    });

    console.log('API Response:', entries);  // Log the full response to inspect

    if (entries.items.length === 0) {
      throw new Error('No items found in the response');
    }

    const blogPosts = entries.items;
    const blogPostsContainer = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
      const listItem = document.createElement('li');
      const title = post.fields.title || 'No Title';
      const content = post.fields.content || 'No Content';

      listItem.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
      blogPostsContainer.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }
}

// Execute fetchBlogPosts function when DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchBlogPosts);
