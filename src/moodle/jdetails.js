import React,{ useState,useEffect } from "react";
import StarRatings from "react-star-ratings";
import { useParams } from 'react-router-dom';
export default function Jdetails(){
    const[product,setProduct]=useState([])
    const{id}=useParams()
    useEffect (()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return(
        <>
        <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-6">
      <img className="container-fluid" src={product.image} height="700rem"/>
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">{product.description}</p>
        <p class="card-text">${product.price}</p>
        <p><StarRatings rating={product.ratings}starDimension="20px" starRatedColor="gold"/></p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </>
    );

}
