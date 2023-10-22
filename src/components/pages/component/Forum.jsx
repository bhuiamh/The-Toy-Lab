// src/components/Forum.js
import React, { useState } from "react";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost) {
      setPosts([...posts, newPost]);
      setNewPost("");
    }
  };

  return (
    <section className="M-6 p-4 md:py-8 md:px-12 shadow-2xl rounded-lg py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Community Forum
        </h2>
        <div className="bg-gray-400 p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <textarea
              rows="4"
              className="w-full p-2 rounded-md border-gray-900"
              placeholder="Share your thoughts..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
          </div>
          <button
            className="bg-pink-500 text-white py-2 px-4 rounded-md inline-block hover:bg-pink-700 transition duration-300"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
        <div className="mt-6 space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              {post}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Forum;
