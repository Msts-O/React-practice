import React from 'react'
import { Link } from 'react-router-dom'
import SignoutLinks from "./SignoutLinks";
import SignupLinks from "./SignupLinks";

const Navbar = () =>{
    return(
        <nav className="nav-wrapper grey ">
          <div className="container">
            <Link to="/" className="brand-logo">Marmonnant</Link>
            <SignupLinks/>
            <SignoutLinks/>
          </div>
        </nav>
           )
}

export default Navbar;