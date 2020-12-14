import React from 'react'
import { Link } from 'react-router-dom'
import SignoutLinks from "./SignoutLinks";
import SignupLinks from "./SignupLinks";
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
    console.log(state);
  return{

  }
}

export default connect (mapStateToProps)(Navbar);