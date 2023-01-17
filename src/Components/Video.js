import React from 'react'

const Video = () => {
  const key='AIzaSyCtB2m-m6ot8u5AXhIxJRbvoOB2WlU2PpE';
  fetch(key).then((res) => res.json())
  .then((json) => {
    console.log(json);
  })
  return (
    <div className='videos'>
      <h1>Recommended Videos</h1>

    </div>
  )
}

export default Video
