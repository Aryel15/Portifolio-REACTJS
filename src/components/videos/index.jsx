import React from 'react'
import './style.css'

export default function Videos() {
  const posts = new Array(14).fill('video')

  return (
    <div className='videos'>
      {posts?.map((video, index) => <video src={`/imgs/videos/${index+1}.mp4`} controls></video>)}
    </div>
  )
}
