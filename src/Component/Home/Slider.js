import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../Style/slider.css';
import image1 from "../../Images/Rectangle 18.png"
import image2 from "../../Images/Rectangle 18(1).png"
import image3 from "../../Images/Rectangle 19.png"

const Item = props => {
  return <div 
    className="slider-item" 
    style={{
      ":not(:last-of-type)": {
        marginRight: 12,
      }
    }}
    onClick={props.onClick}>
      {props.children}
    </div>
}


export default  function Slider( props){
  const containerRef = React.useRef(null)
  const styles = {
    hidescroll: {
      width: '100%',
      overflow: 'hidden',
    },
    container: {
      width: '100%',
      overflowX: 'auto',
      paddingBottom: 20,
      marginBottom: -20,
    },
  }

  const goTo = (n) => {
    containerRef.current.scrollLeft = containerRef.current.children[0].children[n-1].offsetLeft
  }

  const goToByElem = (elem) => {
    containerRef.current.scrollLeft = elem.offsetLeft;
  }

  const handleClick = (e) => {
    goToByElem(e.target)
  }

  return (
    <div className="slider-wrapper" style={styles.hidescroll}>
      <div className="slider-container" style={styles.container} ref={containerRef}>
        <ul className="slider-list">
          <Item onClick={handleClick}><img src={image1} className='images-of-the-item'/></Item>
          <Item onClick={handleClick}><img src={image2} className='images-of-the-item'/></Item>
          <Item onClick={handleClick}><img src={image3} className='images-of-the-item'/></Item>
          
        </ul>
      </div>
    </div>
  )

}