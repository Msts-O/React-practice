import React from 'react'
import { Link } from 'react-router-dom'
import SignupLinks from "./SignupLinks";
import SignoutLinks from "./SignoutLinks";
import { connect } from 'react-redux';

const Navbar = (props) =>{
 const { auth } =props;
 const links = auth.uid? <SignoutLinks/> : <SignupLinks/>
    return(
        <nav className="nav-wrapper grey ">
          <div className="container">
            <Link to="/" className="brand-logo">Marmonnant</Link>
          { links }
          </div>
        </nav>
           )
}

const mapStateToProps = (state) => {
    console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect (mapStateToProps)(Navbar);