import React, { useState, useEffect } from 'react'
import { db, auth } from '../firebase'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import './Home.css'

const Home = () => {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'))
      setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id }) ))
    };
    getPosts()
  }, [])

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
    window.location.reload();
  }

  return (
    <div className='homePage'>
      {posts.map(post => (
        <div className='postContents' key={post.id}>
          <div className='postHeader'>
            <h1>{post.title}</h1>
          </div>
          <div className='postTextContainer'>
            {post.postsText}
          </div>
          <div className='nameAndDeleteButton'>
            <h3>{post.author.username}</h3>
            {auth.currentUser && post.author.id === auth.currentUser.uid && (
              <button onClick={() => handleDelete(post.id)}>削除</button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
