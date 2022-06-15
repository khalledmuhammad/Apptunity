import React from 'react'
import "./Story.css"
import StortTop from './StoryTop';
import StoryBottom from './StoryBottom';

const Story = () => {
  return (
    <div className='d-flex flex-column align-items-center storyContainer '>
    <span className='headerStory' data-aos={"fade-in"} >Partners and Success story</span>
        <StortTop />
        <StoryBottom />


    </div>
  )
}

export default Story