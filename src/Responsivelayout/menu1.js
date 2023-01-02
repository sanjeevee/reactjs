import React from 'react';
import{Link} from "react-router-dom";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Menu1(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/home" className="navbar-brand" href="#">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/work" className="navbar-brand" href="#">Work</Link>
      </li>
      <li className="nav-item">
      <Link to="/organicfarm" className="navbar-brand" >Organicfram</Link>
      </li>
      <li className="nav-item">
      <Link to="/happyfarming" className="navbar-brand" >Happyfarming</Link>
      </li>
      <li className="nav-item">
      <Link to="/about" className="navbar-brand" >About</Link>
      </li>
      <li className="nav-item">
      <Link to="/product" className="navbar-brand" >Product</Link>
      </li>
      <li className="nav-item">
      <Link to="/organic" className="navbar-brand">Organic</Link>
      </li>
      
      
    </ul>
  </div>
</nav>
<div class="dropdown m-2">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Other task
  </button>
  <div class="dropdown-menu btn-warning" aria-labelledby="dropdownMenuButton">
    <Link to='/increment' class="dropdown-item">Increment</Link>
    <Link to='/fruit' class="dropdown-item">Fruitt</Link>
    <Link to='/feedback' class="dropdown-item">Feedback</Link>
    <Link to='/datefn' class="dropdown-item">Date</Link>
    <Link to='/comic' class="dropdown-item">Comics</Link>
    <Link to="/jsontask2" class="dropdown-item">jsontask2</Link>
    
    
  </div>
</div> 
        </>
    );
}
export default Menu1;
