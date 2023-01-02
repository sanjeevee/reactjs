import React from "react";
import'./res.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import pro1 from './product1.jpeg';
import pro2 from './product2.jpeg';
import pro3 from './product3.jpeg';
function Product(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4 card proc1">
                    <img className="rounded-circle proimg pro1" src={pro1}/>
                    <h1>Fresh fruits</h1>
                    <p>The secret is using fresh, soasonnradues in camhinstion with sandchoose the organic lifectule becausesoasonnradues in camhinstion with sandchoose the organic lifectule because</p>
                    </div>
                    <div className="col-lg-4 card proc1">
                    <img className="rounded-circle proimg pro1" src={pro2}/>
                    <h1>Vegetables</h1>
                    <p>The secret is using fresh, soasonnradues in camhinstion with sandchoose the organic lifectule becausesoasonnradues in camhinstion with sandchoose the organic lifectule because</p>
                    </div>
                    <div className="col-lg-4 card proc1">
                    <img className="rounded-circle proimg pro1" src={pro3}/>
                    <h1>Salad leaves</h1>
                    <p>The secret is using fresh, soasonnradues in camhinstion with sandchoose the organic lifectule becausesoasonnradues in camhinstion with sandchoose the organic lifectule because</p>
                    </div>
            </div>

        </div>
        </>
    );
}
export default Product;