import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hi from '../Assets/hero_image.png'
const hero = () => {
  return (
    <div className='hero'>
      <div className="l"></div>
      <h2>NEW ARRAIVALS ONLY</h2>
      <div>
        <div className='in'>
         <p>new</p>
         <img src={hand_icon} alt=""/>
        </div>
        <p>collections</p>
        <p>for everyone</p>
      </div>
      <div className="btn">
           <div>Latest Collection</div>
           <img src={arrow} alt=""/>
      </div>
      <div className="r">
        <img src={hi} alt=""/>
      </div>
    </div>
  )
}

export default hero
