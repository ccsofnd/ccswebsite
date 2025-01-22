import React, { useState, useEffect } from 'react';
//WORK IN PROGRESS DONT TOUCH
const Pictures = () => {
  const [posts, setPosts] = useState([]);

  // Fetch Instagram posts
  useEffect(() => {
    const fetchInstagramPosts = async () => {
      const userId = 'YOUR_USER_ID'; // Replace with actual user ID
      const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with actual access token
      const url = `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,caption&access_token=${accessToken}`;

      const response = await fetch(url);
      const data = await response.json();
      setPosts(data.data.slice(0, 3)); // Get the latest 3 posts
    };

    fetchInstagramPosts();
  }, []);

  return (
    <div className="instagram-gallery">
      {posts.map((post) => (
        <div key={post.id} className="instagram-image">
          <img src={post.media_url} alt={post.caption} />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Pictures;