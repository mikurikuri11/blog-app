import React, { useEffect } from 'react'
import { useState } from 'react'
import './CreatePost.css'
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom'

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const navigate = useNavigate()

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: content,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      }
    });
    navigate('/')
  }

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [])

  return (
    <div className='createPostPage'>
      <div className='postContainer'>
        <h1>記事を投稿する</h1>
        <div className='inputPost'>
          <div>タイトル</div>
          <input type='text' placeholder='タイトルを記入' onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='inputPost'>
          <div>投稿</div>
          <textarea placeholder='投稿内容を記入' onChange={(e) => setContent(e.target.value)} />
        </div>
        <button className='postButton' onClick={createPost}>投稿する</button>
      </div>
    </div>
  )
}

export default CreatePost
