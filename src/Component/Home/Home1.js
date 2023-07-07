import React from 'react';
import "../../Style/Home1.css"
import TopNav from '../Nav/TopNav';
import icon1 from "../../Images/Frame 1.png"
import icon2 from "../../Images/Component 2.jpg"
import icon3 from "../../Images/Component 8.jpg"
import icon4 from "../../Images/Group.jpg"
import icon5 from "../../Images/Group(1).jpg"
import homeSlide2 from "../../Images/unsplash_vEE00Hx5d0Q.png"
import rect1 from "../../Images/Rectangle 28.png"
import rect2 from "../../Images/Rectangle 28(1).png"
import rect3 from "../../Images/Rectangle 28(2).png"
import assets from "../../Images/assets.png"
import Slider from './Slider';
import people1 from "../../Images/Rectangle 29.png"
import people2 from "../../Images/Rectangle 29(1).png"
import social1 from "../../Images/bi_instagram.png"

import social3 from "../../Images/Vector(1).png"

export default function Home1(){
    return<div id="home1-container">
       <TopNav/>
       <div id="home-page-content">
        <div id="content-of-home-page" >
        <h1 id="header-name-content">Lorem ipsum dolor sit amet quo itaque.</h1>
        <p id="para-of-the-home">Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita</p>
        <button className="readMore-btn">Read More</button>
        </div>
       </div>
       <div>
        <p id="trusted-by">Trusted By</p>
        <div id="images-container">
            <img src={icon1}  className='imge-logos'/>
            <img src={icon2} className='imge-logos' />
            <img src={icon3} className='imge-logos' />
            <img src={icon4} className='imge-logos'  />
            <img src={icon5} className='imge-logos' />
        </div>
       </div>
      {/* Second slide in home */}
      <div id="second-slide-of-home-page">
        <div id="left-side-of-the-second-slide">
            <div id="second-slide-div">
                <h4 id="about-second-slide">About</h4>
                <h1 id="heading-of-second-slide">Lorem ipsum dolor sit amet quo itaque.</h1>
                <p id="para-of-second-slide">Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita</p>
                <button className="readMore-btn">Read More</button>
            </div>
        </div>
        <div id="right-side-of-the-second-slide">
            <img src={homeSlide2} id="imge-second-slide-home"></img>
        </div>
      </div>

      {/* Second slide Finished */}
      {/* third slide start */}
      <div id="third-slide-container">
            <div>
                <h4 className="service">Service</h4>
                <h1 className='service'>Lorem ipsum dolor sit</h1>
            </div>
            <div id="image-card-holder">
                <div className='image-card-container'>
                    <img src={rect1} className='threeimages-in-thirdSlide'/>
                    <p className='lorem-para-card'>Lorem ipsum dolor <br></br>sit amet que itaque.</p>
                    <button className="readMore-btn">Read More</button>
                </div>
                <div className='image-card-container'>
                    <img src={rect2} className='threeimages-in-thirdSlide'/>
                    <p className='lorem-para-card'>Lorem ipsum dolor <br></br>sit amet que itaque.</p>
                    <button className="readMore-btn">Read More</button>
                </div>
                <div className='image-card-container'>
                    <img src={rect3} className='threeimages-in-thirdSlide'/>
                    <p className='lorem-para-card'>Lorem ipsum dolor <br></br>sit amet que itaque.</p>
                    <button className="readMore-btn">Read More</button>
                </div>
            </div>
            <div id="more-servicess"><button className="readMore-btn">More Services</button></div>
        </div>
        {/* third slide finished */}
        {/* forth slide start */}
        <div id="second-slide-of-home-page">
        <div id="left-side-of-the-second-slide">
         <div id="right-side-of-the-second-slide">
            <img src={assets} id="imge-second-slide-home"></img>
          </div>
            <div id="second-slide-div" className='slide-three'>
                <h4 id="about-second-slide" >Insites</h4>
                <h1 id="heading-of-second-slide">Lorem ipsum dolor sit amet quo itaque.</h1>
                <p id="para-of-second-slide">Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita</p>
                <button className="readMore-btn">Read More</button>
            </div>
        </div>
      </div>
      {/* Forth slide finished */}
      {/* fifth slide */}
      <div>
        <div id="fifth-slide-of-the-page">
            <div id="dataof-fifth-slide">
             <p>Industries</p>
             <h1>Lorem ipsum dolor Sit</h1>
             <p>Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita</p>
        </div>
        </div>
             <div>
                <Slider/>
            </div>
        </div>
{/* fifth slide end  */}
{/* sixth slide start */}
      <div id="sixth-slide-container">
        <div id="left-side-sixth-slide-home">
            <div>
            <h1>WHAT PEOPLE SAY</h1>
            <p>Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut <br></br> accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita</p>
            </div>
        </div>
        <div  id="right-side-sixth-slide-home">
        <div className='image-card-container image-what-people-say'>
                    <img src={people1} className='threeimages-in-thirdSlide '/>
                    <p className='lorem-para-card-abc'>“Lorem ipsum dolor sit amet. Quo itaque galisum<br></br> vel molestias expedita ut accu”</p>
                    <h4>Linda</h4>
        </div>
        <div className='image-card-container image-what-people-say'>
                    <img src={people2} className='threeimages-in-thirdSlide '/>
                    <p className='lorem-para-card-abc'>“Lorem ipsum dolor sit amet. Quo itaque galisum<br></br> vel molestias expedita ut accu”</p>
                    <h4>Linda</h4>
        </div>
        </div>
      </div>

      <div id="footer-of-the-home">
        <div id="left-side-footer">
            <h1>SquareTech</h1>
            <p>Lorem ipsum dolor sit amet. Quo itaque.</p>
            <input type='text'/><button>Subscribe</button><br></br>
            <p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company</p>
        </div>
        <div id="right-side-footer">
            <div>
                <h5>sidemap</h5>
                <p>Home</p>
                <p>Service</p>
                <p>Career</p>
                <p>About</p>
                <p>Industries</p>
            </div>
            <div>
            <h5>Resourse</h5>
                <p>Help</p>
                <p>Blog</p>
                <p>Privacy</p>
            </div>
            <div>
                <h5>Follow Us</h5>
                <img src={social1}  />
                 <img src={social3}  />
            </div>
        </div>
      </div>

    </div>
    
}