import React from'react';
import Menu from'./menu';
import'./sq.css';
import'../node_modules/bootstrap/dist/css/bootstrap.css';
import{FontAwesomeIcon}from'@fortawesome/react-fontawesome';
import{faCircleCheck,faCircleExclamation,faBell} from'@fortawesome/free-solid-svg-icons';
function Note(){
    return(
    <>
    <Menu/>
    <h1 class="nfh">Notification</h1>
      <div className="row nf">
        <div className="col-lg-12 nf1 mt-3 p-2 bg-primary">
        <h1><FontAwesomeIcon icon={faCircleCheck}/>information message</h1>
        </div>
        <div className="col-lg-12 nf2 p-2 mt-3 bg-success">
        <h1><FontAwesomeIcon icon={faCircleCheck}/>Success message</h1>
        </div>
        <div className="col-lg-12 nf3 p-2 mt-3 bg-warning">
        <h1><FontAwesomeIcon icon={faBell}/>Warning message</h1>
        </div>
        <div className="col-lg-12 nf4 p-2 mt-3 bg-danger">
        <h1><FontAwesomeIcon icon={faCircleExclamation}/>Error message</h1>
        </div>
        </div>
        
        </>
        
    );
}
export default Note;