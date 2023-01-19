import React from 'react'
import './videos.css'
import ReactDOM from 'react-dom'
function Videos(props) {
  const handleClick = (e) => {
    e.preventDefault();
    e.target.paused ? e.target.play() : e.target.pause()
    e.target.muted= !e.target.muted;
  }
  const handleScroll = (e) => { 
    
    let next = ReactDOM.findDOMNode(e.target).parentNode.nextSibling
    if(next){
      next.scrollIntoView()
      e.target.muted= true;

    }
  }
  return (
    <video controls src={props.url} muted='muted' onEnded={handleScroll} onClick={handleClick} className='videos-styling'>
</video>
)}

export default Videos