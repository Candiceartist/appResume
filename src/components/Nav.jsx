import React from 'react';
import { Link } from "react-router-dom";


function Nav(props) {
    return (
      <div className="nav">
        <Link to="/">
          <div>Resume</div>
        </Link>
        <Link to="/Portfolio">
          <div>Portfolio</div>
        </Link>
      </div>
    );
  };

export default Nav