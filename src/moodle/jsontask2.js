import React,{ useState,useEffect } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
function Product1(){
    const[product,setProduct]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
 },[])
return(
    <div className="row col-lg-12 text-center justify-content-center">
    {product.map((value,index)=>(
            // <div className="col-lg-3 card">
            //     <img src={value.image}/>
            //    <h3 className="card-title">{value.title}</h3>
            //    <h2 >{value.id}</h2>
            //     </div>    

<div class=" col-lg-3 card ml-3 mb-3 shadow ">
<Link to={`/jdetails/${value.id}`}><img src={value.image} class="card-img-top" alt="..." height="450rem"/></Link>
<div class="card-body">
  <h5 class="card-title">{value.title}</h5>
  <p class="card-text">{value.description}</p>
</div>
<p><StarRatings rating={value.rating.rate}starDimension="20px" starRatedColor="gold"/></p>
<Link to={`/jdetails/${value.id}`}><a className="btn btn-primary">View More</a></Link>
</div>

    ))}
    </div>
);
}
export default Product1;