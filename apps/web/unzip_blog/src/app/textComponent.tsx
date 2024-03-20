'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define your Client Component
const FetchPosts = () => {
 // Initialize state to store the posts
 const [posts, setPosts] = useState([]);

 useEffect(() => {
    // Function to fetch posts from the API
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    // Call the fetchPosts function
    fetchPosts();
 }, []); // Empty dependency array means this effect runs once on component mount

 return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post:any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
 );
};

export default FetchPosts;