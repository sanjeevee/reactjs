import React from 'react';
import Home1 from'./home';
import Work from'./work';
import Organic from'./organic';
import Testimonial from'./testimonial';
import Organicfram from'./organicfarm';
import Product from'./products';
import About from'./about';
import Menu from '../menu';
import Menu1 from './menu1';
function Respon(){
    return(
        <>
        <Menu/>
        <Menu1/>
                <Home1/>
                <Work/>
                <About/>
            <Organic/>
            <Testimonial/>
            <Product/>
            <Organicfram/>
            
            
        </>
    );
}
export default Respon;