import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import'./res.css';
import work1 from'./work1.png';
import work2 from'./strawberries.png';
import work3 from'./luv.jpeg';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import{FontAwesomeIcon}from'@fortawesome/react-fontawesome';
import{faLeaf,faCow} from'@fortawesome/free-solid-svg-icons';
function Work(){
    return(
        <>
        <div className="container-fluid wbg">
            <div className='row col-lg-12'>
                <h1 className='wh1 col-lg-12 text-center text-white'>How It Work?</h1>
                <p className='wp1 text-white'>Assigned to and forming an essential part of a military organization. Organic parts of a unit are those listed in its table of organization for the Army, Air Force, and Marine Corps, and are assigned to the administrative organizations of the operating forces for the Navy.</p>
            </div>
            <div className='row wc'>
            {/* <div className='col-lg-4'>
               <img className='card-img wc1' src={work1}/>
          </div> */}
          <div className='col-lg-4 card'>
            <h2 className='wh2'><FontAwesomeIcon icon={faLeaf}/></h2>
            <p className='wp2'>Oreanic farming practices reduceonserve unter redis caitenerev is also better for birdsOreanic farming practices reduceonserve unter redis caitenerev is also better for birdsOreanic farming practices reduceonserve unter redis caitenerev is also better for birdsOreanic farming practices reduceonserve unter redis caitenerev is also better for birdsOreanic farming practices reduceonserve unter redis caitenerev is also better for birds</p>
          </div>
          <div className='col-lg-4'>
          <img className='card-img wc2' src={work2}/>
          </div>
          <div className='col-lg-4 card'>
            <h2 className='wh2'><FontAwesomeIcon icon={faCow}/></h2>
            <p className='wp2'>Oreanic farming practices reduceonserve unter redis caitenerev is also better for birdsOreanic farming practices reduceonserve unter redis caitenerev is also better for birdsOreanic farming practices reduceonserve unter redis caitenerev is also better for birdsOreanic farming practices reduceonserve unter redis caitenerev is also better for birdsOreanic farming practices reduceonserve unter redis caitenerev is also better for birds</p>
          </div>
          </div>
          <div className='row mt-3'>
          <div className='col-lg-4'>
          <img className='card-img wc2' src={work3}/>
          </div>
          <div className='col-lg-4 card'>
          <h2 className='wh2'><FontAwesomeIcon icon={faCow}/></h2>
            <p className='wp2'>Oreanic farming practices reduceonserve unter redis caitenerev is also better for birdsOreanic farming practices reduceonserve unter redis caitenerev is also better for birdsOreanic farming practices reduceonserve unter redis caitenerev is also better for birdsOreanic farming practices reduceonserve unter redis caitenerev is also better for birdsOreanic farming practices reduceonserve unter redis caitenerev is also better for birds</p>
          </div>
          <div className='col-lg-4'>
          <img className='card-img wc2' src={work3}/>
          </div>
          </div>
        </div>
        </>
    );
}
export default Work;