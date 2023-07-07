import india from "../../Images/india (1) 1.png"
import logo from "../../Images/Vector.png"
import "../../Style/TopNav.css"
export default function TopNav(){
    return<div id="top-nav-container">
        <div id="logo-container">
            <img src={logo} className="logo-of-the-nav"/>
            <h1>SquareTech</h1>
        </div>
        <div id="naming-container">
            <ul>
                <li>Service</li>
                <li>Career</li>
                <li>Contact</li>
                <li>AboutUs</li>
                <li>|</li>
            </ul>
            <img src={india} className="logo-of-the-nav"/>
        </div>
    </div>
}