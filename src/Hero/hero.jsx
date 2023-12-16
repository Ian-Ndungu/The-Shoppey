import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom';
import handIcon from "../images/hand_icon.png"; 
import heroImage from "../images/Hero_image.png";
import { RiArrowRightLine } from 'react-icons/ri'



function Hero() {
  return (
    <div className='hero'>
    
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={handIcon} alt='' />
                    
                </div>
                <p>Collection</p>
                <p>For everyone</p>
            </div>
            <Link to="/jewelery" className="hero-latest-btn">
                <div>Jewelery Collection</div>
                <RiArrowRightLine />
            </Link>
        </div>
        <div className='new-collection'>
        <Link to="/new collection" className="new-collection-btn">
                <div>New Collection</div>
                <RiArrowRightLine />
            </Link>
        </div>
        <div className="hero-right">
            <img src={heroImage} alt='heroImage' />
        </div>
    </div>
  )
}

export default Hero