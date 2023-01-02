import React from "react";
import'./feedback.css';
import sad from './sad.jpg';
import none from './none.jpg';
import happy from './happy.jpg';
import heart from './heart.jpg';
import "../moodle/feedback.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Feedback()
{
    return( 
        <div className="container-fluid">
            <div className="row fdd1">
                                                        <div className="col-lg-3 "/>
                    <div className="col-lg-5 row p-5 m-5 fdd2">
                                <h3>How satisfied are you with our customer support performance?</h3>
                            <div className="column col-lg-4">
                                    <img src={sad} className='sad col-lg-12 m-3'/>
                                    <h6 className="ml-4">Sad</h6>
                            </div>
                                    <div className="column col-lg-4">
                                        <img src={none} className='none col-lg-12 m-3'/>
                                        <h6 className="ml-4">None</h6>
                                    </div>
                                        <div className="column col-lg-4">
                                            <img src={happy} className='happy col-lg-12 m-3'/>
                                            <h6 className="ml-4">Happy</h6>
                                        </div>
                
                    </div>
                   <div className="col-lg-3"/>

            </div>
            <div className="row  fdd1">
             <div className="col-lg-3 "/>
                    <div className="col-lg-5 p-5 m-5 fdd2">
                               <div className="column col-lg-12">
                                    <img src={heart} className='hrt '/>
                                    <h3 className="mb-3">Thank You!</h3>
                                    <h6 className="m-3">We will use your feedback to improve our customer support performance</h6>
                               </div>
                
                    </div>
             <div className="col-lg-3"/>

            </div>
        </div>
        
    );
}