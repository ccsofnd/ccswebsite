const express = require('express');
const fetch = require('node-fetch');
const cron = require('node-cron');

const app = express();
const PORT = 3001;

let instagramPosts = [];

// Fetch Instagram data from Graph API
const fetchInstagramData = async () => {
  try {
    const response = await fetch('https://graph.instagram.com/{user-id}/media?fields=id,media_type,media_url,caption&access_token={access-token}');
    const data = await response.json();
    instagramPosts = data.data.slice(0, 3);  // Get the latest 3 posts
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
  }
};

// Set up a cron job to fetch data every hour
cron.schedule('0 * * * *', fetchInstagramData);  // Every hour

// Serve Instagram posts via an API endpoint
app.get('/api/instagram', (req, res) => {
  res.json(instagramPosts);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
