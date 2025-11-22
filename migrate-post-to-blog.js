// Migration script: Change all documents with _type "post" to _type "blog"
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '5sq2xijg',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Make sure you have this in .env.local
});

async function migratePostsToBlog() {
  console.log('Starting migration: post → blog\n');
  
  try {
    // Fetch all documents with _type "post"
    const posts = await client.fetch('*[_type == "post"]');
    console.log(`Found ${posts.length} documents with _type "post"\n`);
    
    if (posts.length === 0) {
      console.log('No posts to migrate. Checking for existing blogs...');
      const blogs = await client.fetch('*[_type == "blog"]');
      console.log(`Found ${blogs.length} documents with _type "blog"`);
      return;
    }
    
    // Migrate each post
    for (const post of posts) {
      console.log(`Migrating: ${post.title} (${post._id})`);
      
      // Create a patch to change _type
      await client
        .patch(post._id)
        .set({ _type: 'blog' })
        .commit()
        .then(() => console.log(`  ✓ Migrated successfully`))
        .catch((err) => console.error(`  ✗ Error:`, err.message));
    }
    
    console.log('\n✅ Migration complete!');
    
    // Verify migration
    const remainingPosts = await client.fetch('*[_type == "post"]');
    const newBlogs = await client.fetch('*[_type == "blog"]');
    console.log(`\nVerification:`);
    console.log(`  - Remaining posts: ${remainingPosts.length}`);
    console.log(`  - Total blogs: ${newBlogs.length}`);
    
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migratePostsToBlog();
