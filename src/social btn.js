import React from'react';
import './sq.css';
import Menu from "./menu";
function Btn(){
 return(
    <div class="social">
        <Menu/>
        <h1 className="shr">SOCIAL BUTTON</h1>
        <button class="b1">Like</button>
        <button class="b2">comment</button>
        <button class="b3">share</button>
    </div>
 )   
}
export default Btn;