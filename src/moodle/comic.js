import { useState,useEffect} from "react";
import './comic.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import StarRatings from "react-star-ratings";
import img from './DC.png';
export default function Comic(){
    const[details,setDetails]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/card.json")
        .then(info=>info.json())
        .then(data=>setDetails(data))
    },[])
    return(
        <>
       <div className="row col-lg-12 dcb1"><img className="dc" src={img}/></div>
       {/* <div className="row col-lg-12"><h1 className="text-primary dch">Comics</h1></div> */}
       
    <div className="row col-lg-12 dcb">
      {details.map((value,index)=>(
           <div class=" col-lg-3 card m-5">
            <p><StarRatings rating={value.ratings}starDimension="20px" starRatedColor="gold"/></p>
            <img className="gothma" src={value.Images}/>
  <div class="card-body">
    <h5 class="card-title">{value.title}</h5>
    <p class="card-text">{value.description}</p>
    <h1>{value.Price}</h1>
    <a href="#" class="btn btn-danger">Buy Now</a>
  </div>
</div>
        

      ))}
    
    </div>
    </>
    );
}

  


