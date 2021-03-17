import React, { Component } from 'react';
import "./Body.css"

class Body extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="body">
                <div className="user-details">
                    <div className="name">What's your Name?
                        <input type="text"  id="username" placeholder="Name"/>
                    </div>
                    <div className="age">What is your Age?
                    <div className="buttons">
                    <button className="btn btn-outline-primary" >less than 20</button>
                    <button className="btn btn-outline-primary">20-30</button>
                    <button className="btn btn-outline-primary">31-40</button>
                    <button className="btn btn-outline-primary">41-50</button>
                    <button className="btn btn-outline-primary">50+</button>
                    </div>
                    </div>
                </div>
                <div className="skin-feel">How does your skin feel in the morning? 
                    <ul className="cheeks">Cheeks
                    <button  className="btn btn-outline-primary" id="dry">Dry</button>
                    <button  className="btn btn-outline-primary" id="normal">Normal</button>
                    <button  className="btn btn-outline-primary" id="oily">Oily</button>
                    </ul>
                    <ul className="t-zone">T zone
                    <button  className="btn btn-outline-primary" id="dry">Dry</button>
                    <button  className="btn btn-outline-primary" id="normal">Normal</button>
                    <button  className="btn btn-outline-primary" id="oily">Oily</button>
                    </ul>
                </div>
                <div className="skin-concern">What are your top skin concerns?
                <ul className="concern-options">select upto 2
                    <button className="btn btn-outline-primary" id="acne" >Acne</button>
                    <button className="btn btn-outline-primary" id="redness">Redness</button>
                    <button className="btn btn-outline-primary" id="pigmentation">Pigmentation</button>
                    <button className="btn btn-outline-primary" id="wrinkles">Wrinkles / Age Spots</button>
                    <button className="btn btn-outline-primary" id="blackheads">Blackheads / Whiteheads</button>
                    <button className="btn btn-outline-primary" id="others">Others, Enter here</button>
                </ul>
                </div>
                <div className="allergic">Are you allergic to any of these ingredients?
                <div className="buttons">
                <button className="btn btn-outline-primary" id="vitamin" >Vitamin C</button>
                <button className="btn btn-outline-primary" id="acid" >Salicylic Acid</button>
                <button className="btn btn-outline-primary" id="retinnol" >Retinnol</button>
                <button className="btn btn-outline-primary" id="not-sure" >Not Sure</button>
                </div>
                </div>
                <ul className="random-issues">Select all that apply to you
                    <div className="random-options">
                    <div className="lack-of-sleep">Lack of Sleep
                        <input type="checkbox" name="" id=""/>
                    </div>
                    <div className="lack-of-water">Lack of water intake
                        <input type="checkbox" name="" id=""/>
                    </div>
                    <div className="stressed">Stressed
                        <input type="checkbox" name="" id=""/>
                    </div>
                    <div className="pregnant">Pregnant
                        <input type="checkbox" name="" id=""/>
                    </div>
                    <div className="high-ac">High AC exposure
                        <input type="checkbox" name="" id=""/>
                    </div>
                    <div className="senstitive-skin">Senstitive skin
                        <input type="checkbox" name="" id=""/>
                    </div>
                    </div>
                </ul>
                <div className="email">Where can we email your detailed skin analysis?
                <div className="email-input">(No spam, we feel you!)
                <input type="text"  id="username" placeholder="Email"/>
                <button className="btn btn-primary btn-lg" id="routine" >SEE YOUR ROUTINE</button>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Body;