import { logo } from "../../assets";
import "./NavBar.css"
import React, { useState } from 'react'
const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState('All');

    const options = [
        { id: 'opt0', label: 'All' },
        { id: 'opt1', label: '2D Door' },
        { id: 'opt2', label: '2.5D Door' },
        { id: 'opt3', label: '3D Door' },
        { id: 'opt4', label: 'Bed Designs' },
        { id: 'opt5', label: '2D Wall Art' },
        { id: 'opt6', label: '3D Wall Art' },
        { id: 'opt7', label: 'Side Mouldings' },
        { id: 'opt8', label: 'Kitchen Cabinet' },
        { id: 'opt9', label: 'Wardrobe Design' },
    ];



    return (
        <nav>
            <div className="language-currence-container">
                <span>language</span>
                <br />
                <span>Currency</span>
            </div>
            <div className="logo">
            <img src={logo} alt="Your Logo" />
            <div className="cnc-designs">ALL CNC DESIGNS</div>
        </div>
            {/* <div className="search-box">
                <DropDownMenu options={options}/>
                <input className="search-bar" type="text" placeholder="Search..." />
                <span className="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
            </div> */}
            <div className="account-notification-cart">
                <div className="cart-notification">
                    <i className="fa-regular fa-bell"></i>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="account-holder">
                    <span className="user-icon"><i className="fa-solid fa-user"></i></span>
                    <span className="account-name">Account Holder</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
