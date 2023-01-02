import React from'react';
import'./res.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import orgim from'./cow.jpeg';
function Testimonial(){
    return(
        <>
        <div className='container-fluid orgbg'>
            <div className='row'>
               
                <div className='col-lg-6 pr-0 pl-0'>
                    <img className='orgim1' src={orgim}/>

                </div>
                <div className='col-lg-6 or1'>
                    <h3 className='orgh3 text-white'>Happy Farming</h3>
                    <h1 className='orgh1 text-warning'>Happy Animals</h1>
                    <p className='orgp1 text-white'>The word "organic" means the way farmers grow and process farming (agricultural) products. These products include fruits, vegetables, grains, dairy products such as milk and cheese, and meat. Organic farming practices are designed to meet the following goals</p>
                    <div className='orgbt'>
                    <button className='btn btn-warning text-white '>Learn More</button>
                    </div> 
                </div>
            </div>

        </div>
        </>
    );
}
export default Testimonial;