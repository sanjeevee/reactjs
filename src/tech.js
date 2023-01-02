import React from "react";
import './tech.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import im1 from './tech1.jpeg';
import im2 from './tech2.jpeg';
import im3 from './tech3.jpeg';
import im4 from './tech4.png';
import Menu from'./menu';
export default function Tech(){
    return(
    <div><Menu/>
      <div className="container-fluid bg-primary">
        
        <div className="row">
            <div className="col-lg-12 text-center tb">
                <h1>learn 4.0 technologies</h1>
            </div>
            <div className="col-lg-10 text-center ml-5">
                <p>What is technology Technology is the application of scientific knowledge to the practical aims of human life or, as it is sometimes phrased, to the change and manipulation of the human environment.</p>
                </div>
            <div className="col-lg-12">
            <div class="row">
  <div class="col-sm-6">
    <div class="card bd1">
      <div class="card-body  ">
        <h5 class="card-title">Data scientific</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
         <img className="ti4"src={im1}/>
      </div>
    </div>
  </div>
  <div class="col-sm-6 ">
    <div class="card bd2">
      <div class="card-body">
        <h5 class="card-title">Dot developver</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <img className="ti4"src={im2}/>
      </div>
    </div>
  </div>
</div>

            </div>
            <div className="col-lg-12 mt-3">
            <div class="row">
  <div class="col-sm-6 ">
    <div class="card bd3">
      <div class="card-body ">
        <h5 class="card-title">VR developver</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <img className="ti4"src={im3}/>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card bd4">
      <div class="card-body">
        <h5 class="card-title">ML engineer</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <img className="ti4"src={im4}/>
      </div>
    </div>
  </div>
</div>
            </div>
          
          
           

        </div>

      </div>
      </div>
        
    );
}