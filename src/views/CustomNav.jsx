import React from 'react';
import { Navbar } from 'reactstrap';
import { Link } from "react-router-dom";

const CustomNav = (props)=>(
  <Navbar className="main-nav">
    {
      props.back ?
      <Link to="/">
        <img alt="back-button" className="back-image" src="https://icon-library.net/images/white-back-icon/white-back-icon-7.jpg"/>
        Back
      </Link>
      : ""
    }
    <p>{props.title}</p>
  </Navbar>
)

export default CustomNav;
