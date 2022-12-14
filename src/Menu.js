import React from "react";
import { Link } from "react-router-dom";

const Menu=()=>{
    return(
        <div >
<nav className="navbar navbar-expand-lg navbar-dark mb-4 bg-primary">
    <div className="container">
  <Link className="navbar-brand" to="/">COVID19 DATA APP</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/About">About</Link>
      </li>
    </ul>
    
  </div>
  </div>
</nav>    
        


</div>);


}

export default Menu;