import React from'react';
import{Link} from'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
function Menu(){
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav1">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="navbar-brand" to='/super'>Super</Link>
      </li>
      <li className="nav-item">
      <Link className="navbar-brand" to='/notification'>Notification</Link>
      </li>
      <li className="nav-item">
      <Link className="navbar-brand" to='/social btn'>Social</Link>
      </li>
      <li className="nav-item">
      <Link className="navbar-brand" to='/tech'>Tech</Link>
      </li>
      <li className="nav-item">
      <Link className="navbar-brand" to='/login'>Login</Link>
      </li>
      <li className="nav-item">
      <Link className="navbar-brand" to='/responsive'>Responsive</Link>
      </li>
    </ul>
  </div>
</nav>
            
        
           
            
          


        </div>
    );
}
export default Menu;