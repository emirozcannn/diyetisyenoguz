// Test script to check Sanity blog data
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '5sq2xijg',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function testBlogQuery() {
  console.log('Testing Sanity blog query...\n');
  
  try {
    // Test 1: Check for 'blog' type
    console.log('1. Checking for documents with _type == "blog":');
    const blogPosts = await client.fetch('*[_type == "blog"]');
    console.log(`   Found ${blogPosts.length} blog posts`);
    if (blogPosts.length > 0) {
      console.log('   First blog post:', JSON.stringify(blogPosts[0], null, 2));
    }
    
    // Test 2: Check for 'post' type
    console.log('\n2. Checking for documents with _type == "post":');
    const posts = await client.fetch('*[_type == "post"]');
    console.log(`   Found ${posts.length} posts`);
    if (posts.length > 0) {
      console.log('   First post:', JSON.stringify(posts[0], null, 2));
    }
    
    // Test 3: List all document types
    console.log('\n3. Listing all document types in dataset:');
    const types = await client.fetch('array::unique(*[]._type)');
    console.log('   Types:', types);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

testBlogQuery();
