import React from "react";
import './sw.css';
import img1 from'./FC-Bay.png';
import img2 from'./psg.png';
import Menu from "./menu";
function Super(){
    return(
        <div class="sl">
            <Menu/>
            <h1 class="shr">Super league </h1>
            <img class="sl1" src={img1}/>
            <img class="sl2" src={img2}/>

        </div>
    )
}
export default Super;
